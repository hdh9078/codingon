import {useState} from "react"

export default function Test3() {
    const [inputWriter, setWriter] = useState("")
    const [inputTitle, setTitle] = useState("")
    const [comments, setComments] = useState([])
    const [select1, setSelect1] = useState("")
    const [search, setSearch] = useState("")
    const [answer, setAnswer] = useState([])

    const addComment = ()  => {
        const newComment = {
            writer: inputWriter,
            title: inputTitle
        }
        
        setComments([...comments, newComment]);
        setTitle ("");
        setWriter ("");
    }

    const addSearch = () => {
        if(select1 === "작성") {
            
            setAnswer = comments.filter((comment) => {return comment.writer.includes(search)})
            
        } else {
            
            setAnswer = comments.filter((comment) => {return comment.title.includes(search)})
            
        }
        answer(setAnswer)
    }



    return (
        <>
            <form name="form">
                <label htmlFor="writer">작성자</label>
                <input id="writer" type="text" value={inputWriter} onChange={(e) => setWriter(e.target.value)}/>
                <label htmlFor="title">제목</label>
                <input id="title" type="text" value={inputTitle} onChange={(e) => setTitle(e.target.value)}/>
            </form>
            <button onClick={addComment}>작성</button>
            <select  value={select1} onChange={(e) => setSelect1(e.target.value)}>
                <option value={"작성"}>작성자</option>
                <option value={"제목"}>제목</option>
            </select>
            <input type="text" placeholder="검색어" value={search} onChange={(e) => setSearch(e.target.value)}/>
            <button onClick={addSearch}>검색</button>


            <table border={1} cellSpacing={0}>
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>제목</th>
                            <th>작성자</th>
                        </tr>
                    </thead>
                    <tbody>
                        {answer.length > 0 ? answer : comments.map((value, index) => {
                            return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{value.title}</td>
                                <td>{value.writer}</td>
                            </tr>
                            )
                        })}
                        
                    </tbody>
                </table>
        </>
    )

}