import React, { Component } from 'react';

class InputStuff extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: ""
        }
    }

    editHandler(e){
        const val = e.target.value;
        this.setState({text:val})
    }

    render() {
        return (
            <div>
                <h1>{this.state.text}</h1>
                <input type = "text" value={this.state.text} onChange={this.editHandler.bind(this)}/>
            </div>
        );
    }
}

export default InputStuff;