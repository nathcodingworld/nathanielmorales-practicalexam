import { Divider } from "@mui/material";
import GoodHands from "./Layouts/GoodHands";
import PageFoot from "./Layouts/PageFoot";
import TopBar from "./Layouts/TopBar";

const LearnMorePage = () => {
  return (
    <>
      <TopBar blank={true} />
      <GoodHands />
      <Divider sx={{ m: "100px" }} />
      <GoodHands reversed={true} />
      <GoodHands />
      <Divider sx={{ m: "100px" }} />
      <PageFoot />
    </>
  );
};

export default LearnMorePage;
