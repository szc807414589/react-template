import React, {useState} from 'react'
import {Menu, Icon} from "antd"
import {Link, useLocation} from "react-router-dom"

function AppHeader() {
	let location = useLocation()
	let pushName = location.pathname
	const [current, setCurrent] = useState(pushName)
	//处理浏览器返回的时候
	if (current !== pushName) {
		setCurrent(pushName)
	}
	return (
		<div>
			<Menu
				onClick={(e) => {
					setCurrent(e.key)
				}}
				selectedKeys={[current]}
				mode="horizontal"
			>
				<Menu.Item key="/">
					<Link to={'/'}>
						<Icon type="home" />
						home
					</Link>
				</Menu.Item>
				<Menu.Item key="/about">
					<Link to={'/about'}>
						<Icon type="shop" />
						about
					</Link>
				</Menu.Item>
				<Menu.Item key="/user">
					<Link to={'/user'}>
						<Icon type="user" />
						user
					</Link>
				</Menu.Item>
			</Menu>

		</div>
	)
}

function BasicLayout(props) {
	const {children, ...rest} = props
	return (
		<div {...rest}>
			<AppHeader />
			{children}
		</div>
	)
}

export default BasicLayout