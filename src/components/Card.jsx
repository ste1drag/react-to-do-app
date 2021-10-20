import React from "react";
import { AiFillDelete } from 'react-icons/ai';

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
            <div style={{backgroundColor:'#C0BAFA', width:'550px',height:'auto', padding:'25px',borderRadius:'15px',marginBottom:'50px'}}>
                <div style={{backgroundColor:'#D6F0FA',height:'auto', padding:'25px',borderRadius:'15px',wordWrap: 'break-word'}}>
                <h1>
                    {this.props.title}
                </h1>
                <hr />

                {this.props.task}
                
                </div>
                <AiFillDelete style={{float:'right',height:'25px',width:'25px',color:'#8D1195'}} onClick={this.onDelete}/>
                
            </div>
        )
    }

}

export default Card;

