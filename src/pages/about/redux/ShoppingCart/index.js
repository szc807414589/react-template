import React from 'react'
import { connect } from 'react-redux'
import { Card, List, Tag, Typography, Icon, Button } from 'antd'
import Api from '../../../../api'
import { getProducts } from "../../../../redux/ShoppingCart/actions"

const mapStateToProps = (state) => ({
	Products: state.Products,
})

@connect(mapStateToProps, { getProducts })
class ShoppingCart extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			list: []
		}
	}

	componentDidMount() {
		// Api.getProducts(res => {
		// 	this.setState({ list: res })
		// })
		this.props.getProducts()
		// Api.buyProducts(data=>{
		// 	console.log(data)
		// })
	}

	render() {
		console.log(this.props)
		const { list } = this.state
		return (
			<Card title={ '购物车' } style={ { width: '600px', margin: '50px auto' } }>
				<List
					header={ '商品列表' }
					footer={
						<Card
							title={
								<List
									bordered
									dataSource={ list }
									renderItem={ f => (
										<div>
											{ f.title }
											<Tag color={ 'green' }>{ 'xxx' }元</Tag>
											<Tag color={ 'cyan' }>已选{ 'xxx' }</Tag>
										</div>
									) }
								/>
							}
							extra={
								<Tag color={ '#f50' }>共计:{ 'xxx元' }</Tag>
							}
						>
							<Button block>结算</Button>
						</Card>

					}
					bordered
					dataSource={ list }
					renderItem={ item => (
						<List.Item
							actions={ [
								<Button>
									<Icon type="minus" />
								</Button>,
								<Button>
									<Icon type="plus" />
								</Button>
							] }
						>
							<div style={ { width: '500px' } }>
								<Typography.Title style={ { margin: 0 } } level={ 2 }>{ item.title }</Typography.Title>
								<Tag color={ 'red' }>{ item.price }元</Tag>
								<Tag color={ 'volcano' }>剩余{ item.inventory }</Tag>
							</div>
						</List.Item>
					) }

				/>
			</Card>
		)
	}

}

export default ShoppingCart