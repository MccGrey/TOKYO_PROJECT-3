import "./navbar.css";
import { BsSunFill } from "react-icons/bs";
import { HiMoon } from "react-icons/hi";
import { BsToggleOn } from "react-icons/bs";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <div>
          <span className="logo">devjobs</span>
        </div>
        <div className="toggle-icons">
          <BsSunFill />
          <BsToggleOn className="toggle-icon-toggler" />
          <HiMoon />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
