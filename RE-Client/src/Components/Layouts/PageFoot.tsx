import { Divider, Grid, IconButton, Paper, Stack, SxProps, Theme, Typography } from "@mui/material";
import { motion, Variants } from "framer-motion";
import StyleButtonTwo from "../UI/styleButtonTwo";
import StyleColNav from "../UI/StyleColNav";
import StyleLogo from "../UI/StyleLogo";

// ---------------------------------ANIMATION SECTIONS
const titleMotion: Variants = {
  initial: {
    opacity: 0,
    x: "-50px",
  },
  initial1: {
    opacity: 0,
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
    transition: {
      duration: 1,
      delay: 1,
    },
  },
};

// ---------------------------------STYLE SECTIONS
const footSx: SxProps<Theme> = {
  height: "550px",
  width: "100%",
  margin: "auto",
  borderRadius: "0",
  background: "linear-gradient(225.52deg, #271A00 0.45%, rgba(0, 0, 0, 0.982162) 45.25%)",
};
const realitySt: SxProps<Theme> = {
  background: "linear-gradient(139.15deg, #FFAC12 5.46%, #C87224 96.96%)",
  backgroundClip: "text",
  color: "transparent",
  paddingLeft: "8px",
};
const titleSx: SxProps<Theme> = {
  fontSize: { sm: "42px", xs: "30px" },
  lineHeight: "49px",
  letterSpacing: "-1.05px",
  fontFamily: "'DM Sans', sans-serif",
  fontWeight: 700,
  color: "white",
};

// ---------------------------------CONSTANT SECTIONS
const title = "Make your dreams a";

const PageFoot: React.FC = () => {
  return (
    <Paper sx={footSx}>
      <Grid container maxWidth="1440px" margin="auto">
        <Grid item xs={12} display="flex" justifyContent="space-between" p="60px 40px" alignItems="center" sx={{ flexDirection: { md: "row", sm: "column", xs: "column" } }}>
          <Stack sx={{ flexDirection: { sm: "row", xs: "column", alignItems: "center" } }}>
            <Typography children={title} sx={titleSx} component={motion.p} variants={titleMotion} initial="initial" whileInView="final" />
            <Typography children="reality" sx={{ ...titleSx, ...realitySt }} component={motion.p} variants={titleMotion} initial="initial1" whileInView="final1" />
          </Stack>
          <StyleButtonTwo h="70px" />
        </Grid>

        <Grid item xs={12} children={<Divider sx={{ bgcolor: "#FFFFFF", opacity: 0.1 }} />} />

        <Grid item md={3} sm={12} p="40px 40px" pb="0">
          <StyleLogo />
          <Stack direction="row" spacing={2} p="8px 0" sx={{ display: { xs: "none", sm: "block" } }}>
            <IconButton>
              <img alt="ison" src={`${process.env.PUBLIC_URL}/fb.png`} />
            </IconButton>
            <IconButton>
              <img alt="ison" src={`${process.env.PUBLIC_URL}/tw.png`} />
            </IconButton>
            <IconButton>
              <img alt="ison" src={`${process.env.PUBLIC_URL}/ig.png`} />
            </IconButton>
          </Stack>
        </Grid>

        <Grid item md={9} sm={12} p="40px 20px" pb="0" display="flex" justifyContent="flex-end">
          <StyleColNav />
        </Grid>

        <Grid item xs={12} p="40px 20px" children={<Divider sx={{ bgcolor: "#FFFFFF", opacity: 0.1 }} />} sx={{ display: { xs: "none", md: "block" } }} />
      </Grid>
    </Paper>
  );
};

export default PageFoot;
