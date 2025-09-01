
import { Outlet } from 'react-router'
import './App.css'
import Navbar from './components/navbar'
import Footer from './pages/Footer'
import { Toaster } from 'sonner'

function App() {
  return (
    <>
     <Toaster richColors/>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App
