import React from 'react'
import {Tag} from 'antd'

function Footer({FilterStatus,filterTodos}) {
	return(
		<div>
			<Tag
				onClick={ () => {
					filterTodos('SHOW_ALL')
				} }
				color={ FilterStatus === 'SHOW_ALL' ? 'red' : null }
			>
				showAll
			</Tag>
			<Tag
				onClick={ () => {
					filterTodos('SHOW_COMPLETED')
				} }
				color={ FilterStatus === 'SHOW_COMPLETED' ? 'red' : null }
			>
				showCompleted
			</Tag>
			<Tag
				onClick={ () => {
					filterTodos('SHOW_ACTIVE')
				} }
				color={ FilterStatus === 'SHOW_ACTIVE' ? 'red' : null }
			>
				showActive
			</Tag>
		</div>
	)
}

export default Footer