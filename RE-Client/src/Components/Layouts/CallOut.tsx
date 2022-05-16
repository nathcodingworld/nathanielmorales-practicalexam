import { Paper, Stack, SxProps, Theme } from "@mui/material";
import StyleDescription from "../Surface/StyleDescription";
import StyleDivider from "../Surface/StyleDivider";
import StyleTitle from "../Surface/StyleTitle";
import StyleButton from "../UI/StyleButton";

// ---------------------------------STYLE SECTIONS
const paperSx: SxProps<Theme> = {
  position: "relative",
  height: "675px",
  width: "100%",
  background: "linear-gradient(225.52deg, #271A00 0.45%, rgba(0, 0, 0, 0.982162) 100.47%)",
  margin: "auto",
  borderRadius: "0",
};
const contentSx: SxProps<Theme> = {
  top: "50%",
  left: "50%",
  maxWidth: "1440px",
  transform: "translate(-50%, -50%)",
  width: "max-content",
};

const CallOut: React.FC = () => {
  return (
    <Paper sx={paperSx}>
      <Stack position="absolute" spacing={2} direction="column" alignItems="center" sx={contentSx}>
        <StyleDivider />
        <StyleTitle content="You're in good hands" color="white" />
        <StyleDescription style={{ width: "430px", textAlign: "center", color: "white" }} />
        <StyleButton bg="light" />
      </Stack>
    </Paper>
  );
};

export default CallOut;
