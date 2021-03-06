import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function AuthenticatedRoute({ component: C, appProps, ...rest }: any) {
  return (
    <Route
      {...rest}
      render={props =>
        appProps.isAuthenticated
          ? <C {...props} {...appProps} />
          : <Redirect
              to={`/signup?redirect=${props.location.pathname}${props.location
                .search}`}
            />}
    />
  );
}
