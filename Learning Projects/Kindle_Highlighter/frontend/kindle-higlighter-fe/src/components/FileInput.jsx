import { useRef } from "react";
import { hitParseHighlightsEndpoint } from "./utils";
import { useRecoilState } from "recoil";
import { highlightListState } from "../store/atoms/HighlightsAtom"
import { useNavigate } from "react-router-dom";

export function FileInput() {
    const fileInputRef = useRef(null);
    const [highlightList, setHighlightList] = useRecoilState(highlightListState)
    const navigate = useNavigate();

    const submitBtnClicked = () => {
        const file = fileInputRef.current.files[0];
        try {
            const reader = new FileReader();

            reader.onload = async function (e) {
                const content = e.target.result;
                let inputData = {
                    content: content
                };
                let parsedContent = await hitParseHighlightsEndpoint(inputData);
                console.log(parsedContent);
                setHighlightList(parsedContent.parsedContent);

            };


            reader.readAsText(file);
            console.log(`Set highlightList to atom: ${highlightList}`)
            navigate("/highlights");
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            {/* <!-- Navbar --> */}
            <div className="flex justify-between items-center w-full h-10 bg-violet-950">
                <div className="m-2 p-2 text-white font-medium">Home</div>
                <div className="m-2 p-2 text-white font-medium">Logout</div>
            </div>
            <br></br>
            <div className="mx-auto bg-indigo-300 flex flex-col w-[50vw] items-center rounded-2xl shadow-lg">
                <div className="my-5">
                    <input type="file" ref={fileInputRef} />
                </div>
                <div className="my-2">
                    <button className="bg-blue-800 text-gray-200 rounded-2xl font-sans text-sm m-2 px-2 py-1 shadow-xl hover:bg-blue-950" onClick={submitBtnClicked}>
                        Upload Highlight File
                    </button>
                </div>
            </div>

        </div>
    )
}

