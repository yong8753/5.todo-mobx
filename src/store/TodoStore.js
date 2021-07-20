import {observable, action, computed, makeObservable,toJS} from 'mobx';

class TodoStore{

    constructor(){
        makeObservable(this);
    }

    @observable
    _todo={date : new Date()
    }//id,title,date

    @observable
    _todos=[];

    @observable
    _searchText='';

    get todo(){
        return this._todo;
    }
    @computed
    get todos(){
      //  return this._todos?this._todos.slice():[];
        return toJS(this._todos);
    }
    get searchText(){
        return this._searchText;
    }
    @action
    onSetTodo(name,value){
        this._todo={
            ...this._todo,
            [name] : value,
        }
    }
    @action
    addTodos(todo){
        this._todos.push(todo);
        this._todo={date : new Date()};
    }
    @action
    selTodo(todo){
        this._todo=todo;
    }
    @action
    updateTodo(todo){
        let foundTodo =this._todos.find((todo) => todo.id === this._todo.id)
        foundTodo.title= this._todo.title;
        foundTodo.date=this._todo.date;
        this._todo={date : new Date()}
    }
    @action
    deleteTodo(todo){
        let index =this._todos.findIndex((todo) => todo.id === this._todo.id)
        if(index>-1){
            this._todos.splice(index,1);
        }
        this._todo={date : new Date()};
    }
    @action
    setSearchText(searchText){
        this._searchText = searchText;
        console.log(searchText)
    }
}

export default new TodoStore();