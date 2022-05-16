import { Divider, Paper, Stack, SxProps, Theme, Typography } from "@mui/material";
import { motion, Variants } from "framer-motion";
import { useLocation } from "react-router-dom";
import TopNav from "../Contents/TopNav";

// ---------------------------------ANIMATION SECTIONS
const titleMotion: Variants = {
  initial: {
    opacity: 0,
    x: "50px",
  },
  initial1: {
    opacity: 0,
    x: "-50px",
  },
  final: {
    opacity: 1,
    x: "0",
    transition: {
      duration: 1,
      delay: 0.1,
    },
  },
  final1: {
    opacity: 1,
    x: "0",
    transition: {
      duration: 1,
      delay: 0.5,
    },
  },
};

// ---------------------------------STYLE SECTIONS
const paperSx: SxProps<Theme> = {
  height: "230px",
  background: "linear-gradient(225.52deg, #271A00 0.45%, rgba(0, 0, 0, 0.982162) 100.47%)",
  borderRadius: "0",
};
const HeadInSx: SxProps<Theme> = {
  maxWidth: "1440px",
  margin: "auto",
  height: "100%",
};
const titleSx: SxProps<Theme> = {
  fontSize: "32px",
  lineHeight: "38px",
  letterSpacing: "-0.80px",
  fontFamily: "'DM Sans', sans-serif",
  color: "#fff",
  fontWeight: "700",
};
const descSx: SxProps<Theme> = {
  fontSize: "15px",
  lineHeight: "24px",
  letterSpacing: "-0.38px",
  fontFamily: "'DM Sans', sans-serif",
  color: "#fff",
  mixBlendMode: "normal",
  opacity: 0.6,
};

// ---------------------------------TYPE SECTIONS
interface TopBarType {
  blank?: boolean;
}

// ---------------------------------REACT FUNTIONAL COMPONENTS
const TopBar: React.FC<TopBarType> = ({ blank = false }) => {
  const location: any = useLocation();
  let housename = "Malto house";
  let price = 4000;

  if (location.state) {
    housename = location.state.housename;
    price = location.state.price;
  }

  return (
    <Paper sx={paperSx}>
      <Stack direction="column" sx={HeadInSx}>
        <TopNav />

        <Divider sx={{ bgcolor: "white", opacity: 0.1, marginTop: "27px" }} />

        {!blank && (
          <Stack direction="row" justifyContent="space-between" height="100%" p="0 40px">
            <Stack direction="column" spacing={1} justifyContent="center">
              <Typography children={housename} sx={titleSx} component={motion.p} variants={titleMotion} initial="initial1" whileInView="final" />
              <Typography children="3002 Foster Ave, Brooklyn, NY 11210, USA" sx={descSx} component={motion.p} variants={titleMotion} initial="initial1" whileInView="final1" />
            </Stack>
            <Stack direction="column" spacing={1} justifyContent="center" alignItems="flex-end">
              <Typography children={"$" + price} sx={titleSx} component={motion.p} variants={titleMotion} initial="initial" whileInView="final" />
              <Typography children="$2,800/sq ft" sx={descSx} component={motion.p} variants={titleMotion} initial="initial" whileInView="final1" />
            </Stack>
          </Stack>
        )}
      </Stack>
    </Paper>
  );
};

export default TopBar;
