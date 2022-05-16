import { Button, SxProps, Theme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion, Variants } from "framer-motion";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

// ---------------------------------ANIMATION SECTIONS
const btnMotion: Variants = {
  initial: {
    opacity: 0,
  },
  final: {
    opacity: 1,
    transition: {
      duration: 1,
      delay: 1,
    },
  },
};

// ---------------------------------STYLE SECTIONS
const buttonSx: SxProps<Theme> = {
  borderRadius: "0",
  borderTopRightRadius: "18px",
  color: "black",
  backgroundColor: "#FFAC12",
  fontSize: "17px",
  fontFamily: "'DM Sans', sans-serif",
  lineHeight: "20px",
  letterSpacing: "-0.427179px",
  fontWeight: "700",
  p: { xs: "0 10px", sm: "0 35px" },
};

// ---------------------------------TYPE SECTIONS
interface StyleButtonTwoType {
  h?: string;
}

const StyleButtonTwo: React.FC<StyleButtonTwoType> = ({ h = "100%" }) => {
  const navigate = useNavigate();
  return (
    <Button
      variant="contained"
      children="work with us"
      sx={{ ...buttonSx, height: h }}
      endIcon={<ArrowRightAltIcon sx={{ transform: "scale(1.5)", color: "white" }} />}
      onClick={() => navigate("/more")}
      component={motion.button}
      variants={btnMotion}
      initial="initial"
      whileInView="final"
    />
  );
};

export default StyleButtonTwo;
