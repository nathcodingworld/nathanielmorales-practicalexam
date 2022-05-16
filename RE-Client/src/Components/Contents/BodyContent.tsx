import { Stack, SxProps, Theme, Typography } from "@mui/material";
import { motion, Variants } from "framer-motion";

// ---------------------------------ANIMATION SECTIONS
const titleMotion: Variants = {
  initial: {
    opacity: 0,
    x: "70px",
  },
  final: {
    opacity: 1,
    x: "0",
    transition: {
      duration: 1,
      delay: 0.2,
    },
  },
  final1: {
    opacity: 0.6,
    x: "0",
    transition: {
      duration: 1,
      delay: 0.5,
    },
  },
};

// ---------------------------------STYLE SECTIONS
const contentSx: SxProps<Theme> = {
  width: { sm: "540px", xs: "100%" },
};
const titleSx: SxProps<Theme> = {
  color: "white",
  marginLeft: "40px",
};
const descriptionSx: SxProps<Theme> = {
  color: "white",
  marginLeft: "50px",
  marginRight: "50px",
  marginTop: "16px",
};

// ---------------------------------CONSTANT SECTIONS
const title = "Beautiful homes made for you";
const description = "In oculis quidem se esse admonere interesse enim maxime placeat, facere possimus, omnis. Et quidem faciunt, ut labore et accurate disserendum et harum quidem exercitus quid.";

// ---------------------------------REACT FUNTIONAL COMPONENT
const BodyContent = () => {
  return (
    <Stack sx={contentSx}>
      <Typography children={title} sx={titleSx} variant="h1" component={motion.p} variants={titleMotion} initial="initial" whileInView="final" />
      <Typography children={description} sx={descriptionSx} variant="h5" component={motion.p} variants={titleMotion} initial="initial" whileInView="final1" />
    </Stack>
  );
};

export default BodyContent;
