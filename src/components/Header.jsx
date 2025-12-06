import Nav from "./Nav";
import CoStreamingLogo from "../img/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="main-header">
      <div className="header-content">
        <div className="header-logo">
          <Link to="/">
            <img src={CoStreamingLogo} alt="Logo CO-Streaming" />
          </Link>
        </div>
        <Nav />
      </div>
    </header>
  );
};

export default Header;
