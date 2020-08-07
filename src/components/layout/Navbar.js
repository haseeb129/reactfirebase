import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignOutLinks from "./SignedOutLinks";
const Navbar = () => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          React-Redux-Firebase
        </Link>
        <SignedInLinks />
        <SignOutLinks />
      </div>
    </nav>
  );
};

export default Navbar;
