import { Dispatch, Middleware } from "redux";
import { atlasActionTypes, atlasActions } from "../atlasFormReducer";

const atlasMiddleware: Middleware = () => (next: Dispatch) => (
  action: atlasActions
) => {
  if (action.type === atlasActionTypes.FORM_SUBMITTED) {
    console.log("Altas fetch simulation started");
    setTimeout(() => {
      console.log("Atlas fetch simulation finished");
      next({ type: atlasActionTypes.FORM_SAVED } as atlasActions);
    }, 3000);
    next({ type: atlasActionTypes.FORM_SUBMITTED } as atlasActions);
  }
};

export default atlasMiddleware;
