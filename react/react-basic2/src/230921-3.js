import {useState} from "react"

export default function Test3() {
    const [inputWriter, setWriter] = useState("")
    const [inputTitle, setTitle] = useState("")
    const [comments, setComments] = useState([])

    const addComment = ()  => {
        const newComment = {
            writer: inputWriter,
            title: inputTitle
        }
        
        setComments([...comments, newComment]);
        setTitle ("");
        setWriter ("");
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

            <table border={1} cellSpacing={0}>
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>제목</th>
                            <th>작성자</th>
                        </tr>
                    </thead>
                    <tbody>
                        {comments.map((value, index) => {
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