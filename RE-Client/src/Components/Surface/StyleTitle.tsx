import { Typography } from "@mui/material";
import { motion, Variants } from "framer-motion";

// ---------------------------------ANIMATION SECTIONS
const titleMotion: Variants = {
  initial: {
    opacity: 0,
    x: "50px",
  },
  final: {
    opacity: 1,
    x: "0",
    transition: {
      duration: 1,
      delay: 0.1,
    },
  },
};

// ---------------------------------TYPE SECTIONS
interface StyleTitleType {
  content: any;
  color?: string;
}

const StyleTitle: React.FC<StyleTitleType> = ({ content, color = "black" }) => {
  return <Typography children={content} sx={{ color: color }} variant="h2" component={motion.p} variants={titleMotion} initial="initial" whileInView="final" />;
};

export default StyleTitle;
