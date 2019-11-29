import React from 'react'
import { Card, Col, Row } from 'antd'
import { useHistory } from "react-router-dom"

function Home() {
	let history = useHistory()

	return (
		<div style={ { background: '#ECECEC', padding: '30px' } }>
			<Row gutter={ 16 }>
				<Col span={ 8 }>
					<Card
						title="item"
						bordered={ false }
						onClick={ () => {
							history.push("/about/item")
						} }
					>
						这是去item的页面
					</Card>
				</Col>
				<Col span={ 8 }>
					<Card
						title="Count with Mobx"
						bordered={ false }
						onClick={ () => {
							history.push("/about/mobx_count")
						} }
					>
						使用Mobx的一个计数器页面
					</Card>
				</Col>
				<Col span={ 8 }>
					<Card
						title="TodoList with Mobx"
						bordered={ false }
						onClick={ () => {
							history.push("/about/mobx_todo")
						} }
					>
						使用Mobx的一个TodoList页面
					</Card>
				</Col>
			</Row>
		</div>
	)
}

export default Home