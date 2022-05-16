import { Box, Button, Stack, Typography, SxProps, Theme } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// ---------------------------------STYLE SECTIONS
const btnSX: SxProps<Theme> = {
  fontSize: "15px",
  lineHeight: "18px",
  letterSpacing: "-0.377px",
  fontFamily: "'DM Sans', sans-serif",
  color: "#979797",
  width: "140px",
};

const initial = {
  opacity: 0,
  x: "20px",
};
const final = {
  opacity: 1,
  x: "0",
};

const StyleColNav: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Stack direction="row" width="100%" maxWidth={700} justifyContent="space-between" spacing={1}>
      <Box width="140px">
        <Typography children="Service" sx={{ ...btnSX, fontWeight: 700, color: "#FFAC12" }} />
        {[0.2, 0.4, 0.6, 0.8].map((delay) => {
          return (
            <Button
              key={delay}
              children="Work with us"
              sx={btnSX}
              onClick={() => navigate("/More")}
              component={motion.button}
              initial={initial}
              whileInView={final}
              transition={{ duration: 0.5, delay: delay }}
            />
          );
        })}
      </Box>

      <Box width="140px">
        <Typography children="About" sx={{ ...btnSX, fontWeight: 700, color: "#FFAC12" }} />
        {[0.2, 0.4, 0.6].map((delay) => {
          return (
            <Button
              key={delay}
              children="Work with us"
              sx={btnSX}
              onClick={() => navigate("/More")}
              component={motion.button}
              initial={initial}
              whileInView={final}
              transition={{ duration: 0.5, delay: delay }}
            />
          );
        })}
      </Box>

      <Box width="140px">
        <Typography children="Help" sx={{ ...btnSX, fontWeight: 700, color: "#FFAC12" }} />
        {[0.2, 0.4].map((delay) => {
          return (
            <Button
              key={delay}
              children="Work with us"
              sx={btnSX}
              onClick={() => navigate("/More")}
              component={motion.button}
              initial={initial}
              whileInView={final}
              transition={{ duration: 0.5, delay: delay }}
            />
          );
        })}
      </Box>
    </Stack>
  );
};

export default StyleColNav;
