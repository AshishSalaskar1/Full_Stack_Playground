import { useRecoilState } from "recoil";
import { bookListState, currentBookState } from "../../store/atoms/HighlightsAtom";

export function LeftSidebar() {
    // booklist = {bookName: [], ...}
    const [bookList, setbookList] = useRecoilState(bookListState);
    // console.log("BOOK LIST: ", bookList);

    return (
        <>
            {/* <!-- LEFT SIDEBAR --> */}
            <div className="bg-violet-950 w-4/12 h-full rounded-l-2xl">
                {/* <!--  Book title bar --> */}
                <div className="flex justify-between items-center bg-violet-500 rounded-tl-2xl">
                    <div className="text-white font-semibold px-3 py-2">Book List</div>
                    <div>
                        <button>
                            <i className="fas fa-search text-white mr-2"></i>
                        </button>
                    </div>
                </div>
                {/* <!-- Book name list --> */}
                <div className="mt-3 overflow-y-auto h-[72vh]">
                    {/* <!-- SINGLE BOOK CARD --> */}
                    {Object.keys(bookList).map((x,idx) => {
                        // console.log(x);
                        return (
                            <SingleBookCard
                                key = {idx}
                                name={x}
                                author={bookList[x][0].author}
                                count={bookList[x].length}
                            ></SingleBookCard>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

function SingleBookCard({ name, author, count }) {
    const [curBookName, setCurBookName] = useRecoilState(currentBookState);
    const currentBookName = name;

    function updateCurBook(event){
        setCurBookName(currentBookName);
    }
    
    return (
        <div 
            className="flex justify-between mx-4 my-2 px-4 py-2 bg-violet-200 rounded-2xl hover:bg-violet-300 items-center" 
            onClick={updateCurBook}>
            {/* <!-- BOOK TITLE, AUTHOR --> */}
            <div className="flex flex-col mr-2 w-9/12">
                <div className="book-title text-black font-semibold text-sm  pt-1">
                    {name}
                </div>
                <div className="italic text-sm text-gray-900 pt-1">{author}</div>
                <div className="flex pt-1">
                    <div className="text-white text-[0.75rem] bg-blue-600 rounded-xl px-2 py-0.5">
                        {count}
                    </div>
                </div>
            </div>
            {/* <!-- BOOK IMAGE --> */}
            <div className="w-3/12">
                {/* TODO: Fetch images from some web-scraping results */}
                <img
                    className="w-16 h-16 rounded-full shadow-[0_6px_6px_rgba(0,0,0,0.3)]"
                    src="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81lIu0eBO5L._AC_UF1000,1000_QL80_.jpg"
                />
            </div>
        </div>
    );
}
