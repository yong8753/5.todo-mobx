import 'date-fns';
import React, { PureComponent } from 'react';
import { TextField, Grid, Button} from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import UpdateIcon from '@material-ui/icons/Update';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import {observer} from "mobx-react";

@observer
class TodoEditFormView extends PureComponent {
  render(){

      const {todo,onSetTodo,addTodos,updateTodo,deleteTodo} = this.props;


    return(
      <form noValidate>
        {/*<Grid container display='flex' xs={12} spacing={3}>*/}
            <Grid container display='flex' >

          <Grid item xs={3}>
            <TextField 
              margin="normal"
              id="outlined-basic" 
              label="Title" 
              variant="standard"
            value = {todo && todo.title? todo.title:''}
            onChange={(e)=>onSetTodo('title',e.target.value)}/>
          </Grid>
          <Grid item xs={3}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                margin="normal"
                id="date-picker-dialog"
                label="Date"
                format="yyyy-MM-dd"
                value={todo && todo.date?todo.date:null}
                // onChange={handleDateChange}
                onChange={(e)=>onSetTodo('date',e.valueOf())}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </MuiPickersUtilsProvider>
          </Grid>
        </Grid>
        <Grid item >
         <Button variant='contained' color='primary' startIcon={<SaveIcon />} onClick={addTodos}>Add</Button>&nbsp;&nbsp;
         <Button variant='contained' color='default' startIcon={<UpdateIcon />} onClick={updateTodo}>Update</Button>&nbsp;&nbsp;
         <Button variant='contained' color='secondary' startIcon={<DeleteIcon />} onClick={deleteTodo}>Delete</Button>&nbsp;&nbsp;
          
        </Grid>
      </form>
    )
  }
}

export default TodoEditFormView;