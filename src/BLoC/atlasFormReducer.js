const atlasActions = {
  FORM_SUBMITTED: "FORM_SUBMITTED",
  FORM_SAVED: "FORM_SAVED",
};

const atlasFormReducer = (state, action) => {
  let status;
  switch (action.type) {
    case atlasActions.FORM_SUBMITTED:
      status = state.status ? "resubmitted" : "submitted";
      return { status };
    case atlasActions.FORM_SAVED:
      status = "saved";
      return { status };
    default:
      return { status: "initial" };
  }
};

export { atlasActions, atlasFormReducer };
