import React from 'react'
import { Card, Input, List, Icon, Message, Typography, Tag } from 'antd'
import { observer, inject } from "mobx-react"

@inject('TodoListStore')
@observer
class Todo extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			value: ''
		}
	}

	add = (text) => {
		if (!text) {
			Message.error('请输入')
			return
		}
		const { TodoListStore: { addTodo } } = this.props
		addTodo && addTodo(text)
		this.setState({ value: '' })
	}
	delete = id => {
		const { TodoListStore: { deleteTodo } } = this.props
		deleteTodo && deleteTodo(id)
	}

	toggle = id => {
		const { TodoListStore: { toggleTodo } } = this.props
		toggleTodo && toggleTodo(id)
	}
	filter = status => {
		const { TodoListStore: { filterTodo } } = this.props
		filterTodo && filterTodo(status)
	}
	handleFilter = (list, status) => {
		switch (status) {
			case 'SHOW_ALL':
				return list
			case 'SHOW_ACTIVE':
				return list.filter(v => v.completed === true)
			case 'SHOW_COMPLETED':
				return list.filter(v => v.completed === false)
			default:
				return list
		}
	}

	render() {
		const { TodoListStore: { todoList, filterStatus } } = this.props
		const { value } = this.state
		const filterList = this.handleFilter(todoList, filterStatus)
		return (
			<Card
				title={ 'Mobx 版 TodoList' }
				style={ {
					width: '600px',
					margin: '50px auto'
				} }
			>
				<Card
					title={
						<Input.Search
							placeholder="请输入代办事项"
							enterButton="Add"
							size="large"
							value={ value }
							onChange={ e => this.setState({ value: e.target.value }) }
							onSearch={ value => this.add(value) }
						/>
					}
				>
					<List
						dataSource={ filterList }
						bordered
						footer={
							<div>filter:
								<Tag
									color={ filterStatus === 'SHOW_ALL' ? 'magenta' : null }
									onClick={ () => {
										this.filter('SHOW_ALL')
									} }
								>
									Show All
								</Tag>
								<Tag
									color={ filterStatus === 'SHOW_ACTIVE' ? 'magenta' : null }
									onClick={ () => {
										this.filter('SHOW_ACTIVE')
									} }
								>
									Show active
								</Tag>
								<Tag
									color={ filterStatus === 'SHOW_COMPLETED' ? 'magenta' : null }
									onClick={ () => {
										this.filter('SHOW_COMPLETED')
									} }
								>
									Show completed
								</Tag>
							</div>
						}
						renderItem={ item => (
							<List.Item
								onClick={ () => {
									this.toggle(item.id)
								} }
								actions={ [
									<span
										onClick={ () => {
											this.delete(item.id)
										} }
									>
										<Icon type="close" />
									</span>] }
							>
								<div style={ { width: '500px' } }>
									<Typography.Text
										disabled={ item.completed }
										delete={ item.completed }
									>
										{ item.text }
									</Typography.Text>
								</div>
							</List.Item>
						) }
					/>
				</Card>
			</Card>
		)
	}
}


export default Todo