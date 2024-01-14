const mongoose = require("mongoose")

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

let connectionString = "xxxx"

mongoose
    .connect(connectionString)
    .then(() => {
        console.log("Mongodb connection successfull.....")
    })
    .catch((err) => {
        console.log(err)
    })


let insertUser = async (userModel, userData) =>  {
    // INSERT ONE FIELD
    let singleUser = new userModel(userData)

    try{
        const resp = await singleUser.save();
        console.log("Insert single records")
    }catch(err){
        console.log(err)
    }

}

let insertUsers = async (userModel, userDataList) => {
    // INSERT MULTIPLE ONES
    try{
        const resp = await userModel.insertMany(userDataList)
        console.log("Insert multiple records")
    }catch(err){
        console.log(err)
    }
    
}

let fetchUser = async (userModel, userName) => {
    try{
        const res = await userModel.findOne({"username": userName});
        // res = None if not found
        return res
    }
    catch(err){
        console.log(err)
    }
    
}

let fetchUserList = async (userModel) => {
    try{
        const res = await userModel.find();
        // res = None if not found
        return res
    }
    catch(err){
        console.log(err)
    }
    
}

async function runScript() {
    let userSchema = new mongoose.Schema({
        username: String,
        password: String,
        name: String
    });
    let userModel = mongoose.model("Users", userSchema)

    try {
        
        // await insertUser(userModel, {
        //     username: "ash@gmail.com",
        //     password: "ashish",
        //     name: "Ashish Salaskar"
        // });

        // await insertUsers(userModel, USER_DB);
        let res = await fetchUserList(userModel);
        console.log(res);

        console.log("DONE");
    } catch (error) {
        console.error(error);
    } finally {
        mongoose.disconnect();
        console.log("Connection closed");
    }
}






runScript()