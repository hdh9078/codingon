import MyContext from "./lang-contec"
import {useContext} from "react"

export default function LanguageSelector() {
    //두번째 방법
    const value = useContext(MyContext);

    return (
        <div>
            <h2>현재 선택된 언어: {value.language}</h2>
            <select value={value.language} onChange={(e) => value.setLanguage(e.target.value)}>
                <option value="ko">한국어</option>
                <option value="en">영어</option>
                <option value="jp">일본어</option>
            </select>
        </div>
        )

    //첫 번째 방법
    // return (
    //     <MyContext.Consumer>
    //                 {(value) => {
    //                     return (
    //                         <div>
    //                             <h2>현재 선택된 언어: {value.language}</h2>
    //                             <select value={value.language} onChange={(e) => value.setLanguage(e.target.value)}>
    //                                 <option value="ko">한국어</option>
    //                                 <option value="en">영어</option>
    //                                 <option value="jp">일본어</option>
    //                             </select>
    //                         </div>
    //                     )
    //                 }}
    //     </MyContext.Consumer>
    // )
}