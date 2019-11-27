import React from 'react'
import { connect } from 'react-redux'
import { addNum, substractNum } from "../../../../redux/Counter/actions"
import { Button } from "antd"

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
		const {Count:{value}} = this.props
		return (
			<div>
				<p>You click {value} times</p>
				<Button onClick={this.add}>click me +1</Button>
				<Button onClick={this.substract}>click me -1</Button>
			</div>

		)
	}
}

const mapStateToProps = (state) => ({
	Count: state.Count
})
export default connect(
	mapStateToProps,
	{ addNum, substractNum }
)(Counter)