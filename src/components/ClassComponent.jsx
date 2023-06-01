import React, { Component} from "react";

class ClassComponent extends Component {
    constructor(){
        super()
        this.state = {
            contador:0,
        }
    }
    render() {
        return <div>Class Component
            <p>
            <button>-</button>
            {this.state.contador}
            <button>+</button>
            </p>
        
        </div>
    }
}

export default ClassComponent