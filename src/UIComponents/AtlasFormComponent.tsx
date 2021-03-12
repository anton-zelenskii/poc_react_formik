import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { atlasActions, atlasActionTypes } from "../BLoC/atlasFormReducer";

interface AtlasFormValues {
  bookingId: string;
}

const AtlasFormComponent: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const initialValues: AtlasFormValues = { bookingId: "" };
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      dispatch({
        type: atlasActionTypes.FORM_SUBMITTED,
        payload: values,
      } as atlasActions);
    },
  });
  const status = useSelector((state) => {
    return state.atlasFormReducer.status;
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="bookingId">Booking Id</label>
        <input
          id="bookingId"
          name="bookingId"
          onChange={formik.handleChange}
          value={formik.values.bookingId}
        ></input>
      </div>

      <button type="submit" disabled={!["saved", "initial"].includes(status)}>
        Submit
      </button>
    </form>
  );
};

export default AtlasFormComponent;
