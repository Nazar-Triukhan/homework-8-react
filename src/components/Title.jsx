import { Component } from "react";

class Text extends Component {


    render() {
        const {text} = this.props
        return <h1>{text}</h1>
    }
}

export default Text