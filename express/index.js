const express = require("express");
const { z } = require("zod");

let validateUserSchema = (req, res, next) => {
    let userSchema = z.object({
        userName: z.string(),
        userId: z.string(),
        gender: z.literal("MALE").or(z.literal("FEMALE"))
    })

    let userData = req.body;
    let validationResult = userSchema.safeParse(userData);

    if (!validationResult.success){
        return res.status(422).json({
            msg: validationResult.error
        })
    }
    console.log(validationResult);

    next();
}


const app = express();
// adding middleware for all routes
app.use(express.json())

app.get("/hello", (req,res) => {
    console.log(`Hit with request ${req}`);
    res.send("HELLO WORLD BACK");
})


// adding validateUserSchema middleware to only one route
app.post("/addUser", validateUserSchema , (req,res) => {
    console.log(`Hit with request`);
    res.send("HELLO WORLD BACK");
})


app.listen(3000);