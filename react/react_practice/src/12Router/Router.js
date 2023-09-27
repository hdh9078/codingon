import {BrowserRouter, Routes, Route} from "react-router-dom"
import Main from "./Main"
import Student from "./Student"
import Codingons from "./Codingons"
import StudentS from "./Student"


export default function Router() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main/>} />
                    <Route path="/student/:name" element={<Student/>} />
                    <Route path="/student/:name" element={<Codingons/>} />
                    <Route path="/student/new?name=kdt9" element={<StudentS/>} />
                </Routes>
            </BrowserRouter>
            
        
        </>
    )
}