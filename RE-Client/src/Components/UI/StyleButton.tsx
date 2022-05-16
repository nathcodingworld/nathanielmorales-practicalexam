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
      delay: 1.5,
    },
  },
};

// ---------------------------------STYLE SECTIONS
const btnSx: SxProps<Theme> = {
  color: "white",
  marginTop: "40px",
  borderRadius: "0",
  borderTopRightRadius: "18px",
  height: "70px",
  width: "209px",
  fontFamily: "'DM Sans', sans-serif",
};

// ---------------------------------TYPE SECTIONS
interface StyleButtonType {
  content?: string;
  bg?: "dark" | "light";
  fw?: boolean;
}

const StyleButton: React.FC<StyleButtonType> = ({ fw = false, content = "Learn More", bg = "dark" }) => {
  const navigate = useNavigate();
  return (
    <Button
      variant="contained"
      children={content}
      sx={{ ...btnSx, backgroundColor: bg === "dark" ? "black" : "#FFAC12", width: fw ? "100%" : "209px" }}
      endIcon={<ArrowRightAltIcon sx={{ color: bg === "dark" ? "#FFAC12" : "black", transform: "scale(1.7)" }} />}
      onClick={() => navigate("/More")}
      component={motion.button}
      variants={btnMotion}
      initial="initial"
      whileInView="final"
    />
  );
};

export default StyleButton;
