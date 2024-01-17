const fs = require("fs")

class HighlightParser {
    constructor(data) {
        this.data = data;
    }


    getProcessedText() {
        let highlightData = this.data
        highlightData = highlightData.split("==========").filter(x => x.trim().length != 0);
        let highlightList = highlightData.map(x => parseSingleHighlight(x));
        return highlightList;
    }
}

module.exports = {
    HighlightParser
}


function parseSingleHighlight(noteData) {
    try {
        note = noteData.replace(/\r/g, '').replace(/\uFEFF/g, ''); // remove \r char
        let [bookTitle, metadata, highlight] = note.split("\n").filter(x => x.length != 0);

        // parse bookTitle: Wish I Could Tell You (Datta, Durjoy)
        let bookAuthor = bookTitle.slice(bookTitle.indexOf("(") + 1, bookTitle.length - 1).trim();

        // parse metaData: 
        // - Your Highlight on page 86 | Location 1267-1270 | Added on Thursday, November 4, 2021 3:09:39 PM
        const [pageLoc, charLoc, addedOn] = metadata.split("|");
        let pageNum = pageLoc.trim().split(" ").pop();
        let [charStart, charEnd] = charLoc.trim().split(" ").pop().split("-");

        let charLocation = {
            start: charStart,
            end: charEnd
        };

        let addedDate = new Date(addedOn.split("Added on").pop().trim());

        // console.log(bookTitle);

        return {
            title: bookTitle,
            author: bookAuthor,
            highlight: highlight,
            pageNum: pageNum,
            cordinates: charLocation,
            addedDate: addedDate

        };
    } catch(err) {
        console.log(noteData);
        console.log(note.split("\n").filter(x => x.length != 0));
        console.log(err);
    }
}




// try {
//     let fileData = fs.readFileSync(
//         `D:/Github/Full_Stack_Playground/Learning Projects/Kindle_Highlighter/backend/utils/data.json`,
//         "utf-8"
//     );

//     inputData = JSON.parse(fileData);
//     parseHighlightData(inputData.content);

// } catch (err) {
//     console.log(err);
// }

