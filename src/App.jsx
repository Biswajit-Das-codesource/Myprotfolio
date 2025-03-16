import React from 'react'
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import ProjectsSection from './components/Projects'
import UpcomingProjects from './components/UpcomingProjects'

function App() {
  return (
    <>
      <Navbar />
      <div className="bg-zinc-950 min-h-screen">
        <div className="h-full flex  flex-col items-center">
          <Intro />
          <ProjectsSection />
          <UpcomingProjects />
        </div>
      </div>
    </>
  )
}

export default App
