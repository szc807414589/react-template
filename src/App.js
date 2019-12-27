import React from 'react';
import { Provider as MobxProvider } from 'mobx-react';
import AppRouter from './router';
import Store from './mobx/index';

function App () {
    return (
        <MobxProvider { ...Store }>
            <AppRouter />
        </MobxProvider>
    );
}

export default App;
