import React, {useState, useEffect} from 'react'
import {Button} from 'antd'
// import {observer, inject} from "mobx-react"


// @inject('CountStore')
// @observer
class Home extends React.Component {
	// addNum = () => {
	// 	const {CountStore: {addNum}} = this.props
	// 	addNum && addNum(1)
	// }
	// subNum = () => {
	// 	const {CountStore: {subNum}} = this.props
	// 	subNum && subNum(1)
	// }

	render() {
		// const {CountStore:{value}} = this.props
		// console.log(this.props.CountStore.value)
		// return (
		// 	<div>
		// 		<p>You click {value} times</p>
		// 		<Button onClick={this.addNum}>Click me +1</Button>
		// 		<Button onClick={this.subNum}>Click me -1</Button>
		// 	</div>
		// )
		return(
			<div>home</div>
		)
	}
}

export default Home