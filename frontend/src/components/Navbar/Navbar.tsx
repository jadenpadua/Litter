import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCat } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="container">
      <div className="box">
        <div className="mini-box">
          <FontAwesomeIcon icon={faCat} className="icon" />
        </div>
        <h1>Litter</h1>
      </div>
      <div className="box3">
        <h3>ABOUT</h3>
        <h3>CONTACT</h3>
      </div>
    </div>
  );
};

export default Navbar;
