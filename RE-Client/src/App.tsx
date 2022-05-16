import DetailPage from "./Components/DetailPage";
import MainPage from "./Components/MainPage";
import { Route, Routes } from "react-router-dom";
import ListingPage from "./Components/ListingPage";
import LearnMorePage from "./Components/LearnMorePage";
import cookie from "react-cookies";
import { useContext, useEffect } from "react";
import { AdminContext } from "./Providers/StateProvider";

const admin = cookie.load("admin");

function App() {
  const login = useContext(AdminContext).login;
  useEffect(() => {
    if (admin) login(admin);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/Detail" element={<DetailPage />} />
      <Route path="/Listing" element={<ListingPage />} />
      <Route path="/More" element={<LearnMorePage />} />
    </Routes>
  );
}

export default App;
