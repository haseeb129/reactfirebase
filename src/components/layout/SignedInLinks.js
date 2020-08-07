import React from "react";
import { NavLink } from "react-router-dom";
import { signOut } from "../../store/actions/authActions";
import { connect } from "react-redux";
const SignedInLinks = (props) => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/create">New Projects</NavLink>
      </li>
      <li>
        <a onClick={props.signOut}>Sign Out</a>
      </li>
      <li>
        <NavLink to="/" className="btn btn-float pink lighten-1">
          NN
        </NavLink>
      </li>
    </ul>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(null, mapDispatchToProps)(SignedInLinks);
