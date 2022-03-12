import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ auth, component: Component, path }) => {

  return (
    <Route
      // {...rest}
      //which component to render
      //Rendering a <Redirect> will navigate to a new location. The new location will override the current location in the history stack, like server-side redirects (HTTP 3xx) do.
      render={(props) => {

        console.log("props = ", props);
        if (auth) 
        {
          return <Component />;
        }
        //false auth
        if (!auth)
        {
          return (
            <Redirect to={{ path: "/", state: { from: props.location } }} />
          );
        }
      }}

    />
  );
};

export default ProtectedRoute;
