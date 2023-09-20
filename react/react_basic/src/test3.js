import {Component} from "react";

const color = {
    color:"red"
}
class test3 extends Component {
    render() {
    
    return <>
        <h2>좋아하는 음식은<span style={color}>{this.props.food}</span></h2>
    </>
        
    }
}

test3.defaultProps = {
    food: "피자"
}

export default test3;