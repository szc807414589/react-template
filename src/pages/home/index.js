import React from 'react'
import {GetApi} from "../../server/axios"


class Home extends React.Component {
	componentDidMount() {
		GetApi('/novel/top')
	}

	render() {
		return(
			<div>home</div>
		)
	}
}

export default Home