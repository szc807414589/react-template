import React from 'react'
import { withRouter } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from "react-transition-group"
import './TransAnimateLayout.less'

const ACTION_MAP = {
	PUSH: 'forward',
	POP: 'back'
}
export default withRouter(
	({ location, children, history ,match}) => {
		const { action } = history
		console.log(match)
		return (
			<TransitionGroup
				className={'router-wrapper'}
				childFactory={child => React.cloneElement(
					child,
					{classNames: ACTION_MAP[action]}
				)}
				// enter={true}
				// appear={true}
				// exit={true}
			>
				<CSSTransition
					key={ location.pathname }
					appear={true}
					// in={location.pathname}
					onEnter={()=>{
						console.log('onEnter')
					}}
					onEntering={()=>{
						console.log('onEntering')
					}}
					onEntered={()=>{
						console.log('onEntered')
					}}
					onExit={()=>{
						console.log('onExit')
					}}
					onExiting={()=>{
						console.log('onExiting')
					}}
					onExited={()=>{
						console.log('onExited')
					}}
					// mountOnEnter={true}
					// unmountOnExit={true}
					timeout={ 500 }>
					{ children }
				</CSSTransition>
			</TransitionGroup>
		)
	}
)
