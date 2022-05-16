import { Stack, SxProps, Theme } from "@mui/material";
import StyleButtonTwo from "../UI/styleButtonTwo";
import StyleLogo from "../UI/StyleLogo";
import StyleNav from "../UI/StyleNav";

// ---------------------------------STYLE SECTIONS
const navSx: SxProps<Theme> = {
  height: "50px",
  marginTop: "30px",
  width: "100%",
  padding: "0 40px",
};

const TopNav = () => {
  return (
    <Stack direction="row" justifyContent="space-between" sx={navSx}>
      <StyleLogo />
      <Stack direction="row" alignItems="center" spacing={5}>
        <StyleNav />
        <StyleButtonTwo />
      </Stack>
    </Stack>
  );
};

export default TopNav;
