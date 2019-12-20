import React from 'react'
import { Button, Tag } from "antd-mobile"
import { observer, inject } from "mobx-react"

@inject('NovelStore')
@observer
class Home extends React.Component {

	handleClick = () => {
		const { NovelStore: { getList } } = this.props
		getList()
	}

	render() {
		const { NovelStore: { novelList } } = this.props
		console.log(this.props.NovelStore)
		return (
			<div>
				hello mobx async
				<Button onClick={ this.handleClick }>点击请求数据</Button>
				<div>
					{ novelList.map(v => (

						<Tag key={v.title}>{ v.title } <br /></Tag>
					)) }
				</div>
			</div>
		)
	}
}

export default Home
