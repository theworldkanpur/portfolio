const Process = () => {
  const steps = [
    {
      name: "Consultation & Requirements Gathering",
      desc: "Understand client needs and gather detailed project specifications.",
    },
    {
      name: "Proposal & Agreement",
      desc: "Present a comprehensive proposal and formalize terms in a written agreement.",
    },
    {
      name: "Execution & Production",
      desc: "Implement the service according to agreed-upon specifications and timelines.",
    },
    {
      name: "Review & Feedback",
      desc: "Seek regular feedback to ensure alignment with client expectations and make necessary adjustments.",
    },

    {
      name: "Delivery & Follow-up",
      desc: "Deliver the final product and provide ongoing support to ensure client satisfaction.",
    },
  ];

  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex flex-wrap w-full">
          <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">

            {steps.map((step,index)=>(
            <div key={index} className="flex relative pb-12">
            <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <div className="flex-grow pl-4">
              <h2 className="font-medium title-font text-sm text-white mb-1 tracking-wider">
                STEP {index+1}: {step.name}
              </h2>
              <p className="leading-relaxed">
                {step.desc}
              </p>
            </div>
          </div>
            ))}


            <div className="flex relative">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-sm text-white mb-1 tracking-wider">
                  FINISH
                </h2>
                <p className="leading-relaxed">
                  Pitchfork ugh tattooed scenester echo park gastropub whatever
                  cold-pressed retro.
                </p>
              </div>
            </div>
          </div>



          <img
            className="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12"
            src="https://dummyimage.com/1200x500"
            alt="step"
          />
        </div>
      </div>
    </section>
  );
};

export default Process;
