import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h3 className='bg-green-400 text-black p-4 rounded-xl mb-4'>hello Tailwind</h3>
      <Card username="Vikram Singh" something="read" />
      <Card username="Ankit Singh" something="Don't read"/>
    </>
  )
}

export default App
