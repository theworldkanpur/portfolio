import { Link } from "react-router-dom";

const Header = () => {
  return (
<header className="text-white body-font bg-gray-900">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link to='/' className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span className="ml-3 text-xl">TheWorldKanpur</span>
    </Link>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:text-blue-500 cursor-pointer">Our Services</a>
      <Link to='/about' className="mr-5 hover:text-blue-500 cursor-pointer">About Us</Link>
      <Link to='/contact' className="mr-5 hover:text-blue-500 cursor-pointer">Contact Us</Link>
    </nav>
  </div>
</header>
  );
};

export default Header;
