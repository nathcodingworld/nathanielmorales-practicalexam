import { Grid, Paper, SxProps, Theme } from "@mui/material";
import { motion, Variants } from "framer-motion";
import StyleDivider from "../Surface/StyleDivider";
import StyleTitle from "../Surface/StyleTitle";
import StyleDescription from "../Surface/StyleDescription";
import StyleButton from "../UI/StyleButton";

// ---------------------------------ANIMATION SECTIONS
const imgMotion: Variants = {
  initial: {
    opacity: 0,
    x: "40px",
  },
  initial1: {
    opacity: 0,
    x: "-40px",
  },
  final: {
    opacity: 1,
    x: "0",
    transition: {
      duration: 1,
      delay: 0.2,
    },
  },
};

// ---------------------------------STYLE SECTIONS
const imageSx: SxProps<Theme> = {
  borderRadius: "0",
  borderTopRightRadius: "57px",
  backgroundImage: `url(${process.env.PUBLIC_URL}/meeting.png)`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  aspectRatio: "704/657",
  width: "100%",
  margin: { sm: "60px", xs: "30px", md: "0" },
  boxShadow: "0 62px 54px 0 rgb(0 0 0 / 25%)",
};
const paperSx: SxProps<Theme> = {
  height: { md: "700px", xs: "max-content" },
  maxWidth: "1440px",
  margin: "auto",
  position: "relative",
  border: "none",
  boxShadow: "none",
};

// ---------------------------------CONSTANT SECTIONS
const title = "You're in good hands";

// ---------------------------------TYPE SECTIONS
interface GoodHandsType {
  reversed?: boolean;
}

const GoodHands: React.FC<GoodHandsType> = ({ reversed = false }) => {
  return (
    <Paper sx={paperSx}>
      <Grid container alignItems="center" sx={{ position: { md: "absolute", xs: "inherit" }, bottom: reversed ? "0" : "-150px", top: reversed ? "-150px" : "0" }}>
        {!reversed && <Grid item md={6} sm={12} sx={imageSx} component={motion.div} variants={imgMotion} initial="initial1" whileInView="final" />}
        <Grid item md={6} sm={12} p="0 60px" display="flex" flexDirection="column" alignItems="self-start" sx={{ width: "500px" }}>
          <StyleDivider />
          <StyleTitle content={title} />
          <StyleDescription />
          <StyleButton />
        </Grid>
        {reversed && <Grid item md={6} sm={12} sx={imageSx} component={motion.div} variants={imgMotion} initial="initial" whileInView="final" />}
      </Grid>
    </Paper>
  );
};

export default GoodHands;
