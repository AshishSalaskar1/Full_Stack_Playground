// Working process
// GET /signin 
// - user logs in via email and password, we check if he is authorized
// - If yes send him a JWT with his {username: email}

// GET /getusers -> list all users in system other than current
// - user passes the JWT as Authorization Headers
// - verify that JWT using the passkey that u had
// - only if verified send actual data of other users


// Remmeber here ing getusers we are not passing username again, 
// that is decoded from JWT
// JWT token has 2 thing - verify, carry some data also


const express = require("express")
const jwt = require("jsonwebtoken")

const USER_DB = [
    {
        username: "ash@gmail.com",
        password: "ashish",
        name: "Ashish Salaskar"
    },
    {
        username: "harry@gmail.com",
        password: "harry",
        name: "Harry Potter"
    },
    {
        username: "ron@gmail.com",
        password: "ron",
        name: "Ron Weasley"
    },
    {
        username: "hermoine@gmail.com",
        password: "hermoine",
        name: "Hermoine Granger"
    },

]
const jwtKey = "ashish"

const app = express()
app.use(express.json())

app.get("/signin", (req, res) => {
    const userName = req.body.username;
    const pass = req.body.password;

    console.log(userName, pass)

    let isAuthUser = USER_DB.find((x) =>
        x.username === userName && x.password === pass
    )

    // Object destructuring way
    // let isAuthUser = USER_DB.find(({username, password})=>
    //     username === userName && password === pass
    // )

    if (isAuthUser === undefined) {
        return res.status(403).json({
            msg: "User not found in authorized user list"
        })
    }

    let jwtToken = jwt.sign({ username: userName }, jwtKey);
    return res.json({
        "token": jwtToken
    })
})


app.get("/getusers", (req, res) => {
    const token = req.headers.authorization;
    try {
        const decodedToken = jwt.verify(token, jwtKey);
        const username = decodedToken.username;

        return res.json(USER_DB.filter(x => x.username != username))
    }
    catch {
        return res.status(403).json({
            msg: "JWT token invalid"
        })
    }

})

app.listen(3000)