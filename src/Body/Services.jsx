import React from 'react'

const Services = () => {
  return (
    <section className="h-[70vh] mt-16">
      <h1 className="text-3xl font-[times-new-roman] text-center my-10 font-bold">
        OUR SERVICES
      </h1>
      <div className="flex justify-center gap-10">
        <div className=" shadow-lg shadow-[gray] h-[45vh] w-[25vw] rounded-md flex items-center justify-center flex-col">
          <h1 className="text-2xl font-[times-new-roman] font-bold  text-center mt-5">
            CLIENTS/USERS
          </h1>
          <div>
            <p className="font-[times-new-roman] mt-3 text-center p-3 font-bold">
              "Plan, Explore and Attend Events seamlessly"
            </p>
            <p className="font-[times-new-roman] text-center p-3 leading-7">
              Discover a world of events tailored to your interests-whether it's
              concerts, weddings, ortech conferences. book tickets, stay
              updated, and even create your own events with just a few clicks.
              Your next unforgettable experience starts here!
            </p>
          </div>
        </div>
        <div className=" shadow-lg shadow-[gray] h-[45vh] w-[25vw] rounded-md flex items-center justify-center flex-col">
          <h2 className="text-2xl font-[times-new-roman] font-bold  text-center">
            EVENT PLANNERS
          </h2>
          <div>
            <p className="font-[times-new-roman] mt-3 text-center p-3 font-bold">
              "Simplify Event Planning, Maximize Reach"
            </p>
            <p className="font-[times-new-roman] text-center p-3 leading-7">
              Showcase your expertise and connect with clients who need your
              skills. Use our tools to manage projects, coordinate with vendors,
              and streamline every detail of your event planningprocess.Grow
              your business while we help you find new Opportunities!
            </p>
          </div>
        </div>
        <div className=" shadow-lg shadow-[gray] h-[45vh] w-[25vw] rounded-md flex items-center justify-center flex-col">
          <h3 className="text-2xl font-[times-new-roman] font-bold  flex items-center justify-center w-[16vw]">
            VENDORS
          </h3>
          <div>
            <p className="font-[times-new-roman] mt-3 text-center p-3 font-bold">
              "Showcase Your Services, Grow your Network"
            </p>
            <p className="font-[times-new-roman] text-center p-3 leading-7">
              Reach the right audience by listing your services for catering,
              decorations, venues, and more. Collaborate with event planners and
              clients to turn their visions into reality, and expand your
              business with ease through our platform.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services
