import { atlasActions } from "../atlasFormReducer";

const atlasMiddleware = (store) => (next) => (action) => {
  if (action.type === atlasActions.FORM_SUBMITTED) {
    console.log("Altas fetch simulation started");
    setTimeout(() => {
      console.log("Atlas fetch simulation finished");
      next({ type: atlasActions.FORM_SAVED });
    }, 3000);
    next({ type: atlasActions.FORM_SUBMITTED });
  }
};

export default atlasMiddleware;
