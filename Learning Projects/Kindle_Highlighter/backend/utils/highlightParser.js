class HighlightParser {
    constructor (data){
        this.data = data;
        this.preprocessData();
    }


    preprocessData(){
        this.result = data.split("==========");
    }

    getProcessedText(){
        return this.result;
    }
}

module.exports = {
    HighlightParser
}