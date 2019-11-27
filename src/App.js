import React from 'react'
import AppRouter from './router'
import {Provider as ReduxProvider} from 'react-redux'
import configStore from './redux/store'
const reduxStore = configStore()


function App() {
	return (
		<div className="App">
			<ReduxProvider store={ reduxStore }>
				<AppRouter />
			</ReduxProvider>
		</div>
	)
}

export default App
