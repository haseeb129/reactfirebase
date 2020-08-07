import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignOutLinks from "./SignedOutLinks";
import { connect } from "react-redux";

const Navbar = (props) => {
  const { auth } = props;
  console.log("PROPS NAVBAR", auth);
  const links = auth.uid ? <SignedInLinks /> : <SignOutLinks />;
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          React-Redux-Firebase
        </Link>
        {links}
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  console.log("state", state);
  return { auth: state.firebase.auth };
};

export default connect(mapStateToProps)(Navbar);