import React from "react";
import Card from "./Card";

class Grid extends React.Component{
    render(){
        let gridCards=this.props.cards.map((card)=>{
            return <Card name={card.name} id={card.id} /> 
        });

        return(
            {gridCards}
        )
    }
}

export default Grid;

