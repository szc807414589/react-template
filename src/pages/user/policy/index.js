import React from 'react'
import {Button} from 'antd-mobile'
import history from "../../../history"

class Login extends React.Component {
	render() {
		return (
			<div style={{width:'100%',height:'100%'}}>
				<Button>policy</Button>
				<Button onClick={ () => {
					history.go(-1)
				} }>
					back last page
				</Button>
			</div>
		)
	}
}
export default Login
