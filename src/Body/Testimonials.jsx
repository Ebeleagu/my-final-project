import React from "react";
import { RiStarFill } from "react-icons/ri";
import pic10 from "../assets/pic10.avif";
import pic11 from "../assets/pic11.avif";
import pic12 from "../assets/pic12.avif";
import pic13 from "../assets/pic13.avif";


const Testimonials = () => {
  return (
    <section className="h-[80vh] p-5">
      <h1 className="text-3xl font-[times-new-roman] text-center font-bold">
        TESTIMONIALS
      </h1>
      <div className="flex gap-3 mt-10">
        <div className=" shadow-lg shadow-[gray] h-[47vh] w-[23vw] rounded-md flex items-center justify-center flex-col gap-3">
          <p className="font-[times-new-roman] text-center pb-8 text-balance">
            "Planning my wedding felt overwhelming untill i discovered this
            platform. from finding the perfect planner to coordinating vendors,
            everything was seamless. Highly recommend!"
          </p>
          <div className="flex text-yellow-500 justify-center items-center">
            <i>
              <RiStarFill />
            </i>
            <i>
              <RiStarFill />{" "}
            </i>
            <i>
              <RiStarFill />{" "}
            </i>
            <i>
              <RiStarFill />{" "}
            </i>
            <i>
              <RiStarFill />{" "}
            </i>
          </div>
          <span className="flex justify-center items-center gap-5 w-[25vw]">
            <img src={pic10} className="rounded-full w-[3vw] h-[3vw]" />
          </span>
          <p className="font-[times-new-roman] text-center font-bold">
            Ebeleagu David Ben
          </p>
        </div>

        <div className="shadow-lg shadow-[gray] h-[47vh] w-[23vw] rounded-md flex items-center justify-center flex-col gap-3">
          <p className="font-[times-new-roman] text-center p-5">
            "This website has transformed the way i connect with clients. It
            streamlined my workflow, and help me grow my business tenfold. A
            must-have for any event planner!"
          </p>
          <div className="flex text-yellow-500 justify-center items-center">
            <i>
              <RiStarFill />
            </i>
            <i>
              <RiStarFill />{" "}
            </i>
            <i>
              <RiStarFill />{" "}
            </i>
            <i>
              <RiStarFill />{" "}
            </i>
            <i>
              <RiStarFill />{" "}
            </i>
          </div>
          <span className="flex justify-center items-center gap-5 w-[25vw]">
            <img src={pic11} className="rounded-full h-[3vw] w-[3vw]" />
          </span>
          <p className="font-[times-new-roman] text-center font-bold">
            Gorgie Michael
          </p>
        </div>

        <div className="shadow-lg shadow-[gray] h-[47vh] w-[23vw] rounded-md flex items-center justify-center flex-col gap-3">
          <p className="font-[times-new-roman] text-center p-5">
            "Being part of this platform has been a game changer for my catering
            business. I have gained exposure to so many events i wouldnt have
            reached otherwise."
          </p>
          <div className="flex text-yellow-500 justify-center items-center">
            <i>
              <RiStarFill />
            </i>
            <i>
              <RiStarFill />{" "}
            </i>
            <i>
              <RiStarFill />{" "}
            </i>
            <i>
              <RiStarFill />{" "}
            </i>
            <i>
              <RiStarFill />{" "}
            </i>
          </div>
          <span className="flex justify-center items-center gap-5 w-[25vw]">
            <img src={pic12} className="rounded-full h-[3vw] w-[3vw]" />
          </span>
          <p className="font-[times-new-roman] text-center font-bold">
            Chiedozie Sopulu Favor
          </p>
        </div>

        <div className=" shadow-lg shadow-[gray] h-[47vh] w-[23vw] rounded-md flex items-center justify-center flex-col gap-3">
          <p className="font-[times-new-roman] text-center pb-8 p-5">
            "Our annual tech conference was a huge success, thanks to the
            resources on this site. From the venue to the decorations,
            everything exceeded our expectations. "
          </p>
          <div className="flex text-yellow-500 justify-center items-center">
            <i>
              <RiStarFill />
            </i>
            <i>
              <RiStarFill />{" "}
            </i>
            <i>
              <RiStarFill />{" "}
            </i>
            <i>
              <RiStarFill />{" "}
            </i>
            <i>
              <RiStarFill />{" "}
            </i>
          </div>
          <span className="flex justify-center items-center">
            <img src={pic13} className="rounded-full h-[3vw] w-[3vw]" />
          </span>
          <p className="font-[times-new-roman] text-center font-bold">
            Victoria Obed
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
