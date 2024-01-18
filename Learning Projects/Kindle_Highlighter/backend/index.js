const express = require("express")
const cors = require("cors");
const { processingRouter } = require("./routes/processingRoutes")


const app = express();
app.use(express.json());
app.use(cors());
app.use(processingRouter);



const PORT = 3000
app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});