
import { Outlet } from 'react-router'
import './App.css'
import Navbar from './components/navbar'
import Footer from './pages/Footer'

function App() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App
