import React from 'react'
import rio from '../assets/pic8.avif'

const Aboutus = () => {
  return (
    <section className="h-[80vh] mt-16">
      <div className="flex justify-center gap-20">
        <div>
          <img src={rio} className="h-[75vh] w-[35vw]" />
        </div>
        <div>
          <h1 className="text-3xl font-[times-new-roman] text-center font-bold">
            {" "}
            ABOUT US
          </h1>
          <div>
            <p className="w-[30vw] leading-10  font-[times-new-roman] text-justify mt-10 text-xl">
              At <span className='font-bold'>Event Haven</span>, we bridge the gap between event
              enthusiasts, Professional planners, and trusted vendors.Our
              platform empowers clients to discover and attend events, helps
              planners showcase their skills and manage projects efficiently,
              and connects vendors to new business opportunities. From seamless
              ticketing to end-to-end event creation, we're here to make every
              occasion extraordinary.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Aboutus
