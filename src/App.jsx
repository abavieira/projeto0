import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css' 
import FirstComponent from './components/FirstComponent'
import SecondComponent from './components/SecondComponent'
import ThirdComponent from './components/ThirdComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ThirdComponent/>
    </>
  )
}

export default App
