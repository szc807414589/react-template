import React from 'react';
import AppRouter from './router'
import {Provider as MobxProvider} from 'mobx-react'
import Store from './mobx/index'
function App() {
  return (
    <div className="App">
      <MobxProvider {...Store}>
        <AppRouter/>
      </MobxProvider>
    </div>
  );
}

export default App;
