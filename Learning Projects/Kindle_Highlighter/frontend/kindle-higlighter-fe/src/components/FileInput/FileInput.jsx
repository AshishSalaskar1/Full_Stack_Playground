import { useRef, useState } from "react";
import { hitParseHighlightsEndpoint } from "../utils";


export function FileInput() {
    const fileInputRef = useRef(null);
    const [highlightList, setHighlightList] = useState([]);

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

        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <div>
                <input type="file" ref={fileInputRef} />
                <br /><br />
                <button onClick={submitBtnClicked}> Upload Highlight File</button>
            </div>
            <div>
                SAMPLE
                {highlightList.map(x => <HighLightCard highlight={x} />)};
            </div>
        </div>
    )
}

function HighLightCard({highlight}) {
    // const title = highlight.highlight.title;
    // const author = highlight.highlight.author;


    // figure out why highlight.highlight is coming up: its always prop.highlight
    return (
        <div style={{display: "flex", justifyContent: "space-between"}}>
            <div> {highlight.title} </div>
            <div> {highlight.author} </div>
        </div>
    )
}