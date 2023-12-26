import React from "react";

class Child extends React.Component {

    state = {
        showJobs: false
    }

    handleShowHide = (status) => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }

    render() {
        let { name, arrInfo } = this.props
        let { showJobs } = this.state
        return (
            <>
                <div>
                    Child: {name}
                </div>
                {showJobs === false ?
                    <div>
                        <button onClick={() => this.handleShowHide()}>Show</button>
                    </div>
                    :
                    <>
                        <div>
                            {
                                arrInfo.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.id} - {item.title}
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <button onClick={() => this.handleShowHide()}>Hide</button>
                        </div>
                    </>
                }
            </>
        )
    }
}
export default Child;