import React from 'react'
import MainComponent from './components/main.component'
import { SnackbarProvider } from 'notistack'

function App() {

  return (
    <div className='App'>
      <SnackbarProvider maxSnack={3} />
      <MainComponent />
    </div>
  )
}

export default App
