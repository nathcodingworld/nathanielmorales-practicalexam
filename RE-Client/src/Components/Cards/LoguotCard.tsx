import { Avatar, Button, Card, CardActions, CardContent, SxProps, Theme, Typography } from "@mui/material";
import { useContext } from "react";

import { AdminContext } from "../../Providers/StateProvider";
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

// ---------------------------------TYPE SECTIONS
interface logoutType {
  onClose: () => void;
}

// ---------------------------------REACT FUNTIONAL COMPONENTS
const LogoutCard: React.FC<logoutType> = ({ onClose }) => {
  const logout = useContext(AdminContext).logout;

  function LogoutHandler() {
    cookie.remove("admin", { path: "/" });
    logout();
    onClose();
  }

  // ---------------------------------JSX SECTIONS
  return (
    <Card sx={cardSx}>
      <CardContent sx={{ display: "flex", alignItems: "center" }}>
        <Avatar />
        <Typography children="Admin" pl="10px" />
      </CardContent>
      <CardActions>
        <Button children="Log out" fullWidth variant="contained" onClick={LogoutHandler} />
      </CardActions>
    </Card>
  );
};

export default LogoutCard;
