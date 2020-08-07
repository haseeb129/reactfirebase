export const createProject = (project) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("Projects")
      .add({
        ...project,
        authorFirstName: "dani",
        authorLastName: "waheed",
        authorId: 1234,
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
