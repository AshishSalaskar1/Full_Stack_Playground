import { useRecoilState, useRecoilValue } from "recoil"
import { highlightListState, bookListState } from "../store/atoms/HighlightsAtom"
import { useEffect } from "react";
import { LeftSidebar } from "./highlights/LeftSidebar";
import { RightArea } from "./highlights/RightArea";


function HighlightPage() {
    const highlightList = useRecoilValue(highlightListState);
    // bookList -> { book_name: [{},{}]}
    const [bookList, setbookList] = useRecoilState(bookListState);
    // console.log("PARSED LIST", highlightList);

    // Init - group by bookname
    useEffect(function () {
        const bookNameList = Object.groupBy(highlightList, x => x.title);
        setbookList(bookNameList);
        // console.log("GROUPED LIST",bookNameList);
    }, [highlightList])

    return (
        <>
            <div>
                {/* <!-- Navbar --> */}
                <div className="flex justify-between items-center w-full h-10 bg-violet-950">
                    <div className="m-2 p-2 text-white font-medium">Home</div>
                    <div className="m-2 p-2 text-white font-medium">Logout</div>
                </div>
            </div>
            <div className="flex mx-auto my-4 rounded-2xl w-[90vw] h-[85vh] bg-blue-200"> 
                <LeftSidebar></LeftSidebar>
                <RightArea></RightArea>
            </div>
        </>
    )
}

export {
    HighlightPage
}