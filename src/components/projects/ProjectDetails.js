import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

const ProjectDetails = (props) => {
  const { project, auth } = props;

  if (!auth.uid) return <Redirect to="/signin" />;
  else if (project) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{project.title}</span>
            <p>{project.content}</p>
          </div>
          <div className="card-action great lighten-4">
            <div>
              {project.authorFirstName} {project.authorLastName}
            </div>
            <div>5 August ,11pm</div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container cernter">
        <h3>Loading</h3>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.Projects;
  const project = projects ? projects[id] : null;

  return {
    project: project,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "Projects" }])
)(ProjectDetails);
