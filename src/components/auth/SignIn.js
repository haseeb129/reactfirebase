import React, { Component } from "react";
import { signIn } from "../../store/actions/authActions";
import { connect } from "react-redux";
class SignIn extends Component {
  state = { email: "", password: "" };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
    console.log("Changing", e.target);
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.signIn(this.state);
  };
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Sign IN</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Login</button>
            <div className="red-text center">
              {this.props.authError && <p>{this.props.authError.message}</p>}
            </div>
          </div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
  };
};
const mapDispatchToProps = (dispatch) => {
  return { signIn: (credentials) => dispatch(signIn(credentials)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
