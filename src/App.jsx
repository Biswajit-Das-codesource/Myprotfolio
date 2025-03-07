import React from 'react'
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import ProjectsSection from './components/Projects'
import UpcomingProjects from './components/UpcomingProjects'

function App() {
  return (
    <>
      <Navbar />
      <div className="bg-zinc-900 min-h-screen">
        <div className="h-full">
          <Intro />
          {/* <ProjectsSection />
          <UpcomingProjects /> */}
        </div>
      </div>
    </>
  )
}

export default App
