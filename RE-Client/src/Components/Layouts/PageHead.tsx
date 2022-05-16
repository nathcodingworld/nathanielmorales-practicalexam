import { Box, Stack, SxProps, Theme } from "@mui/material";

import TopNav from "../Contents/TopNav";
import BodyContent from "../Contents/BodyContent";
import BotNav from "../Contents/BotNav";

// -------------------------Styles Section
const HeadSx: SxProps<Theme> = {
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.84)),url(${process.env.PUBLIC_URL}/home.png)`,
  backgroundRepeat: "no-repeat",
  backgroundSize: { lg: "100%" },
  backgroundPosition: "center",
  aspectRatio: "1440/850",
  height: { lg: "", xs: "700px" },
  width: "100%",
};
const HeadInSx: SxProps<Theme> = {
  maxWidth: "1070px",
  margin: "auto",
  height: "100%",
};

// -------------------------React Funtional Component
const PageHead: React.FC = () => {
  return (
    <Box sx={HeadSx}>
      <Stack direction="column" justifyContent="space-between" sx={HeadInSx}>
        <TopNav />
        <BodyContent />
        <BotNav />
      </Stack>
    </Box>
  );
};

export default PageHead;
