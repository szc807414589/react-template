import {
    observable, action, toJS, configure,
} from 'mobx';

/*
* toJS  递归地将一个(observable)对象转换为 javascript 结构
*
* */
configure({ enforceActions: 'observed' });
let id = 0;

class TodoList {

	@observable todoList = []
	@observable filterStatus = 'SHOW_ALL'

	@action.bound
	addTodo (text) {
	    this.todoList = [
	        ...toJS(this.todoList),
	        {
	            id       : id++,
	            text,
	            completed: false,
	        },
	    ];
	}

	@action.bound
	deleteTodo (id) {
	    this.todoList = toJS(this.todoList).filter(v => id !== v.id);
	}

	@action.bound
	toggleTodo (id) {
	    this.todoList = toJS(this.todoList).map(v => (
	        v.id === id ?
	            { ...v, completed: !v.completed } :
	            v
	    ));
	}

	@action.bound
	filterTodo (status) {
	    this.filterStatus = status;
	}

}

const TodoListStore = new TodoList();
export default TodoListStore;
