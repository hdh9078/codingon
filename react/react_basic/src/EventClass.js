import {Component} from "react";

class EventClass extends Component {
    
    constructor(props) {
        //super는 부모의 값을 사용하기 위하여 넣은 키워드
        super(props);

        //this바인딩
        //일반형 함수일때만 사용
        this.handleClick = this.handleClick.bind(this);
    }
    

    handleClick() {
        alert("클래스형 컴포넌트");
    }

    handleClick2 = () => {
        alert("클래스형 컴포넌트 2번");//화살표 함수는 바인딩 안해줘도 된다.
    }

    
    test = () => {
        alert(this.props.message);
    }

    render() {
        return (
            <>
                <button onClick={this.handleClick}>클릭class</button>
                <button onClick={this.handleClick2}>클릭class2</button>
                <button onClick={this.test}>Show Message</button>
            </>
        );
    };
};

export default EventClass;