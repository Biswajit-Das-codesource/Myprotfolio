import React from 'react'
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import ProjectsSection from './components/Projects'
import UpcomingProjects from './components/UpcomingProjects'

function App() {
  return (
    <>
    <div className='min-h-screen w-full bg-zinc-900 flex items-center  flex-col'>
      <Navbar/>
      <Intro/>
      <ProjectsSection/>
      <UpcomingProjects/>
      </div>
    </>
  )
}

export default App
