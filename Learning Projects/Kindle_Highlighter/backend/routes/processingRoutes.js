const express = require("express")
const { HighlightParser } =  require("../utils/highlightParser");


const processingRouter = express.Router()

processingRouter.post("/parseHighlights", function (req, res) {
   let content = req.body.content;
   const highlightParse = new HighlightParser(data=content);
   const parsedContent = highlightParse.getProcessedText();

//    console.log(parsedContent);

   return res.json({
    parsedContent: parsedContent
   })

})

module.exports = {
    processingRouter
}