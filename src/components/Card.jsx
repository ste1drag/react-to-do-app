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
            <div>
                <h1>
                    {this.props.title}
                </h1>
                <textarea name={this.props.name} id={this.props.id} cols="20" rows="10">
                    {this.props.task}
                </textarea>
                <button onClick={this.onDelete}>Delete</button>
            </div>
        )
    }

}

export default Card;

