export const createProject = (project) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const profile = getState().firebase.profile;
    const id = getState().firebase.auth.uid;
    const firestore = getFirestore();
    firestore
      .collection("Projects")
      .add({
        ...project,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: id,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({ type: "CREATE_PROJECT", project });
      })
      .catch((err) => {
        dispatch({ type: "Failed", err });
      });
    dispatch({ type: "CREATE_PROJECT", project });
  };
};
