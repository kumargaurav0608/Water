import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
// import {Logo} from "../assets/logo.png";
// import '../global.css';



function Navbar() {
  const [displayNav, setDisplayNav] = useState(false);
  const [showSubmenu, setShowSubmenu] = useState(false);
  const navRef = useRef(null); // Ref for navbar

  const [isOpen, setIsOpen] = useState(false);
  const subMenuRef=useRef(null);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };
  
  useEffect(()=>{
    function handleClickoutsidesubmenu(e){
      if(subMenuRef.current && !subMenuRef.current.contains(e.target)){
        setIsOpen(false);
      }
    }

    if(isOpen){
      document.addEventListener("mousedown",handleClickoutsidesubmenu)
    }
    else{
      document.removeEventListener("mousedown",handleClickoutsidesubmenu);
    }

    return()=>{
      document.removeEventListener("mousedown",handleClickoutsidesubmenu);

    }
  },[isOpen])


  // Close mobile nav when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setDisplayNav(false);
        setShowSubmenu(false); // Optional: close submenu too
      }
    }

    if (displayNav) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [displayNav, setShowSubmenu]);

  return (
    <nav className="bg-pink-500 text-white shadow-md " ref={navRef}>
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* <div className="text-2xl font-bold tracking-wide"> WaterValley WaterPark</div> */}
        <Link to="/" className="flex flex-col items-center ">
          <img
            src="/logo.png"
            alt="WaterValley Logo"
            className="w-[100px] h-[50px] object-contain"
          />
          <span className="text-sm italic text-center ">
            (A unit of Ananda Resorts)
          </span>
        </Link>


        {/* Desktop Nav */}
        <div className="max-md:hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <Link  className="hover:text-yellow-300 transition duration-300 w-full" to="/">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-yellow-300 transition duration-300 w-[100px]">About</Link>
            </li>
            <li className="relative group hover:text-yellow-300 transition duration-300 w-full cursor-pointer" onClick={toggleMenu} onMouseEnter={()=>setIsOpen(true)} > Parks & Attractions 
              {/* <Link
                to="/attractions"
                className="hover:text-yellow-300 transition duration-300 w-full"
              > 
                Parks & Attractions
               </Link> */}
{isOpen && (
              // <ul className="absolute hidden group-hover:flex flex-col bg-white text-black mt-2 shadow-lg rounded-lg w-72 p-3 space-y-2 z-50">
                <ul className="absolute flex flex-col bg-white text-black mt-2 shadow-lg rounded-lg w-72 p-3 space-y-2 z-50" ref={subMenuRef}>

                <li>
                  <Link to="/kidsride" className="  block w-full px-4 py-2 rounded-md hover:bg-gray-100 transition duration-200 font-medium">
                    🎠 Kids Ride
                  </Link>
                </li>
                <li>
                    <Link to="/familyride" className="  block w-full px-4 py-2 rounded-md hover:bg-gray-100 transition duration-200 font-medium">

                    🎢 Family Ride
                  </Link>
                </li>
                <li>
                    <Link to="/showsandattractions" className="  block w-full px-4 py-2 rounded-md hover:bg-gray-100 transition duration-200 font-medium">
                    🎭 Shows & Attractions
                  </Link>
                </li>
              </ul>
)}
            </li>
            <li>
              <Link to="/offers" className="hover:text-yellow-300 transition duration-300 w-full">Offers</Link>
            </li>
            <li>
              <Link to="/Gallery" className="hover:text-yellow-300 transition duration-300 w-full">Gallery</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-yellow-300 transition duration-300 w-full">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden ">
          <button
            onClick={() => setDisplayNav(!displayNav)}
            className="text-4xl cursor-pointer"
          >
            &#8801;
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {displayNav && (
        <div className="md:hidden bg-pink-400 px-4 pb-4 absolute w-[100%]">
          <ul className="flex flex-col space-y-2">
            <li>
              <Link to="/"  className="  hover:text-gray-950"  onClick={() => setDisplayNav(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="  hover:text-gray-950" onClick={() => setDisplayNav(false)}>
                About Us
              </Link>
            </li>
            <li>
              <button
                onClick={() => setShowSubmenu(!showSubmenu)}
                className="w-full text-left  hover:text-gray-950 cursor-pointer"
              >
                Attractions {showSubmenu ? "▲" : "▼"}
              </button>
              {showSubmenu && (
                <ul className="ml-4 mt-1 space-y-1">
                  <li>
                    <Link className="  hover:text-gray-950" 
                      to="/kidsride"
                      onClick={() => setDisplayNav(false)}
                    >
                      Kids Ride
                    </Link>
                  </li>
                  <li>
                    <Link className="  hover:text-gray-950" 
                      to="/familyride"
                      onClick={() => setDisplayNav(false)}
                    >
                      Family Ride
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/showsandattractions" className="  hover:text-gray-950" 
                      onClick={() => setDisplayNav(false)}
                    >
                      Shows and Attractions
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link to="/tickets"  className="  hover:text-gray-950" onClick={() => setDisplayNav(false)}>
                Tickets
              </Link>
            </li>
            <li>
              <Link to="/contact" className="  hover:text-gray-950"   onClick={() => setDisplayNav(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
