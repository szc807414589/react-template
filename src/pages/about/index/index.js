import React from 'react'
import { Card, Col, Row } from 'antd';
import { useHistory } from "react-router-dom";

function Home() {
	let history = useHistory();

	function handleClick() {
		history.push("/about/item");
	}
	return(
		<div style={{ background: '#ECECEC', padding: '30px' }}>
			<Row gutter={16}>
				<Col span={8}>
					<Card
						title="item"
						bordered={false}
						onClick={handleClick}
					>
						这是去item的页面
					</Card>
				</Col>
				<Col span={8}>
					<Card title="Card title" bordered={false}>
						Card content
					</Card>
				</Col>
				<Col span={8}>
					<Card title="Card title" bordered={false}>
						Card content
					</Card>
				</Col>
			</Row>
		</div>
	)
}

export default Home