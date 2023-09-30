import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// nav로 이동할 페이지
//import styled from "styled-components";
import MainPage from "./component/page/mainPage";
import Header from "./component/list/mainHead";
import Photoshare from "./component/page/photoShare";
import Receiptshare from "./component/page/ReceiptShare";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="/share/" element={<Photoshare />} />
        <Route path="/receipt/" element={<Receiptshare />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
