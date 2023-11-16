import React from "react";

class MyComponent extends React.Component{
    state = {
        name: 'Thiên',
        age: 23
    }

    handleOnChangeInputName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    render(){
        return(
            <>
                <div className="one">
                    <input value={this.state.name} type="text"
                        onChange={(event)=>this.handleOnChangeInputName(event)}
                    />
                    <br></br>
                    My name is {this.state.name}
                </div>
                <div className="two">
                    My age is {this.state.age}
                </div>
            </>
        )
    }
}
export default MyComponent;