import "./header.css";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsSquare } from "react-icons/bs";

const Header = () => {
  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerSearch">
          <div className="headerSearchItem">
            <AiOutlineSearch className="headerIcon" />
            <input
              type="text"
              placeholder="Filter by title, companies, expertise..."
              className="headerSearchInput"
            />
          </div>

          <div className="headerSearchItem">
            <FaMapMarkerAlt className="headerIcon" />
            <input
              type="text"
              placeholder="Filter by location..."
              className="headerSearchInput"
            />
          </div>

          <div className="headerSearchItem">
            <BsSquare className="headerIcon" />
            <input
              type="text"
              placeholder="Full time only"
              className="headerSearchInput"
            />
            <button>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
