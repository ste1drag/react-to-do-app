import React from "react";
import { BsPlusLg } from 'react-icons/bs';

class AddToDo extends React.Component{

    constructor(props){
        super(props);
        this.onClickButton=this.onClickButton.bind(this);
        this.onChangeTitle=this.onChangeTitle.bind(this);
        this.onChangeTask=this.onChangeTask.bind(this);
    }

    onChangeTitle(e){
        this.props.handleChangeTitle(e.target.value);
    }
    onChangeTask(e){
        this.props.handleChangeTask(e.target.value);
    }

    onClickButton(){
        this.props.onClickButtonChange();
    }


    render(){
        return(
            <div style={{backgroundColor:'#C0BAFA', width:'14%', padding:'15px'}}>
                <h1 style={{fontSize:'35px',color:'#662CF4',font:'Arial'}}>Unesi naslov</h1>
                <input type="text" value={this.props.title} onChange={this.onChangeTitle} placeholder="Dodaj naslov" style={{width: '90%',maxWidth: '100%',backgroundColor:'#EAFAEC',padding: '10px 10px',fontSize:'25px'}} />
                <h1 style={{fontSize:'35px',color:'#662CF4',font:'Arial'}}>Dodaj task</h1>
                <textarea name="taskId" id="taskId" cols="18" rows="10"  onChange={this.onChangeTask} placeholder="Unesi task" style={{maxWidth: '100%',backgroundColor:'#EAFAEC',borderRadius:'8%',fontSize:'30px'}}></textarea>
                <br />
                <div style={{textAlign:'center',marginTop:'30px'}}>
                <button onClick={this.onClickButton} style={{borderRadius:'50%', height:'75px',width:'75px',backgroundColor:'#D6F0FA',border:'5px solid #8D1195',alignItems:'center'}}><BsPlusLg style={{height:'45px',width:'45px',color:'#8D1195'}} /></button>
                </div>
            </div>
        )
    }

    
}

export default AddToDo;