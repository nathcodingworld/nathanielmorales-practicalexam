import PageDetailContent from "./Layouts/PageContentDetail";
import PageFoot from "./Layouts/PageFoot";
import TopBar from "./Layouts/TopBar";

const DetailPage: React.FC = (props) => {
  return (
    <>
      <TopBar />
      <PageDetailContent />
      <PageFoot />
    </>
  );
};

export default DetailPage;
