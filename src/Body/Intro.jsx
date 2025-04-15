import React from "react";
import Picture from "../assets/Rooftop.jpeg";

const Intro = () => {
  return (
    <section
      style={{ backgroundImage: `url('${Picture}')` }}
      className={`h-screen w-full bg-fixed bg-center bg-cover bg-no-repeat`}
    >
      <div className="h-full flex justify-center items-center">
        <div className="flex justify-center items-center flex-col">
          <h1 className="text-white text-5xl font-[times-new-roman] flex font-bold">
            Your Gateway To Professional Event Planning
          </h1>
          <div className=" m-5">
            <p className="text-white font-[times-new-roman] w-[35vw] text-2xl">
              Our platform bridges the gap between clients and Professional
              planners, providing a seamless,efficient, and tailored approach to
              creating extraordinary events.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
