import { Outlet } from "react-router-dom"
import Navbar from "../components/Navtap"
import Herosection from "../components/Herosection"

const MainLayout = () => {
  return (
    <div>
      <main className="px-[4px]">

        <Outlet />
      

      </main>
    
    </div>
  )
}

export default MainLayout