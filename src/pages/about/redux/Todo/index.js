import React from 'react'
import { connect } from 'react-redux'
import { addNum, substractNum } from "../../../../redux/Counter/actions"
import { Button, Card,Input } from "antd"
const mapStateToProps = (state) => ({
	Count: state.Count
})
@connect(
	mapStateToProps,
	{ addNum, substractNum }
)
class Todo extends React.Component {
	add = () => {
		const { addNum } = this.props
		addNum && addNum(1)
	}
	substract = () => {
		const { substractNum } = this.props
		substractNum && substractNum(1)
	}
	render() {
		const { Count: { value } } = this.props
		return (
			<Card title="redux版ToDoList">
				<div>
					<Input size="large" placeholder="请输入待办事项"/>
				</div>
			</Card>
		)
	}
}


export default Todo