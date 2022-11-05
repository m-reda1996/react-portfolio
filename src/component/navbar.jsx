import { SiDesignernews, SiUpwork } from "react-icons/si";
import { FaBars, FaTimes } from "react-icons/fa";
import { BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";
import { useState } from "react";
import { Link } from "react-scroll";

export function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full z-10 h-[80px] flex justify-between items-center px-4 bg-[#292C36] text-gray-300">
      <div>
        
          <Link  to="home" smooth={true} duration={500}>
        <p className=" font-bold text-3xl cursor-pointer" >MR</p>

          </Link>
       
      </div>
      <div className=" hidden md:flex">
        <ul className="hidden md:flex text-xl">
          <li>
            <Link to="home" smooth={true} duration={500}>
              home
            </Link>
          </li>
          <li>
            {" "}
            <Link to="about" smooth={true} duration={500}>
              about
            </Link>
          </li>
          <li>
            {" "}
            <Link to="skill" smooth={true} duration={500}>
              skill
            </Link>
          </li>
          <li>
            {" "}
            <Link to="work" smooth={true} duration={500}>
              work
            </Link>
          </li>
          <li>
            {" "}
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
      {/* hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {nav ? <FaTimes size={35} /> : <FaBars size={35} />}
      </div>
      {/* mobile  */}

      <ul
        className={
          !nav
            ? " hidden"
            : " absolute top-0 left-0 w-full h-screen bg-[#292C36] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-3xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            home
          </Link>
        </li>
        <li className="py-6 text-3xl">
          {" "}
          <Link onClick={handleClick}  to="about" smooth={true} duration={500}>
            about
          </Link>
        </li>
        <li className="py-6 text-3xl">
          {" "}
          <Link onClick={handleClick}  to="skill" smooth={true} duration={500}>
            skill
          </Link>
        </li>
        <li className="py-6 text-3xl">
          <Link onClick={handleClick}  to="work" smooth={true} duration={500}>
            work
          </Link>
        </li>
        <li className="py-6 text-3xl">
          <Link onClick={handleClick}  to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      {/* social icon  */}
      <div className="hidden lg:flex fixed flex-col top-[45%] left-0 ">
        <ul>
          <li className="w-[155px]  ml-[-100px] hover:ml-0 duration-300 bg-[#0a66c2] p-3 ">
            <a
              href="https://www.linkedin.com/in/m-reda1996/"
              className=" flex justify-between items-center w-full text-white text-2xl"
            >
              linkedin <BsLinkedin size={30} />
            </a>
          </li>
          <li className="w-[155px]  ml-[-100px] hover:ml-0 duration-300 bg-[#252830] p-3 ">
            <a
              href="https://github.com/m-reda1996"
              className=" flex justify-between items-center w-full text-white text-2xl"
            >
              github <BsGithub size={30} />
            </a>
          </li>
          <li className="w-[155px]  ml-[-100px] hover:ml-0 duration-300 bg-[#4188fa] p-3 ">
            <a
              href="#"
              className=" flex justify-between items-center w-full text-white text-2xl"
            >
              Twitter <BsTwitter size={30} />
            </a>
          </li>
          <li className="w-[155px] ml-[-100px] hover:ml-0 duration-300 bg-[#14a800] p-3 ">
            <a
              href="#"
              className=" flex justify-between items-center w-full text-white text-2xl"
            >
              Upwork <SiUpwork size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
