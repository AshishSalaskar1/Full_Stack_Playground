import { useState } from 'react'
import { FileInput } from "./components/FileInput.jsx"
import { HighlightPage } from "./components/ShowHighlghts.jsx";
import { RecoilRoot } from 'recoil'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<FileInput></FileInput>}> </Route>
            <Route path="/highlights" element={
              <HighlightPage></HighlightPage>
            }> </Route>
          </Routes>
        </BrowserRouter>
        {/* <FileInput> </FileInput> */}
      </RecoilRoot>
    </>
  )
}

export default App
