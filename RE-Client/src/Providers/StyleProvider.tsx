import { createTheme, ThemeProvider } from "@mui/material";
import { ReactNode } from "react";

interface ProviderType {
  children: ReactNode;
}

const StyleProvider: React.FC<ProviderType> = (props) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#FFAC12",
      },
    },
    shape: {
      borderRadius: 25,
    },
    typography: {
      fontFamily: "'DM Sans', sans-serif",
      h1: {
        fontFamily: "'DM Sans', sans-serif",
        fontWeight: 700,
        fontSize: "80px",
        lineHeight: "80px",
        letterSpacing: "-2.01026px",
      },
      h2: {
        fontFamily: "'DM Sans', sans-serif",
        fontWeight: 700,
        fontSize: "50px",
        lineHeight: "59px",
        letterSpacing: "-1.25641px",
      },
      h3: {
        fontFamily: "'DM Sans', sans-serif",
        fontWeight: 700,
        fontSize: "42px",
        lineHeight: "49px",
        letterSpacing: "-1.05538px",
      },
      h4: {
        fontFamily: "'DM Sans', sans-serif",
        fontWeight: 700,
        fontSize: "24px",
        lineHeight: "28px",
        letterSpacing: "-0.61",
      },
      h5: {
        fontFamily: "'DM Sans', sans-serif",
        fontWeight: 400,
        fontSize: "20px",
        lineHeight: "28px",
        letterSpacing: "-0.502564px",
        mixBlendMode: "normal",
        opacity: 0.6,
      },
      h6: {
        fontFamily: "'DM Sans', sans-serif",
        fontWeight: 400,
        fontSize: "15px",
        lineHeight: "18px",
        letterSpacing: "-0.376923px",
      },
      subtitle1: {
        fontFamily: "'DM Sans', sans-serif",
        fontWeight: 700,
        fontSize: "20px",
        lineHeight: "23px",
        letterSpacing: "-0.502564px",
      },
      caption: {
        fontFamily: "'DM Sans', sans-serif",
        fontWeight: 400,
        fontSize: "15px",
        lineHeight: "22px",
        letterSpacing: "-0.376923px",
        mixBlendMode: "normal",
        opacity: 0.6,
      },
    },
  });

  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export default StyleProvider;
