import { Button, Paper, SxProps, Theme } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { useNavigate } from "react-router-dom";

// ---------------------------------STYLE SECTIONS
const paperSx: SxProps<Theme> = {
  position: "relative",
  width: "100%",
  borderRadius: "0",
  borderTopRightRadius: "50px",
  height: { md: "100px", sm: "70px", xs: "40px" },
  border: "none",
  boxShadow: "none",
};
const buttonSx: SxProps<Theme> = {
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  left: "40px",
  fontFamily: "'DM Sans', sans-serif",
  fontSize: "20px",
  lineHeight: "23px",
  letterSpacing: "-0.502564px",
  color: "black",
};

const BotNav = () => {
  const navigate = useNavigate();
  return (
    <Paper sx={paperSx}>
      <Button children="See all Listing" sx={buttonSx} onClick={() => navigate("/Listing")} endIcon={<ArrowRightAltIcon color="primary" sx={{ transform: "scale(1.5)" }} />} />
    </Paper>
  );
};

export default BotNav;
