import { Outlet } from "react-router-dom"
import Navtap from "../components/Navtap"
import Footer from "../components/Footer"

const MainLayout = () => {
  return (
    <div>
      <main className="overflow-x-hidden">
        <Navtap />
        <Outlet />
        <Footer />
      

      </main>
    
    </div>
  )
}

export default MainLayout