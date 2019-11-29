import React from 'react'
import { Icon, List, Typography } from 'antd'
import Footer from './TodoFooter'

const TodoList = ({Todos,FilterTodo,FilterStatus,filterTodos,toggleItem,deleteItem}) => {
	return (
		<List
			footer={
				Todos.length > 0 ?
					<Footer FilterStatus={ FilterStatus } filterTodos={ filterTodos } />
					: null
			}
			bordered
			dataSource={ FilterTodo }
			renderItem={ item => (
				<List.Item
					onClick={ () => {
						toggleItem(item.id)
					} }
					actions={ [
						<span onClick={ () => {
							deleteItem(item.id)
						} }>
							<Icon type="close" />
						</span>
					] }
				>
					<Typography.Text
						style={ { width: '500px' } }
						disabled={ item.completed }
						delete={ item.completed }
					>
						{ item.text }
					</Typography.Text>
				</List.Item>
			) }
		/>
	)
}
export default TodoList