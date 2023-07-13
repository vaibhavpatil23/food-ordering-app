import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useonlinestatus";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("login");

  const onlineStatus = useOnlineStatus()
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="" />
      </div>
      <div className="nav-item">		✅	✅✅
        <ul>
          <li>Online Status : {onlineStatus ? "Right" : "Wrong"}</li>
          <li> <Link to="/">Home</Link></li>
          <li><Link to="about">About</Link></li>
          <li> <Link to="contact">Contact Us</Link></li>
          <li> <Link to="Cards">Cards</Link></li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "login"
                ? setBtnNameReact("logout")
                : setBtnNameReact("login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
