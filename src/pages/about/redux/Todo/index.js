import React from 'react'
import { connect } from 'react-redux'
import { addTodo, deleteTodo, ToggleTodo, FilterTodo } from "../../../../redux/Todos/actions"
import { message, Card, Input  } from "antd"
import TodoList from './TodoList'


const mapStateToProps = (state) => ({
	Todos: state.Todos,
	FilterStatus: state.FilterStatus
})

@connect(
	mapStateToProps,
	{ addTodo, deleteTodo, ToggleTodo, FilterTodo }
)
class Todo extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			value: ''
		}
	}

	add = (text) => {
		const { addTodo } = this.props
		if (!text) {
			message.warning('请输入')
			return
		}
		addTodo && addTodo(text)
		this.setState({ value: '' })
	}
	deleteItem = (id) => {
		const { deleteTodo } = this.props
		deleteTodo && deleteTodo(id)
	}
	toggleItem = (id) => {
		const { ToggleTodo } = this.props
		ToggleTodo && ToggleTodo(id)
	}
	filterTodos = (status) => {
		const { FilterTodo } = this.props
		FilterTodo && FilterTodo(status)
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
		const { Todos, FilterStatus } = this.props
		const { value } = this.state
		const FilterTodo = this.getFilterTodoList(Todos, FilterStatus)
		return (
			<Card title="redux版ToDoList" style={ { width: '600px', margin: '50px auto' } }>
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
					Todos={Todos}
					FilterTodo={FilterTodo}
					FilterStatus={FilterStatus}
					filterTodos={this.filterTodos}
					toggleItem={this.toggleItem}
					deleteItem={this.deleteItem}
				/>
			</Card>
		)
	}
}


export default Todo