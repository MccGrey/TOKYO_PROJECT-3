import Featured from "../../components/featured/Featured";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import "./home.css";
import { BsSunFill } from "react-icons/bs";
import { HiMoon } from "react-icons/hi";
import { BsToggleOn } from "react-icons/bs";
import useLocalStorage from "use-local-storage";

const Home = () => {
  const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div data-theme={theme}>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
      </div>
      <div className="toggle-icons">
        <BsSunFill />
        <BsToggleOn className="toggle-icon-toggler" onClick={switchTheme} />
        <HiMoon />
      </div>
    </div>
  );
};

export default Home;
