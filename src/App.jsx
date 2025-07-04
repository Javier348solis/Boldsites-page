import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PaginaPrincipal from './pages/PaginaPrincipal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PaginaPrincipal/>
    </>
  )
}

export default App
