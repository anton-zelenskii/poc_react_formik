import React from "react";
import { ApplicationState, useSelector } from "react-redux";

declare module "react-redux" {
  interface ApplicationState {
    atlasFormReducer: {
      status: string;
    };
  }

  interface DefaultRootState extends ApplicationState {}
}

const StatusBarComponent: React.FunctionComponent = () => {
  const status = useSelector((state: ApplicationState) => {
    return state.atlasFormReducer.status;
  });
  return <div>Status: {status}</div>;
};

export default StatusBarComponent;
