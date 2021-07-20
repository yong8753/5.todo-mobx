import React, { Component } from 'react';
import TodoListView from '../views/TodoListView';
import {inject,observer} from 'mobx-react';
import autobind from "autobind-decorator";


@inject('todoStore')
@autobind
@observer
class TodoListContainer extends Component {
  selTodo(todo){
    this.props.todoStore.selTodo(todo);
  }
  render(){
    let {todos,searchText}=this.props.todoStore;

    todos = todos.filter((todo) =>todo.title.toLowerCase().indexOf(searchText.toLowerCase())!==-1);
    return (

      <TodoListView todos={todos}
                    selTodo={this.selTodo}/>
    )
  }
}

export default TodoListContainer;