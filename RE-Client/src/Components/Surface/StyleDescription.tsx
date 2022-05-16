import { SxProps, Theme, Typography } from "@mui/material";
import { motion, Variants } from "framer-motion";

// ---------------------------------ANIMATION SECTIONS
const descriptionMotion: Variants = {
  initial: {
    opacity: 0,
    x: "-50px",
  },
  final: {
    opacity: 1,
    x: "0",
    transition: {
      duration: 1,
      delay: 0.5,
    },
  },
};

// ---------------------------------TYPE SECTIONS
interface StyleDescriptionType {
  style?: SxProps<Theme>;
}

// ---------------------------------CONST SECTIONS
const description =
  "Torquatos nostros? quos dolores eos, qui dolorem ipsum per se texit, ne ferae quidem se repellere, idque instituit docere sic: omne animal, simul atque integre iudicante itaque aiunt hanc quasi involuta aperiri, altera occulta quaedam et voluptatem accusantium doloremque.";

const StyleDescription: React.FC<StyleDescriptionType> = ({ style = {} }) => {
  return <Typography children={description} sx={style} variant="h5" component={motion.p} variants={descriptionMotion} initial="initial" whileInView="final" />;
};

export default StyleDescription;
