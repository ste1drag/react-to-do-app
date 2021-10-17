import React from "react";

class Card extends React.Component{
    constructor(props){
        super(props);
        this.onDelete=this.onDelete.bind(this);
    }

    onDelete(){
        this.props.onDeleteChange();
    }

    render(){
        return(
            <div style={{backgroundColor:'#C0BAFA', width:'20%', padding:'25px',borderRadius:'15px'}}>
                <div style={{backgroundColor:'#D6F0FA', padding:'25px',borderRadius:'15px'}}>
                <h1>
                    {this.props.title}
                </h1>
                <hr />
                    {this.props.task}
                
                </div>
            </div>
        )
    }

}

export default Card;

