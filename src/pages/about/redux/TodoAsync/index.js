import React from 'react'
import { connect } from 'react-redux'
import {
	addTodo_async,
	deleteTodo_async,
	ToggleTodo_async,
	FilterTodo_async
} from "../../../../redux/Containers/TodosAsync/actions"
import { message, Card, Input } from "antd"
import TodoList from './TodoList'


const mapStateToProps = (state) => ({
	Todos_Async: state.Todos_Async,
	FilterStatus_Async: state.FilterStatus_Async
})

@connect(
	mapStateToProps,
	{ addTodo_async, deleteTodo_async, ToggleTodo_async, FilterTodo_async }
)
class Todo extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			value: ''
		}
	}

	add = (text) => {
		const { addTodo_async } = this.props
		if (!text) {
			message.warning('请输入')
			return
		}
		addTodo_async && addTodo_async(text)
		this.setState({ value: '' })
	}
	deleteItem = (id) => {
		const { deleteTodo_async } = this.props
		deleteTodo_async && deleteTodo_async(id)
	}
	toggleItem = (id) => {
		const { ToggleTodo_async } = this.props
		ToggleTodo_async && ToggleTodo_async(id)
	}
	filterTodos = (status) => {
		const { FilterTodo_async } = this.props
		FilterTodo_async && FilterTodo_async(status)
	}
	getFilterTodoList = (Todos, Status) => {
		switch (Status) {
			case 'SHOW_ALL':
				return Todos
			case 'SHOW_COMPLETED':
				return Todos.filter(v => v.completed === true)
			case 'SHOW_ACTIVE':
				return Todos.filter(v => v.completed === false)
			default:
				return Todos
		}
	}

	render() {
		const { Todos_Async, FilterStatus_Async } = this.props
		const { value } = this.state
		const FilterTodo = this.getFilterTodoList(Todos_Async, FilterStatus_Async)
		return (
			<Card
				title="redux版ToDoList_Async"
				style={ { width: '600px', margin: '50px auto' } }
			>
				<div>
					<Input.Search
						size="large"
						enterButton="Add"
						placeholder="请输入待办事项"
						value={ value }
						onSearch={ value => this.add(value) }
						onChange={ e => {
							this.setState({ value: e.target.value })
						} }
					/>
				</div>
				<TodoList
					Todos={ Todos_Async }
					FilterTodo={ FilterTodo }
					FilterStatus={ FilterStatus_Async }
					filterTodos={ this.filterTodos }
					toggleItem={ this.toggleItem }
					deleteItem={ this.deleteItem }
				/>
			</Card>
		)
	}
}


export default Todo