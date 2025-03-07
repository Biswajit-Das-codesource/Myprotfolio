import React from 'react'
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import ProjectsSection from './components/Projects'

function App() {
  return (
    <>
    <div className='max-h-screen w-full bg-zinc-900 flex items-center  flex-col'>
      <Navbar/>
      <Intro/>
      <ProjectsSection/>
      </div>
    </>
  )
}

export default App
