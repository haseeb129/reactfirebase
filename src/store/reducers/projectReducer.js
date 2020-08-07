const initState = {
  projects: [
    { id: "1", title: "this project 1 from store", content: "blah blah" },
    { id: "2", title: "this project 2 from store", content: "blah blah" },
    { id: "3", title: "this project 3 from store", content: "blah blah" },
  ],
};
const projectReducer = (state = initState, action) => {
  if (action.type === "CREATE_PROJECT")
    console.log("in reducers", action.project);
  else if (action.type === "Failed") console.log("in reducers", action.err);

  return state;
};

export default projectReducer;
