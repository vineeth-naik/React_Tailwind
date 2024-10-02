import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LandingPage from './TailwindBlocks/Pages/LandingPage'

function App() {
     
    const [ theme , settheme ] = useState('light');

    useEffect( () => {
      if(theme === 'dark')
      {
        document.documentElement.classList.add("dark");
      }
      else{
        document.documentElement.classList.remove("dark");
      }
    } , [theme])

    const handleThemechamge = () => {
      settheme( theme === "light" ? "dark" : "light")
    }

  return (
    <div>
           <LandingPage change={ handleThemechamge } />
    </div>
  )
}

export default App
