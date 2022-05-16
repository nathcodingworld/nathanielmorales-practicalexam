import { Avatar, CardContent, CardHeader, Grid, Paper, Stack, SxProps, Theme, Typography } from "@mui/material";
import { useState } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import StyleDivider from "../Surface/StyleDivider";

// ---------------------------------ANIMATION SECTIONS
const quoteMotion: Variants = {
  initial: {
    opacity: 0,
    x: "50px",
  },
  final: {
    opacity: 1,
    x: "0",
    transition: {
      duration: 0.7,
    },
  },
  leave: {
    opacity: 0,
    x: "-50px",
    transition: {
      duration: 0.7,
    },
  },
};

// ---------------------------------STYLE SECTIONS
const paperSx: SxProps<Theme> = {
  height: "730px",
  maxWidth: "1440px",
  margin: "auto",
  borderRadius: "0",
};
const cardSx: SxProps<Theme> = {
  height: "140px",
  width: "max-content",
  margin: "auto",
  "& 	.MuiCardHeader-title ": {
    fontSize: "15px",
    lineHeight: "18px",
    letterSpacing: "-0.38px",
    fontFamily: "'DM Sans', sans-serif",
    color: "#000",
    fontWeight: "700",
  },
  "& .MuiCardHeader-subheader": {
    fontSize: "15px",
    lineHeight: "18px",
    letterSpacing: "-0.38px",
    fontFamily: "'DM Sans', sans-serif",
    color: "#979797",
  },
};
const quoteSx: SxProps<Theme> = {
  color: "#000",
  width: "100%",
  maxWidth: "400px",
};

// ---------------------------------CONST SECTIONS
const quoteOne = "“Certe, inquam, pertinax non existimant oportere exquisitis rationibus conquisitis de quo enim ipsam. Torquem detraxit hosti et quidem faciunt, ut aut.”";
const quoteTwo = "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.”";
const quoteThree = "“Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.”";

// ---------------------------------REACT FUNTIONAL COMPONENT
const Quote: React.FC = () => {
  const [qid, setQID] = useState<"idone" | "idtwo" | "idthree">("idtwo");

  const setid = (state: "idone" | "idtwo" | "idthree") => () => {
    setQID(state);
  };

  return (
    <Paper sx={paperSx}>
      <Stack direction="column" alignItems="center" justifyContent="space-evenly" spacing={2} p="40px" height="100%">
        <CardContent>
          <StyleDivider />

          <AnimatePresence exitBeforeEnter>
            {qid === "idone" && <Typography key="one" children={quoteOne} sx={quoteSx} variant="h4" component={motion.p} variants={quoteMotion} initial="initial" animate="final" exit="leave" />}
            {qid === "idtwo" && <Typography key="two" children={quoteTwo} sx={quoteSx} variant="h4" component={motion.p} variants={quoteMotion} initial="initial" animate="final" exit="leave" />}
            {qid === "idthree" && <Typography key="three" children={quoteThree} sx={quoteSx} variant="h4" component={motion.p} variants={quoteMotion} initial="initial" animate="final" exit="leave" />}
          </AnimatePresence>
        </CardContent>

        <Grid container>
          <Grid item md={4} xs={12} bgcolor={qid === "idone" ? "#FFAC12" : "white"}>
            <CardHeader sx={cardSx} avatar={<Avatar />} title="Some name" subheader="some header" onClick={setid("idone")} />
          </Grid>

          <Grid item md={4} xs={12} bgcolor={qid === "idtwo" ? "#FFAC12" : "white"}>
            <CardHeader sx={cardSx} avatar={<Avatar />} title="Some name" subheader="some header" onClick={setid("idtwo")} />
          </Grid>

          <Grid item md={4} xs={12} bgcolor={qid === "idthree" ? "#FFAC12" : "white"}>
            <CardHeader sx={cardSx} avatar={<Avatar />} title="Some name" subheader="some header" onClick={setid("idthree")} />
          </Grid>
        </Grid>
      </Stack>
    </Paper>
  );
};

export default Quote;
