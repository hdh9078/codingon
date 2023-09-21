import {Component} from "react"


class test3 extends Component{
    constructor(props) {
        super(props)

        //초기화
        this.state = {
            inputWriter: "", //작성자
            inputTitle: "",  //제목
            comments: [], //입력한 내용
            select1: "", //검색타입
            search: "", //검색내용
            answer: [] //검색결과
        }

        this.onChange = this.onChange.bind(this)
        this.addComment = this.addComment.bind(this)
        this.addSearch = this.addSearch.bind(this)
    }
    
    onChange(event) {
        this.setState(() => ({inputWriter:event.target.value}))
    }

    addComment() {
        const newComment = {
            writer: this.state.inputWriter,
            title: this.state.inputTitle
        }
        // ...[1,2,3] = 1, 2, 3
        this.setState( ()=>({comments: [...this.state.comments, newComment], inputTitle: "", inputWriter: ""}))
    }

    addSearch() {
        if(this.state.select1 === "작성") {
            let aa = this.state.comments.filter((comment) => {return comment.writer.includes(this.state.search)})
            this.setState({answer:aa})
            console.log("qw", aa)
        } else {
            let aa = this.state.comments.filter((comment) => {return comment.title.includes(this.state.search)})
            this.setState({answer:aa})
            console.log("aa", aa)
        }
    }
    


    render() {

        return (
            <>
                <form name="form">
                    <label htmlFor="writer">작성자</label>
                    <input id="writer" type="text" value={this.state.inputWriter} onChange={(e) => this.onChange(e)}/>
                    <label htmlFor="title">제목</label>
                    <input id="title" type="text" value={this.state.inputTitle} onChange={(e) => this.setState({inputTitle: e.target.value})}/>
                </form>
                <button onClick={this.addComment}>작성</button>
                
                {/* onChange: input, textarea, select 값이 변경될때마다 발생하는 이벤트 핸들러 */}
                <select  value={this.state.select1} onChange={(e) => this.setState({select1: e.target.value})}>
                    <option value={"작성"}>작성자</option>
                    <option value={"제목"}>제목</option>
                </select>
                <input type="text" placeholder="검색어" value={this.state.search} onChange={(e) => this.setState({search: e.target.value})}/>
                <button onClick={this.addSearch}>검색</button>
                <table border={1} cellSpacing={0}>
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>제목</th>
                            <th>작성자</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(this.state.answer.length > 0 ? this.state.answer : this.state.comments).map((value, index) => {
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
}


export default test3;