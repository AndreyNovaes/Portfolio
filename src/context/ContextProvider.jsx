import React, { useState } from "react";
import PropTypes from "prop-types";
import context from "./context";

export default function ContextProvider({ children }) {
  // needs to be a global state
  const [exampleState, setExampleState] = useState();
  // global state creation

  // what is the needed ?
  const contextValue = {
    exampleState,
    setExampleState,
  };
  // what is the needed ?


  // So, this could returns the variables what is inside contextValue, just catch the provider and redirect in any other side of the app
  return (
  <context.Provider value={ contextValue }>
    { children }
  </context.Provider>
  );
  // So, this could returns the variables what is inside contextValue, just catch the provider and redirect in any other side of the app
}

ContextProvider.propTypes = {
  children: PropTypes.node,
};
