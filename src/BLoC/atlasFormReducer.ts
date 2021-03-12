export enum atlasActionTypes {
  "FORM_SUBMITTED",
  "FORM_SAVED",
}

interface FormSubmittedAction {
  type: atlasActionTypes.FORM_SUBMITTED;
  payload?: any;
}
interface FormSavedAction {
  type: atlasActionTypes.FORM_SAVED;
  payload?: any;
}

export type atlasActions = FormSubmittedAction | FormSavedAction;

interface AtlasFormState {
  status: string;
}

const initialState: AtlasFormState = { status: "" };

export function atlasFormReducer(
  state = initialState,
  action: atlasActions
): AtlasFormState {
  let status;
  switch (action.type) {
    case atlasActionTypes.FORM_SUBMITTED:
      status = state.status ? "resubmitted" : "submitted";
      return { status };
    case atlasActionTypes.FORM_SAVED:
      status = "saved";
      return { status };
    default:
      return { status: "initial" };
  }
}
