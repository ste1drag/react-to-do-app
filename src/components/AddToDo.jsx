import React from "react";

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
        this.handleChangeTask(e.target.vale);
    }

    onClickButton(){
        this.props.onClickButtonChange();
    }

    render(){
        return(
            <div>
                <h1>Unesi naslov</h1>
                <input type="text" value={this.state.titleText} onChange={this.onChangeTitle} placeholder="Dodaj naslov" />
                <h1>Dodaj task</h1>
                <textarea name="taskId" id="taskId" cols="30" rows="10" onChange={this.onChangeTask} placeholder="Unesi task"></textarea>
                <button onClick={this.onClickButton}>+</button>
            </div>
        )
    }

    
}

export default AddToDo;