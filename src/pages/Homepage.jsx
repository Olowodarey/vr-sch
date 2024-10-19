import Herosection from "../components/Herosection";
import Navtap from "../components/Navtap";
import Advart from "../components/Advart"
import Classroom from "../components/Classroom"
import Sliderp from "../components/Slider";
import Tour from "../components/Tour";
import Future from "../components/Future";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";



const Hompage = () => {
  return (
    <div className=' className="max-w-7xl  mx-auto pt-0 '>
      
    <Navtap />
    <Herosection />
    <Advart />
    <Classroom />
    <Sliderp />
    <Tour />
    <Future />
    <Subscribe />
    <Footer />
      
      </div>
  )
}

export default Hompage;