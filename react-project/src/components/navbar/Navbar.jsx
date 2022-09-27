import "./navbar.css";
import { BsSunFill } from "react-icons/bs";
import { HiMoon } from "react-icons/hi";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <div>
          <span className="logo">devjobs</span>
        </div>
        <div>
          <BsSunFill />
          <input type="text" />
          <HiMoon />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
