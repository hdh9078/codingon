import image from "./아아.jpg"
import './App.css';

function test4(props) {
    return (
        <>
            <div className="aa">
                <h1>이번주 베스트셀러</h1>
                <img src={image}></img>
                <h2>{props.title}</h2>
            </div>
            <div className="asd">
                <p>저자: {props.author}</p>
                <p>판매가: {props.price}</p>
                <p>구분: {props.type}</p>
            </div>
            
            
        </>
    )
}

export default test4;