import CallOut from "./Layouts/CallOut";
import GoodHands from "./Layouts/GoodHands";
import PageContent from "./Layouts/PageContent";
import PageFoot from "./Layouts/PageFoot";
import PageHead from "./Layouts/PageHead";
import Quote from "./Layouts/Quote";

function MainPage() {
  return (
    <>
      <PageHead />
      <GoodHands />
      <PageContent />
      <GoodHands reversed={true} />
      <CallOut />
      <Quote />
      <PageFoot />
    </>
  );
}

export default MainPage;
