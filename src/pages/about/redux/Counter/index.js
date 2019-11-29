import React from 'react'
import { connect } from 'react-redux'
import { addNum, substractNum } from "../../../../redux/Containers/Counter/actions"
import { Button, Card } from "antd"
const mapStateToProps = (state) => ({
	Count: state.Count
})
@connect(
	mapStateToProps,
	{ addNum, substractNum }
)
class Counter extends React.Component {
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
			<Card title="redux版计数器">
				<div>
					<p>You click {value} times</p>
					<Button onClick={this.add}>click me +1</Button>
					<Button onClick={this.substract}>click me -1</Button>
				</div>
			</Card>
		)
	}
}


export default Counter