import { Stack } from "@mui/material";
import { motion, Variants } from "framer-motion";
import { useNavigate } from "react-router-dom";

// ---------------------------------ANIMATION SECTIONS
const logoMotion: Variants = {
  initial: {
    opacity: 0,
    y: "50px",
  },
  final: {
    opacity: 1,
    y: "0",
    transition: {
      duration: 1,
    },
  },
};

const StyleLogo: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Stack direction="row" alignItems="center" spacing={1} onClick={() => navigate("/")} component={motion.div} variants={logoMotion} initial="initial" whileInView="final">
      <img src={`${process.env.PUBLIC_URL}/shape.png`} />
      <img src={`${process.env.PUBLIC_URL}/logoipsum.png`} />
    </Stack>
  );
};

export default StyleLogo;
