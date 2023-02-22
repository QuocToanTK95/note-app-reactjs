import React, { useContext } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../context/AuthProvider";

export default function Login() {
  const auth = getAuth();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  console.log({ user });

  const handleLoginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();

    const res = await signInWithPopup(auth, provider);
  };

  if (user?.uid) {
    navigate("/");
    return;
  }

  return (
    <>
      <Typography variant="h5" color="initial" sx={{ mb: "10px" }}>
        Welcome to Note App
      </Typography>
      <Button
        variant="outlined"
        color="primary"
        onClick={handleLoginWithGoogle}
      >
        Login with Google
      </Button>
    </>
  );
}
