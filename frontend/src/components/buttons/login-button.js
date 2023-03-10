import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

 const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = async () => {
    console.log("yolo")
    await loginWithRedirect({
      appState: {
        returnTo: "/profile",
      },
    });
  };
 

  return (
    <button className="button__login" onClick={handleLogin}>
      Log In
    </button>
  );
};

export default LoginButton