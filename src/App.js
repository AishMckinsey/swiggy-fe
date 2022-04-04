import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import AllResturants from "./pages/AllResturants/AllResturants";
import RestMenu from "./pages/RestMenu/RestMenu";
import RestByDish from "./pages/RestByDish/RestByDish";

import { HOME_ROUTE, ALL_RESTURANTS, SEE_BY_DISH } from "./constants/routes";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path={HOME_ROUTE} element={<HomePage />} />
          <Route path={ALL_RESTURANTS} element={<AllResturants />} />
          <Route path={`${ALL_RESTURANTS}:id`} element={<RestMenu />} />
          <Route path={`${SEE_BY_DISH}:dish`} element={<RestByDish />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
