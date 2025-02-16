import { FaBell, FaUser } from "react-icons/fa";
import './Navbar.css';
import PropTypes from "prop-types";
const Navbar = ({pagePath}) => {
  return (
      <div className="navbar-container">
        <a href="#" className="navbar-brand">
          <span className="navbar-title">{pagePath}</span>
        </a>
        <div className="navbar-icons">
          <a href="tel:5541251234" className="navbar-icon">
            <FaBell size={30} color="#1A73E8" />
          </a>
          <a href="#" className="navbar-icon">
            <FaUser size={30} color="#1A73E8" />
          </a>
        </div>
      </div>
  );
};

export default Navbar;
Navbar.propTypes = {
  pagePath: PropTypes.string.isRequired,  // Expecting a boolean
};