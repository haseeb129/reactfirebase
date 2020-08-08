import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignOutLinks from "./SignedOutLinks";
import { connect } from "react-redux";

const Navbar = (props) => {
  const { auth, profile } = props;
  const links = auth.uid ? (
    <SignedInLinks profile={profile} />
  ) : (
    <SignOutLinks />
  );
  return (
    <div className=" grey darken-3">
      <nav className="grey darken-3">
        <div className="nav-wrapper row grey darken-3">
          <div className="col s4 m6 grey darken-3">
            <Link to="/" className=" left grey darken-3">
              React-Redux-Firebase
            </Link>
          </div>
          <div className="col s8 m6 grey darken-3">{links}</div>
        </div>
      </nav>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

export default connect(mapStateToProps)(Navbar);
