import React from "react";
import Card from "./Card";

class Grid extends React.Component{
    render(){
        
        let rows=[];
        this.props.cards.forEach(card => {
            rows.push(<Card name={card.name} id={card.id} title={card.title} task={card.task} />)
        });

        return (
                <div style={{marginTop:'20px'}}>
                    {rows}
                </div>
                    
                
        );

    }
}

export default Grid;

