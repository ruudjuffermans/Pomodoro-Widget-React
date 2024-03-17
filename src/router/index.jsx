import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

// import Layout from "../layout";

import ButtonsPage from "../pages/buttons";
import WebAppLayout from "../layouts/webapp";
import WebsiteLayout from "../layouts/website";
import InputsPage from "../pages/inputs";
import TypographyPage from "../pages/typography";
import LandingPage from "../pages/landing";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<WebAppLayout />}>
          <Route path={"/buttons"} element={<ButtonsPage />} />
          <Route path={"/inputs"} element={<InputsPage />} />
          <Route path={"/typography"} element={<TypographyPage />} />
        </Route>
        <Route element={<WebsiteLayout />}>
          <Route path={"/"} element={<LandingPage />} />
        </Route>
        <Route path={"*"} element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;