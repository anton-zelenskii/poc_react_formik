import React from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { atlasActions } from "../BLoC/atlasFormReducer";

const AtlasFormComponent = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: { bookingId: "" },
    onSubmit: (values) => {
      dispatch({ type: atlasActions.FORM_SUBMITTED, payload: values });
    },
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

      <button type="submit">Submit</button>
    </form>
  );
};

export default AtlasFormComponent;
