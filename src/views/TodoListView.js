import React, { PureComponent } from 'react';

import { Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper } from '@material-ui/core';
import {observer} from 'mobx-react';
import moment from 'moment';

@observer
class TodoListView extends PureComponent {
  render(){
  const {todos,selTodo} =this.props;

    /*const sample = [{id: 1, title:'title1', date:'date1'}, {id: 2, title:'title2', date:'date2'}]*/
    console.log(todos);
    return (
      <TableContainer component={Paper} >
        <Table m={3}>
          <TableHead>
            <TableRow>
              <TableCell align='center'>Title</TableCell>
              <TableCell align='center'>Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Array.isArray(todos) && todos.length ? todos.map( (todo ) => (
              <TableRow key={todo.id} hover onClick={()=>selTodo(todo)}>
                <TableCell  align='center'>{todo.title}</TableCell>
                <TableCell  align='center'>{moment(todo.date).format('YYYY-MM-DD')}</TableCell>
              </TableRow>
            ))
              :
                <TableRow  >
                  <TableCell  align='center'>할일 없음</TableCell>
                  <TableCell  align='center'> - </TableCell>
                </TableRow>
            }
            
          </TableBody>
        </Table>
      </TableContainer>
    )
  }
}

export default TodoListView;