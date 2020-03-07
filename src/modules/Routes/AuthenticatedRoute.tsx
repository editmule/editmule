import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function AuthenticatedRoute({ component: C, appProps, ...rest }: any) {
  console.log('AuthenticatedRoute')
  return (
    <Route
      {...rest}
      render={props =>
        appProps.isAuthenticated
          ? <C {...props} {...appProps} />
          : <Redirect
              to={`/login?redirect=${props.location.pathname}${props.location
                .search}`}
            />}
    />
  );
}
