import React from "react";
import Navbar from "../../components/navbar/Navbar";
import IMG5 from "../../assets/Orangeyellows.jpg";
import { BsSunFill } from "react-icons/bs";
import { HiMoon } from "react-icons/hi";
import { BsToggleOn } from "react-icons/bs";
import useLocalStorage from "use-local-storage";

const List5 = () => {
  const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  return (
    <div data-theme={theme}>
      <Navbar />
      <div className="modalBackground">
        <div className="modalContainer">
          <div className="modalTitle">
            <div className="modalTitle-image">
              <img src={IMG5} alt="Pod-logo" />
            </div>
            <div className="modalTile-name">
              <div className="titleName">
                <h4>
                  Pod <br /> <span>pod.com</span>
                </h4>
              </div>
              <div className="titleInfo">
                <button>company site</button>
              </div>
            </div>
          </div>
          <div className="modalBody">
            <div className="modalBody-infos">
              <div className="modalBody-info">
                <h3>2d ago ● Part Time</h3>
                <h1>Remote DevOps Engineer</h1>
                <small>Thailand</small>
              </div>
              <div className="modalApply">
                <button>Apply Now</button>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet. Qui modi esse et Quis minima sed iusto
              At amet omnis qui inventore minima ea velit amet. Sit accusamus
              nihil est quia magnam ab aperiam enim est nobis dolores in aliquid
              recusandae hic facere blanditiis eum dolorem optio. Et quibusdam
              suscipit ab eveniet reiciendis voluptatem nulla non maiores autem
              aut nulla quas sed enim similique ut sapiente nisi. Vel nihil
              earum nam soluta harum ut earum quia non ducimus praesentium et
              dignissimos ipsum. Aut reprehenderit quos est quas voluptas est
              perferendis possimus est iusto omnis nam tenetur sint est autem
              repudiandae eos eveniet magnam. Eum omnis placeat aut voluptas
              velit in exercitationem ducimus sed corrupti quia est soluta
              molestiae rerum reprehenderit. Eum molestias placeat qui
              laboriosam ipsa sed officia voluptatem eos dignissimos ipsum. Ut
              reprehenderit necessitatibus est galisum perspiciatis id rerum
              doloribus debitis cupiditate est enim mollitia.
            </p>
            <h4>Requirements</h4>
            <p>
              Eum quisquam quisquam et dignissimos maiores est incidunt eaque
              sit totam velit et animi tempore. Ut consequatur amet qui galisum
              eius quo illum. Est laboriosam neque sit maxime officiis sed
              explicabo iure quo quasi eligendi. Ut optio voluptatem sed dicta
              ullam est nobis voluptas et enim omnis quo beatae soluta.
            </p>
            <ul>
              <li>Ut quos libero et corporis necessitatibus!</li> <br />
              <li>
                Quo delectus numquam vel dolore explicabo est quod officiis.
              </li>
              <br />
              <li>
                Non reprehenderit explicabo aut excepturi architecto cum omnis
                laborum aut nemo facere.
              </li>
              <br />
              <li>
                Qui minima commodi et quaerat quos At porro autem et ipsa quia.
              </li>
            </ul>
            <h3>What You Will Do?</h3>
            <p>
              numquam nisi sed eveniet consequuntur aut beatae maxime ut saepe
              totam. Eum quod molestias ut culpa harum aut suscipit nulla eos
              beatae suscipit 33 nobis animi ab enim soluta! Eos blanditiis
              rerum et facilis molestiae et quae officiis et rerum repellat non
              atque velit non voluptas ipsam. Aut dolorem distinctio id unde
              omnis aut incidunt molestiae et dicta voluptate At natus
              reprehenderit ab dolorem unde? Et amet libero hic architecto
              quisquam et vitae dolorum ut rerum vero sed iusto consequatur. Et
              praesentium quia aut repudiandae asperiores a praesentium sapiente
              sed doloremque tempore non cupiditate quia in eveniet voluptas.
            </p>
            <ol>
              <li>Est omnis mollitia non impedit ipsum.</li>
              <br />
              <li>Ad provident accusamus qui veritatis magnam.</li>
              <br />
              <li>
                Cum excepturi saepe eum Quis voluptatem non consequatur
                necessitatibus ad maxime maxime.
              </li>
              <br />
              <li>Et dolore unde eos iste optio!</li>
            </ol>
          </div>
        </div>
        <div className="modalFooter">
          <div className="modalFooter-container">
            <div className="modalFooter-name">
              <h4>
                Remote DevOps Engineer <br /> <span>Pod</span>
              </h4>
            </div>
            <div className="modalApply">
              <button>Apply Now</button>
            </div>
          </div>
        </div>
      </div>
      <div className="toggle-icons-page">
        <BsSunFill />
        <BsToggleOn className="toggle-icon-toggler" onClick={switchTheme} />
        <HiMoon />
      </div>
    </div>
  );
};

export default List5;
