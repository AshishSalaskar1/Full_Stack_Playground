export function sanitizeBookName(bookName){
    
    const openBracketPos = bookName.lastIndexOf("(");

    if(openBracketPos !== -1){
        const cleanedName = bookName.slice(0, openBracketPos-1).trim();
        // console.log(openBracketPos-1, cleanedName);
        return cleanedName;
        
    }
    else{
        return bookName;
    }
}