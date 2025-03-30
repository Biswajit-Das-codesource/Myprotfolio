import React from 'react'
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import ProjectsSection from './components/Projects'
import UpcomingProjects from './components/UpcomingProjects'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router'

function App() {
  const theme = useSelector((store)=>store.app.theme)
  return (
    <>
      <Navbar />
      <Outlet/>
    </>
  )
}

export default App
