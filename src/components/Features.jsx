
const Features = () => {
  const features = [
    'Customization Options','Interactive Consultation Platform','Transparent Project Management Tools','Quality Assurance Mechanisms',
    'Integrated Feedback System','Post-Service Support & Resources'
  ]
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="text-center mb-20">
        <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-white mb-4">Raw Denim Heirloom Man Braid</h1>
        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug.</p>
      </div>
      <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
      {features.map((feature,index)=>(
        <div key={index} className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-800 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-indigo-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium text-white">{feature}</span>
        </div>
      </div>
      ))}



      </div>
      {/* <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button> */}
    </div>
  </section>
  )
}

export default Features