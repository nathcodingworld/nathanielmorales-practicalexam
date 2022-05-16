import { Paper, SxProps, Theme } from "@mui/material";
import { motion, Variants } from "framer-motion";

// ---------------------------------STYLE SECTIONS
const dividerSx: SxProps<Theme> = {
  background: "linear-gradient(90deg, #FFAC12 0%, #000000 94.96%)",
  width: "170px",
  height: "4px",
  borderRadius: "2px",
  marginBottom: "16px",
};

// ---------------------------------ANIMATION SECTIONS
const deviderMotion: Variants = {
  initial: {
    opacity: 0,

    x: "-50px",
  },
  final: {
    opacity: 1,
    x: "0",
    transition: {
      duration: 1,
      delay: 0.3,
    },
  },
};

const StyleDivider: React.FC = () => {
  return <Paper sx={dividerSx} component={motion.div} variants={deviderMotion} initial="initial" whileInView="final" />;
};

export default StyleDivider;
