import React,{useContext} from "react";
import { Route, Redirect } from "react-router-dom";
import {RootContext} from "../../RootContext";

const ProtectedRoute = ({ children, ...restProps }) => {
  const {authToken,} = useContext(RootContext);

  console.log(authToken);
    return (
    <Route
      {...restProps}
      render={() => {
        if (authToken && authToken !==null) {
          return children;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default ProtectedRoute;
