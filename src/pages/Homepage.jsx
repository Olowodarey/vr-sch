import Herosection from "../components/Herosection";

import Advart from "../components/Advart";
import Classroom from "../components/Classroom";
import Sliderp from "../components/Slider";
import Tour from "../components/Tour";
import Future from "../components/Future";
import Subscribe from "../components/Subscribe";

const Hompage = () => {
  return (
    <div className=' className="max-w-7xl  mx-auto '>
      <Herosection />
      <Advart />
      <Classroom />
      <Sliderp />
      <Tour />
      <Future />
      <Subscribe />
    </div>
  );
};

export default Hompage;
