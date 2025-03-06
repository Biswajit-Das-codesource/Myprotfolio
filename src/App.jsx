import React from 'react'
import Navbar from './components/Navbar'
import Intro from './components/Intro'

function App() {
  return (
    <>
    <div className='min-h-screen w-full bg-zinc-900 flex items-center  flex-col'>
      <Navbar/>
      <Intro/>
      </div>
    </>
  )
}

export default App
