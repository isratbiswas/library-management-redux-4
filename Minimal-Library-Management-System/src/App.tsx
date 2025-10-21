
import { Outlet } from 'react-router'
import './App.css'
import Navbar from './components/navbar'
import Footer from './pages/Footer'
import { Toaster } from 'sonner'

function App() {
  return (
    <>
     <Toaster richColors/>
      <div className="sticky top-4 z-50">
        <Navbar/>
      </div>
     <div className="min-h-dvh">
      <Outlet/>
     </div>
    <Footer/>
    </>
  )
}

export default App
