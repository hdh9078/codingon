import {Component} from "react"


class Counter extends Component{
    // constructor(props) {
    //     //부모클래스인 Component의 생성자 호출
    //     super(props);

    //     this.state = {
    //         number: 0,
    //     };
    //     //바인딩
    //     this.handleIncrement = this.handleIncrement.bind(this);

    // };

    // handleIncrement() {
    //     this.setState({number: this.state.number + 1});
    //     console.log(this);
    // };

    state = {
        number: 0,
    }

    handleIncrement = () => {
        this.setState({number: this.state.number + 1});
        console.log("qw", this);
    };


    handleDecrement = () => {
        //setState는 호출 직후에 상태가 바로 업데이트 되지 않는다.
        //리액트는 여러 setState 호출을 일괄 처리한다.
        //2번의 setState가 1번의 setState의 결과를 기반으로 동작하지 않습니다.
        // this.setState({number: this.state.number - 1});// --- 1번
        // this.setState({number: this.state.number - 1});// --- 2번

        this.setState( (prevState) => { //prevState는 이전상태 값이 들어간다 this대신에 사용
            return {number: prevState.number -1}
        });
        this.setState( (prevState) => ({number: prevState.number -1})); //위의 코드와 같은 것
    };

    render() {

        const {number} = this.state;

        return (
            <div>
                <h1>{number}</h1>
                <h1>{this.state.number}</h1>
                <button onClick={this.handleIncrement}>증가</button>
                <button onClick={this.handleDecrement}>감소</button>
            </div>
        )
    }
}


export default Counter;