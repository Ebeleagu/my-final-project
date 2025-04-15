import React from "react";
import Intro from "../Body/Intro";
import Wedo from "../Body/Wedo";
import Aboutus from "../Body/Aboutus";
import Ouroffer from "../Body/Ouroffer";
import Services from "../Body/Services";
import Testimonials from "../Body/Testimonials";
import Contactpage from "../Body/Contactpage";
// import Createacc from "../Body/Createacc";

const Body = () => {
  return (
    <div className="overflow-x-hidden">
      <Intro />
      <Wedo />
      <Aboutus />
      <Ouroffer />
      <Services />
      <Testimonials />
      <Contactpage />
    </div>
  );
};

export default Body;
