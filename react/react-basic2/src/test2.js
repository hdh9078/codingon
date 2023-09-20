import {Component} from "react"


class test2 extends Component{
    
    state = {
        visible: true,
    }

    handleVisible = () => {
        this.setState(() => ({visible: !this.state.visible}));   
    };


    render() {

        return (
            <div>
                <h1>{this.state.visible && "안녕하세요"}</h1>
                <button onClick={this.handleVisible}>{this.state.visible ? "사라져라" : "보여라"}</button>
                
            </div>
        )
    }
}


export default test2;