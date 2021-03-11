import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";

import AppComponent from "./UIComponents/AppComponent.jsx";
import rootReducer from "./BLoC/rootReducer";
import atlasMiddleware from "./BLoC/Middlewares/atlasMiddleware";
const store = createStore(rootReducer, applyMiddleware(atlasMiddleware));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppComponent />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
