import React from 'react'

const Whatweoffer = () => {
  return (
    <section className="h-[100vh] mt-10 p-5">
      <h1 className="text-3xl font-[times-new-roman] text-center my-5 font-bold">
        WHAT WE OFFER
      </h1>

      <div className="flex justify-center gap-8">
        <div className=" shadow-lg shadow-[gray] h-[35vh] w-[20vw] rounded-md flex items-center justify-center flex-col">
          <h1 className="text-2xl font-[times-new-roman] font-bold  text-center">
            Comprehensive Event Solutions
          </h1>
          <div>
            <p className="font-[times-new-roman] mt-5 text-center p-3">
              Whether you're planning a personal celebration or a large-scale
              corporate event, we provide tools and resources to make every step
              effortless{" "}
            </p>
          </div>
        </div>

        <div className=" shadow-lg shadow-[gray] h-[35vh] w-[20vw] rounded-md flex items-center justify-center flex-col">
          <h1 className="text-2xl font-[times-new-roman] font-bold  text-center">
            Custom Event Planning
          </h1>
          <div>
            <p className="font-[times-new-roman] mt-5 text-center p-3">
              Tailor your event experience with customizable planning features,
              including budgeting scheduling, and guest management.
            </p>
          </div>
        </div>

        <div className=" shadow-lg shadow-[gray] h-[35vh] w-[20vw] rounded-md flex items-center justify-center flex-col">
          <h3 className="text-2xl font-[times-new-roman] font-bold  text-center w-[16vw]">
            Professional Planner Network
          </h3>
          <div>
            <p className="font-[times-new-roman] mt-5 text-center p-3">
              Connect with skilled event planners who canbring your ideas to
              life with expertise and creativity.
            </p>
          </div>
        </div>
      </div>

      <div className="flex mt-10 justify-center gap-8">
        <div className=" shadow-lg shadow-[gray] h-[35vh] w-[20vw] rounded-md flex items-center justify-center flex-col">
          <h1 className="text-2xl font-[times-new-roman] font-bold  text-center">
            Trusted Vendor Access
          </h1>
          <div>
            <p className="font-[times-new-roman] mt-5 text-center p-3">
              Find reliable vendors for catering, photography, venue rental,
              entertainment, and more, ensuring every detail is a perfect.
            </p>
          </div>
        </div>
        <div className=" shadow-lg shadow-[gray] h-[35vh] w-[20vw] rounded-md flex items-center justify-center flex-col">
          <h1 className="text-2xl font-[times-new-roman] font-bold  text-center">
            Collaboration Made
          </h1>
          <div>
            <p className="font-[times-new-roman] mt-5 text-center p-3">
              Communicate effortlessly with planners, vendors and attendees
              through built-in messaging and management tools
            </p>
          </div>
        </div>
        <div className=" shadow-lg shadow-[gray] h-[35vh] w-[20vw] rounded-md flex items-center justify-center flex-col">
          <h1 className="text-2xl font-[times-new-roman] font-bold  text-center">
            User-Friendly tools
          </h1>
          <div>
            <p className="font-[times-new-roman] mt-5 text-center p-3">
              Utilize intuitive features such as RSVP tracking, ticketing
              systems, and real-time updates to keep your event on track.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Whatweoffer
