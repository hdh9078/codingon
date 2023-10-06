import MyContext from "./store/setting-contec"
import {useContext} from "react"

export default function ThemaSelector() {
    const value = useContext(MyContext)

    return (
        <div>
            <h2>테마: {value.thema}</h2>
            <select value={value.thema} onChange={(e) => value.setThema(e.target.value)}>
                <option value="dark">dark</option>
                <option value="light">light</option>
            </select>
            <h2>언어: {value.language}</h2>
            <select value={value.language} onChange={(e) => value.setLanguage(e.target.value)}>
                <option value="English">영어</option>
                <option value="Korean">한글</option>
            </select>
        </div>
    )
}