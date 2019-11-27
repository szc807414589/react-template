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
							history.push('/about/item')
						} }
					>
						这是去item的页面
					</Card>
				</Col>
				<Col span={ 8 }>
					<Card
						title="redux counter demo"
						bordered={ false }
						onClick={ () => {
							history.push('/about/redux_counter')
						} }
					>
						click into redux counter demo
					</Card>
				</Col>
				<Col span={ 8 }>
					<Card
						title="redux ToDoList demo"
						bordered={ false }
						onClick={ () => {
							history.push('/about/redux_todo')
						} }
					>
						click into redux ToDoList demo
					</Card>
				</Col>
			</Row>
		</div>
	)
}

export default Home