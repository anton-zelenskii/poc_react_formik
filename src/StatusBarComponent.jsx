import React from "react";
import { useSelector } from "react-redux";

const StatusBarComponent = () => {
  const status = useSelector((state) => {
    console.log(state);
    return state.atlasFormReducer.status;
  });
  return <div>Status: {status}</div>;
};

export default StatusBarComponent;
