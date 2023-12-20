import React from "react";
import Child from "./Child";

class MyComponent extends React.Component{
    state = {
        firstName: '',
        lastName: '',
        arrInfo: [
            {id: 't1', title: 'a'},
            {id: 't2', title: 'b'},
            {id: 't3', title: 'c'},
        ]
    }

    handleChangeFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }

    handleChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        alert(`${this.state.firstName} ${this.state.lastName}`);
    }

    render(){
        return(
            <>
                <form>
                    <label htmlFor="fname">First name:</label><br />
                    <input type="text" value={this.state.firstName} onChange={(event) => this.handleChangeFirstName(event)} /><br />
                    <label htmlFor="lname">Last name:</label><br />
                    <input type="text" value={this.state.lastName} onChange={(event) => this.handleChangeLastName(event)}/><br /><br />
                    <input type="submit" onClick={(event)=>this.handleSubmit(event)}/>
                </form> 

                <Child 
                name={this.state.firstName}
                arrInfo = {this.state.arrInfo}
                />
            </>
        )
    }
}
export default MyComponent;