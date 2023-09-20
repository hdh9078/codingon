import {Component} from "react"

const style1 = {
    color: "red"
}
const style2 = {
    color: "blue"
}
class test1 extends Component{
    
    state = {
        number: <h1>검정색글씨</h1>,
        number2: <h1 style={style1}>빨간색글씨</h1>,
        number3: <h1 style={style2}>파란색글씨</h1>
    }

    handleRed = () => {
        this.setState({number: this.state.number2});
        console.log("qw", this);
    };


    handleBlue = () => {
        this.setState( (prevState) => {
            return {number: prevState.number3}
        });
    };

    render() {

        const {number} = this.state;

        return (
            <div>
                <h1>{number}</h1>
                <h1>{this.state.number}</h1>
                <button onClick={this.handleRed}>빨</button>
                <button onClick={this.handleBlue}>파</button>
            </div>
        )
    }
}


export default test1;