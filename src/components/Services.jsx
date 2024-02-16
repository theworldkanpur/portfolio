import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      name: "Identity Design Solutions",
      desc: "Crafting distinctive and memorable visual identities to leave a lasting impression",
    },
    {
      name: "Graphic Branding Consultancy",
      desc: "Elevating brands through innovative design strategies and impactful visual communication",
    },
    {
      name: "Apparel Customization Studio",
      desc: "Transforming garments into personalized works of art, tailored to reflect individual style",
    },
    {
      name: "Promotional Display Solutions",
      desc: "Creating eye-catching banners that captivate audiences and drive engagement.",
    },
    {
      name: "Website Development",
      desc: "Designing persuasive posters that effectively convey messages and inspire action",
    },
    {
      name: "App Development",
      desc: "Providing top-quality printing solutions for all your business needs, from stationery to marketing collateral.",
    },
  ];

  return (
    <section className="text-gray-600 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {services.map((service, index) => (
            <div key={index} className="p-4 lg:w-1/3">
              <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-20 rounded-lg overflow-hidden text-center relative">
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                  {service.name}
                </h1>
                <p className="leading-relaxed mb-3">
                 {service.desc}
                </p>
                <Link to='/services/123' className="text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
