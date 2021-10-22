import React from 'react';
import AddToDo from './AddToDo';
import Card from './Card';

class ToDo extends React.Component{

  constructor(props){
    super(props);
    this.state={
      titleText:'',
      taskText:'',
      counter:0,
      cards:[]
    }
    this.addCard=this.addCard.bind(this);
    this.deleteCard=this.deleteCard.bind(this);
    
  }


  addCard(){
    this.setState(prevState=>{
      return {
      cards:[...prevState.cards,{id:prevState.counter,title:prevState.titleText,taskText:prevState.taskText}],
      titleText:'',
      taskText:'',
      counter:prevState.counter+1
      }
    });
  }

  deleteCard(id){
    this.setState(prevState=>{
      return{
        cards:prevState.cards.filter(card=>card.id!==id)
      }
    })
  }
  
  render(){
    let rows=[];
    this.state.cards.map((card=>{
      rows.push(<Card id={card.id} key={card.id} title={card.title} task={card.taskText} onDeleteChange={()=>this.deleteCard(card.id)}/>)
    }));
    return (
      <div>

      <h1>REACT TO-DO APP</h1>
      <div style={{display:'inline-flex'}}>
            
            <div style={{position:'relative'}}>
            <AddToDo 
            handleChangeTitle={(val)=>{
                this.setState({titleText:val});
            }} 
            handleChangeTask={(val)=>{
                this.setState({taskText:val});
            }} 
            onClickButtonChange={
                ()=>this.addCard()
            }
            />
            </div>
            <div style={{marginLeft:'350px'}}>
              <div style={{marginTop:'20px'}}>
                {rows}
              </div>
            </div>
            
        </div>

      </div>
      
    );
  }
}

export default ToDo;