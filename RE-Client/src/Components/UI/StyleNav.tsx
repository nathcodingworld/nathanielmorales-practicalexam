import { Button, Modal, Stack, SxProps, Theme } from "@mui/material";
import { motion, Variants } from "framer-motion";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AdminContext } from "../../Providers/StateProvider";
import LogInCard from "../Cards/LogInCard";
import LogoutCard from "../Cards/LoguotCard";

// ---------------------------------STYLE SECTIONS
const btnSx: SxProps<Theme> = {
  display: { xs: "none", md: "block" },
  fontSize: "15px",
  lineHeight: "18px",
  letterSpacing: "-0.38px",
  fontFamily: "'DM Sans', sans-serif",
  fontWeight: 700,
  color: "white",
};

// ---------------------------------ANIMATION SECTIONS
const btnMotion: Variants = {
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
  final1: {
    opacity: 1,
    x: "0",
    transition: {
      duration: 1,
      delay: 0.25,
    },
  },
  final2: {
    opacity: 1,
    x: "0",
    transition: {
      duration: 1,
      delay: 0.4,
    },
  },
  final3: {
    opacity: 1,
    x: "0",
    transition: {
      duration: 1,
      delay: 0.5,
    },
  },
};

// ---------------------------------REACT FUNTIONAL COMPONENTS
const StyleNav: React.FC = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const auth = useContext(AdminContext).admin.auth;

  function setClose() {
    setOpen(false);
  }

  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Button children="Home" sx={btnSx} onClick={() => navigate("/")} component={motion.button} variants={btnMotion} initial="initial" whileInView="final" />
      <Button children="listing" sx={btnSx} onClick={() => navigate("/Listing")} component={motion.button} variants={btnMotion} initial="initial" whileInView="final1" />
      <Button children="about" sx={btnSx} onClick={() => navigate("/More")} component={motion.button} variants={btnMotion} initial="initial" whileInView="final2" />
      <Button children="Admin" sx={{ ...btnSx, display: "block" }} onClick={() => setOpen(true)} component={motion.button} variants={btnMotion} initial="initial" whileInView="final3" />
      <Modal open={open} onClose={() => setOpen(false)}>
        <>
          {auth && <LogoutCard onClose={setClose} />}
          {!auth && <LogInCard onClose={setClose} />}
        </>
      </Modal>
    </Stack>
  );
};

export default StyleNav;
