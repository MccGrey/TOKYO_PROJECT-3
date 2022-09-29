import React from "react";
import "./featured.css";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import IMG1 from "../../assets/Closes.jpg";
import IMG2 from "../../assets/MccGrey.png";
import IMG3 from "../../assets/Multis.jpg";
import IMG4 from "../../assets/Nicks.jpg";
import IMG5 from "../../assets/Orangeyellows.jpg";
import IMG6 from "../../assets/Pencilss.jpg";
import IMG7 from "../../assets/Pinks.jpg";
import IMG8 from "../../assets/Popss.jpg";
import IMG9 from "../../assets/Reds.jpg";
import IMG10 from "../../assets/Skulls.jpg";
import IMG11 from "../../assets/Slicess.jpg";
import IMG12 from "../../assets/TravisScott.png";

const data = [
  {
    id: 1,
    images: IMG1,
    lastPosted: "5h ago ● Full Time",
    role: "Senior Software Engineer",
    firm: "Scoot",
    country: "United Kingdom",
    link: "/stacks",
  },

  {
    id: 2,
    images: IMG2,
    lastPosted: "20h ago ● Part Time",
    role: "Haskell and PurpleScript Dev.",
    firm: "Blogr",
    country: "United States",
    link: "/stacks/:id",
  },

  {
    id: 3,
    images: IMG3,
    lastPosted: "1d ago ● Part Time",
    role: "MidLevel Backend Engineer",
    firm: "Vector",
    country: "Russia",
    link: "/stacks1",
  },

  {
    id: 4,
    images: IMG4,
    lastPosted: "2d ago ● Full Time",
    role: "Senior Application Engineer",
    firm: "Office Lite",
    country: "Japan",
    link: "/stacks2",
  },

  {
    id: 5,
    images: IMG5,
    lastPosted: "2d ago ● Part Time",
    role: "Remote DevOps Engineer",
    firm: "Pod",
    country: "Thailand",
    link: "/stacks3",
  },

  {
    id: 6,
    images: IMG6,
    lastPosted: "4d ago ● Part Time",
    role: "Desktop Support Manager",
    firm: "Creative",
    country: "Germany",
    link: "/stacks4",
  },

  {
    id: 7,
    images: IMG7,
    lastPosted: "1w ago ● Full Time",
    role: "iOS Engineer",
    firm: "Pornodoro",
    country: "United States",
    link: "/stacks5",
  },

  {
    id: 8,
    images: IMG8,
    lastPosted: "1w ago ● Full Time",
    role: "Senior EJB Engineer",
    firm: "Maker",
    country: "United Kingdom",
    link: "/stacks6",
  },

  {
    id: 9,
    images: IMG9,
    lastPosted: "1w ago ● Part Time",
    role: "Seinor Frontend Developer",
    firm: "CoffeeRoasters",
    country: "Singapore",
    link: "/stacks7",
  },

  {
    id: 10,
    images: IMG10,
    lastPosted: "2w ago ● Freelance",
    role: "App & Website Designer",
    firm: "Master Craft",
    country: "United States",
    link: "/stacks8",
  },

  {
    id: 11,
    images: IMG11,
    lastPosted: "1mo ago ● Part Time",
    role: "Full Stack developer",
    firm: "CrowdFund",
    country: "New Zealand",
    link: "/stacks9",
  },

  {
    id: 12,
    images: IMG12,
    lastPosted: "1mo ago ● Part Time",
    role: "Technical Lead Engineer",
    firm: "Typemaster",
    country: "United Kingdom",
    link: "/stacks10",
  },
];

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItems">
        {data.map((record) => {
          return (
            <article className="featuredItem" key={record.id}>
              <div className="item-image">
                <img src={record.images} alt="" />
              </div>
              <h5>{record.lastPosted}</h5>
              <h3>{record.role}</h3>
              <h5>{record.firm}</h5>
              <br />
              <small>{record.country}</small> <br />
              <Link to={record.link} target={"_blank"} className="li">
                Learn More
                <BsArrowRight className="li-icon" />
              </Link>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Featured;
