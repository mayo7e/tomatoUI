import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const SignUpButton = () => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        screen_hint: "signup",
        returnTo: "/profile"
      },
    });
  };

  return (
    <button className="button__signup" onClick={handleLogin}>
      Sign up
    </button>
  );
};

export default SignUpButton