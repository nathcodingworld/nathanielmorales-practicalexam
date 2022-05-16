import PageContent from "./Layouts/PageContent";
import PageFoot from "./Layouts/PageFoot";
import TopBar from "./Layouts/TopBar";

const ListingPage = () => {
  return (
    <>
      <TopBar blank={true} />
      <PageContent />
      <PageFoot />
    </>
  );
};

export default ListingPage;
