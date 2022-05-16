import { Button, Card, CardActions, CardContent, CircularProgress, Stack, SxProps, TextField, Theme } from "@mui/material";
import { useSnackbar } from "notistack";
import { useContext, useState } from "react";

import { AdminContext } from "../../Providers/StateProvider";
import { gql, useMutation } from "@apollo/client";
import cookie from "react-cookies";

// ---------------------------------STYLE SECTIONS
const cardSx: SxProps<Theme> = {
  position: "absolute",
  top: "50%",
  left: "50%",
  width: "100%",
  maxWidth: "500px",
  transform: "translate(-50%, -50%)",
};

// ---------------------------------QUERY SECTIONS
const Login = gql`
  mutation Login($admin: String!, $password: String!) {
    login(admin: $admin, password: $password) {
      token
    }
  }
`;

// ---------------------------------TYPE SECTIONS
interface logintype {
  onClose: () => void;
}

// ---------------------------------REACT FUNTIONAL COMPONENTS
const LogInCard: React.FC<logintype> = ({ onClose }) => {
  const [logIn, { loading, error }] = useMutation(Login);
  const [namea, setName] = useState("");
  const [password, setPassword] = useState("");
  const login = useContext(AdminContext).login;
  const { enqueueSnackbar } = useSnackbar();

  // ---------------------------------AUTHORIZE ADMIN
  async function LoginHandler() {
    if (!namea) enqueueSnackbar("admin name input is empty", { variant: "error" });
    if (!password) enqueueSnackbar("password input is empty", { variant: "error" });
    if (namea && password) {
      try {
        const success = await logIn({ variables: { admin: namea, password } });
        if (success) {
          const token = success.data.login.token.toString();
          console.log(token);
          const expires = new Date();
          expires.setDate(Date.now() + 1000 * 60 * 60 * 24 * 14);
          cookie.save("admin", token, { path: "/", expires, maxAge: 3500 });
          login(token);
          enqueueSnackbar("you can now add delete update listing in listing area", { variant: "info" });
          enqueueSnackbar("you're logged in", { variant: "success" });
          onClose();
        }
      } catch (error: any) {
        enqueueSnackbar(error?.message, { variant: "error" });
      }
    }
  }

  // ---------------------------------JSX SECTIONS
  return (
    <Card sx={cardSx}>
      <CardContent>
        <Stack spacing={2}>
          <TextField variant="outlined" label="Admin Name" fullWidth placeholder="Admin Name: admin" value={namea} onChange={(e) => setName(e.target.value)} />
          <TextField variant="outlined" label="Password" fullWidth type="password" placeholder="Password: admin1234" value={password} onChange={(e) => setPassword(e.target.value)} />
        </Stack>
      </CardContent>
      <CardActions>{loading ? <CircularProgress sx={{ margin: "auto" }} /> : <Button children="Log In" fullWidth variant="contained" onClick={LoginHandler} />}</CardActions>
    </Card>
  );
};

export default LogInCard;
