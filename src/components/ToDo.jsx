import React from 'react';
import AddToDo from './AddToDo';
import Grid from './Grid';

class ToDo extends React.Component{

  constructor(props){
    super(props);
    this.state={
      titleText:'',
      taskText:'',
      counter:0,
      cards:[]
    }
    
  }
/*
  titleChange(val){
    this.setState({titleText:val});
  }

  taskChange(val){
    this.setState({taskText:val});
  }
*/

  addCard(){
    console.log('Bilo sta');
    this.setState({
      cards:[...this.state.cards,{name:'task'+this.state.counter,id:this.state.counter,title:this.state.titleText,task:this.state.taskText}],
      titleText:'',
      taskText:'',
      counter:this.state.counter+1
    });
  

  }
  
  render(){
    return (
      <div>
            <h1>REACT TO-DO APP</h1>
            <AddToDo 
            handleChangeTitle={(val)=>{
                this.setState({titleText:val});
            }} 
            handleChangeTask={(val)=>{
                this.setState({taskText:val});
            }} 
            onClickButtonChange={
                ()=>{
                    console.log('Bilo sta');
                    this.setState({
                        cards:[...this.state.cards,{name:'task'+this.state.counter,id:this.state.counter,title:this.state.titleText,task:this.state.taskText}],
                        titleText:'',
                        taskText:'',
                        counter:this.state.counter+1
                    });
                }
            } 
            />
            <Grid cards={this.state.cards} />
      </div>
    );
  }
}

export default ToDo;