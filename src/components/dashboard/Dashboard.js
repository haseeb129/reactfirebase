import React, { Component } from "react";
import ProjectList from "../projects/ProjectList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
class Dashboard extends Component {
  state = {};
  render() {
    const { projects, auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    else
      return (
        <div className="dashboard container">
          <div className="row">
            <div className="col s12 m12">
              <ProjectList projects={projects} />
            </div>
          </div>
        </div>
      );
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.firestore.ordered.Projects,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "Projects", orderBy: ["createdAt", "desc"] }])
)(Dashboard);
