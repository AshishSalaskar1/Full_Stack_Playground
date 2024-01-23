import { useRecoilState, useRecoilValue } from "recoil";
import { bookListState, currentBookState } from "../../store/atoms/HighlightsAtom";
import { useEffect, useState } from "react";
import { sanitizeBookName } from "../../utils/formatUtils";

export function RightArea() {
    const [bookList, setbookList] = useRecoilState(bookListState);
    const curBookName = useRecoilValue(currentBookState);

    const [curBookData, setCurBookData] = useState({})

    useEffect(function () {
        // Only populate if some book is selected and booksList exist
        if (curBookName !== "" && bookList.length !== 0) {
            let curBook = {
                "author": bookList[curBookName][0].author,
                "name": curBookName,
                "numHighlights": bookList[curBookName].length,
                "highlightList": bookList[curBookName].map(x=>x)
            }
            // console.log("SET CUR BOOK:", curBook);
            // console.log("SET CUR BOOK LIST:" ,curBook.highlightList);
            // console.log(curBook.highlightList.map(x => console.log("WITHIN: ",x)));
            console.log("THIS IS GETTING PRINTED: ",curBook);
            setCurBookData(curBook);
        }

        // setCurBookData(curBook)
    }, [curBookName, bookList])


    return (
        <>
            {/* <!-- RIGHT SIDEBAR --> */}
            <div className="ml-0 bg-blue-200 w-8/12 h-full rounded-r-2xl">
                {/* <!-- BOOK INTRODUCTION --> */}
                <div>
                    {/* <!-- BOOK HEADERS --> */}
                    <div className="flex bg-violet-950 px-4 py-2 rounded-tr-2xl">
                        <div className="flex flex-col w-full justify-start">
                            <div className="text-white text-base font-semibold">{curBookData.name ? sanitizeBookName(curBookData.name) : "book_name"}</div>
                            <div className="italic text-sm text-gray-400">{curBookData.author ? curBookData.author : "author_name"}</div>
                            <div className="flex pb-2 items-center">
                                <div className="text-white text-[0.75rem] bg-blue-600 rounded-xl px-2 py-0.5"> {curBookData.numHighlights ? curBookData.numHighlights : "0"} </div>
                            </div>
                        </div>
                        <div>
                            {/* TODO: Fetch images from some web-scraping results*/}
                            <img className="w-20 h-20 rounded-full shadow-[0_6px_6px_rgba(0,0,0,0.3)]"
                                src="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81lIu0eBO5L._AC_UF1000,1000_QL80_.jpg" />
                        </div>
                    </div>
                </div>

                {/* <!-- HIGHLIGHTS LIST --> */}
                <div className="overflow-y-auto h-[60vh]">
                    {/* <!-- SINGLE HIGHLIGHT --> */}
                    {
                     curBookData && curBookData.highlightList ? curBookData.highlightList.map((x, idx) => <SingleHighlight highlightData={x} key={idx}></SingleHighlight>) : ""
                    }

                </div>

            </div>
        </>
    )
}

function SingleHighlight({ highlightData }) {
    return (
        <>
            <div className="flex flex-col mx-3 my-4 p-2 bg-white rounded-xl shadow-[0_6px_6px_rgba(0,0,0,0.3)] hover:bg-slate-200">
                <div className="italic text-sm">Page Number: {highlightData.pageNum}</div>
                <div className="text-black font-regular text-justify">
                    {highlightData.highlight.replace(/ +/g, ' ')}
                </div>
            </div>
        </>
    )
}