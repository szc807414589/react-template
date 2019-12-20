import React, { useState } from 'react'
import { TabBar } from "antd-mobile"
import { useHistory, useLocation } from "react-router-dom"
import home from '../assets/imgs/btn_home_selected.png'
import home_unselected from '../assets/imgs/btn_home_unselected.png'
import user from '../assets/imgs/btn_mine_selected.png'
import user_unselected from '../assets/imgs/btn_mine_unselected.png'

function TabBarComponent({ children }) {
	let location = useLocation()
	let history = useHistory()
	let pathName = location.pathname
	const [current, setCurrent] = useState(pathName)
	//处理浏览器返回的时候
	if (current !== pathName) {
		setCurrent(pathName)
	}
	// const tabs = routesConfig.filter(v => v.isLayout).map(v=>!v.redirect)
	const tabs = [
		{
			path: '/home',
			name: 'home',
		},
		{
			path: '/home/user',
			name: 'user'
		}
	]
	return (
		<div
			style={ {
				position: 'fixed',
				height: '100%',
				width: '100%',
				top: 0
			} }>
			<TabBar
				unselectedTintColor="#949494"
				tintColor="#FE6C55"
				barTintColor="white"
				tabBarPosition="bottom">
				{
					tabs.map(v => {
						return (
							<TabBar.Item
								title={ v.name === 'home' ? '首页' : '我的' }
								key={ v.name }
								icon={
									<img
										style={ { width: '22px', height: '22px' } }
										src={ v.name === 'home' ? home_unselected : user_unselected }
										alt="home"
									/>
								}
								selectedIcon={
									<img
										style={ { width: '22px', height: '22px' } }
										src={ v.name === 'home' ? home : user }
										alt="home"
									/>
								}
								selected={ current === v.path }
								onPress={ () => {
									history.push(v.path)
								} }
							>
								{ pathName === v.path ? children : null }
							</TabBar.Item>
						)
					})
				}
			</TabBar>
		</div>
	)
}

const HomePageLayout = (props) => {
	const { children, ...rest } = props
	return (
			<div { ...rest } className={ 'homePageLayout' }>
				<TabBarComponent children={ children } />
			</div>
	)
}

export default HomePageLayout
