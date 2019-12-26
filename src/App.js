import React from 'react'
// import AppRouter from './router'
import AppRouter1 from './router/index_1'
// import AppRouter2 from './router/index_2'
import { Provider as MobxProvider } from 'mobx-react'
import Store from './mobx/index'

function App() {
	return (
		<MobxProvider { ...Store }>
			<AppRouter1 />
		</MobxProvider>
	)
}

export default App
