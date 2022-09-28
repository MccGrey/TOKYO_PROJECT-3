import React from "react";
import "./featured.css";
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

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItems">
        <article className="featuredItem">
          <div className="item-image">
            <img src={IMG1} alt="" />
          </div>
          <h5>5h ago ● Full Time</h5>
          <h3>Senior Software Engineer</h3>
          <h5>Scoot</h5>
          <br />
          <small>United Kingdom</small>
        </article>

        <article className="featuredItem">
          <div className="item-image">
            <img src={IMG2} alt="" />
          </div>
          <h5>20h ago ● Part Time</h5>
          <h3>Haskell and PurpleScript Dev.</h3>
          <h5>Blogr</h5>
          <br />
          <small>United States</small>
        </article>

        <article className="featuredItem">
          <div className="item-image">
            <img src={IMG3} alt="" />
          </div>
          <h5>1d ago ● Part Time</h5>
          <h3>MidLevel Backend Engineer</h3>
          <h5>Vector</h5>
          <br />
          <small>Russia</small>
        </article>

        <article className="featuredItem">
          <div className="item-image">
            <img src={IMG4} alt="" />
          </div>
          <h5>2d ago ● Full Time</h5>
          <h3>Senior Application Engineer</h3>
          <h5>Office Lite</h5>
          <br />
          <small>Japan</small>
        </article>

        <article className="featuredItem">
          <div className="item-image">
            <img src={IMG5} alt="" />
          </div>
          <h5>2d ago ● Part Time</h5>
          <h3>Remote DevOps Engineer</h3>
          <h5>Pod</h5>
          <br />
          <small>Thailand</small>
        </article>

        <article className="featuredItem">
          <div className="item-image">
            <img src={IMG6} alt="" />
          </div>
          <h5>4d ago ● Part Time</h5>
          <h3>Desktop Support Manager</h3>
          <h5>Creative</h5>
          <br />
          <small>Germany</small>
        </article>

        <article className="featuredItem">
          <div className="item-image">
            <img src={IMG7} alt="" />
          </div>
          <h5>1w ago ● Full Time</h5>
          <h3>iOS Engineer</h3>
          <h5>Pornodoro</h5>
          <br />
          <small>United States</small>
        </article>

        <article className="featuredItem">
          <div className="item-image">
            <img src={IMG8} alt="" />
          </div>
          <h5>1w ago ● Full Time</h5>
          <h3>Senior EJB Engineer</h3>
          <h5>Maker</h5>
          <br />
          <small>United Kingdom</small>
        </article>

        <article className="featuredItem">
          <div className="item-image">
            <img src={IMG9} alt="" />
          </div>
          <h5>1w ago ● Part Time</h5>
          <h3>Seinor Frontend Developer</h3>
          <h5>CoffeeRoasters</h5>
          <br />
          <small>Singapore</small>
        </article>

        <article className="featuredItem">
          <div className="item-image">
            <img src={IMG10} alt="" />
          </div>
          <h5>2w ago ● Freelance</h5>
          <h3>App & Website Designer</h3>
          <h5>Master Craft</h5>
          <br />
          <small>United States</small>
        </article>

        <article className="featuredItem">
          <div className="item-image">
            <img src={IMG11} alt="" />
          </div>
          <h5>1mo ago ● Part Time</h5>
          <h3>Full Stack developer</h3>
          <h5>CrowdFund</h5>
          <br />
          <small>New Zealan</small>
        </article>

        <article className="featuredItem">
          <div className="item-image">
            <img src={IMG12} alt="" />
          </div>
          <h5>1mo ago ● Part Time</h5>
          <h3>Technical Lead Engineer</h3>
          <h5>Typemaster</h5>
          <br />
          <small>United Kingdom</small>
        </article>
      </div>
    </div>
  );
};

export default Featured;
