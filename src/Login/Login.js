import React from "react";
import "./Login.css";

import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

function Login() {
  const [state, dispatch] = useStateValue();

  const signIn = (e) => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => {
        alert(error.message); //8:29 trzeba pilnować czy autentykacja w firebase włączona
      });
  };

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Slack_Technologies_Logo.svg/1280px-Slack_Technologies_Logo.svg.png"
          alt="slack logo"
        />

        <h1>Sign in to Slack Clone</h1>
        <p>slack-clone</p>
        <Button onClick={signIn}>Sign in with Google</Button>
      </div>
    </div>
  );
}
export default Login;
