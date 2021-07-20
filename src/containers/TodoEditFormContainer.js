import React, { Component } from 'react';
import TodoEditFormView from '../views/TodoEdotFormView';
import {inject,observer} from "mobx-react";
import autobind from "autobind-decorator";
import generateId from "../IDGenerator";


@inject('todoStore')
@autobind
@observer
class TodoEditFormContainer extends Component {
    onSetTodo(name,value){
      this.props.todoStore.onSetTodo(name,value);
    }
    addTodos(){
        let {todo} =this.props.todoStore;
        todo={...todo,id:generateId(6)}
        this.props.todoStore.addTodos(todo);
    }
    updateTodo(){
        this.props.todoStore.updateTodo();
    }
    deleteTodo(){
        this.props.todoStore.deleteTodo();
    }
  render(){
    const {todoStore}=this.props;
    return(
      <TodoEditFormView todo={todoStore.todo} todoStore={todoStore} onSetTodo={this.onSetTodo} addTodos={this.addTodos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
    )
  }
}

export default TodoEditFormContainer;