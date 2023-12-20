import React from "react";

class Child extends React.Component{

    
    render(){
        let {name, arrInfo}= this.props
        return(
            <>
                <div>
                    Child: {name}
                </div>
                <div>
                    {
                        arrInfo.map((item,index)=>{
                            return(
                                <div key={item.id}>
                                    {item.id} - {item.title}
                                </div>
                            )
                        })
                    }
                </div>
            </>
        )
    }
}
export default Child;