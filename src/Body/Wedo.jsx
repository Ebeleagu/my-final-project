import React from "react";
import pic from "../assets/pic5.avif";

const Wedo = () => {
  return (
    <section className="h-[80vh] mt-14 ">
      <div className="flex justify-center gap-20">
        <div className="">
          <div className="">
            <h1 className="text-3xl font-[times-new-roman] text-center font-bold">
              WHAT WE DO
            </h1>
          </div>
          <div>
            <p className="w-[30vw]  font-[times-new-roman] text-justify mt-10 leading-10 text-xl">
              We simplify event planning and management. We connect clients with
              experienced event planners, trusted vendors, and unique venues to
              bring every celebration, conference, or gathering to life. From
              finding the perfect team to organizing every detail, we provide
              the tools and resources to make every event seamless, stress-free,
              and unforgettable.
            </p>
          </div>
        </div>

        <div className="">
          <img src={pic} className="h-[75vh] w-[35vw]" />
        </div>
      </div>
    </section>
  );
};

export default Wedo;
