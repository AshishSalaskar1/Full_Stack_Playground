const express = require("express")
const { HighlightParser } =  require("../utils/highlightParser");


const processingRouter = express.Router()

processingRouter.post("/parseHighlights", function (req, res) {
   let content = req.body.content;
   const highlightParse = new HighlightParser(data=content);

   let processedText = highlightParse.getProcessedText();
   console.log(processedText);

   return res.json({
    msg: "SUCCESS"
   })

})

module.exports = {
    processingRouter
}