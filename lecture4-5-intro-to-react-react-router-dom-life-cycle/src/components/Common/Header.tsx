import React from "react";
import { Link } from "react-router-dom";
import "../styles/commonStyles.css";
export default class Header extends React.Component {
  render() {
    return (
      <div className="top-nav">
        <Link to="/" className="nav-items">
          Home
        </Link>
        <Link to="/about-us" className="nav-items">
          About us
        </Link>
        <Link to="/contact-us" className="nav-items">
          Contact us
        </Link>
      </div>
    );
  }
}
