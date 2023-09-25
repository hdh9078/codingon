import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
  let post = "강남우동맛집"
  let [title, setTitle] = useState(["남자 코트 추천", "강남우동맛집", "파이썬독학"]);
  let [logo, setLogo] = useState("ReactBlog");
  let [like, setLike] = useState(0);


  function liked() {
    setLike(like + 1)
  }

  function change() {
    let copy = [...title];
    copy[0] = "여자 코트 추천"
    setTitle(copy)
  }

  function sort() {
    let sorts = [...title]
    sorts = sorts.sort()
    setTitle(sorts)
  }


  return (

    
    <div className="App">
      <div className='black-nav'>
        <h4>{logo}</h4>
      </div>

      <button onClick={change}>글 수정</button>
      <button onClick={sort}>순서정렬</button>

      <div className="list">
        <h4>{title0[0]} <span onClick={liked}>좋아요</span> {like} </h4>
        <p>2월 17일 발행</p>
      </div>


      <div className="list">
        <h4>{title0[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{title0[2]}</h4>
        <p>2월 17일 발행</p>
      </div>

      <Modal></Modal>
    </div>
  );
}

function Modal() {
  return (
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}


export default App;
