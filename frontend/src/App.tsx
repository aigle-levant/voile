// styles
import "./index.css";
// pages
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import History from "./pages/History.tsx";
import ContactUs from "./pages/ContactUs.tsx";
import NotFound from "./pages/NotFound.tsx";
// layouts
import Default from "./layout/Default.tsx";
import LoadingScreen from "./LoadingScreen.tsx";
// libraries
import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";

export default function App() {
  const [loadingScreen, setLoadingScreen] = useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setLoadingScreen(!loadingScreen);
    }, 2000);
  }, []);
  if (loadingScreen) {
    return <LoadingScreen />;
  }
  return (
    <>
      <Routes>
        <Route path="/" element={<Default />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="history" element={<History />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}
