import React from "react";
import { Redirect } from "react-router-dom";
const ForceLogin = ({ from }) => {
  return (
    <Redirect
      to={{
        pathname: "/admin/signin",
        state: {
          from,
        },
      }}
    />
  );
};

export default ForceLogin;
