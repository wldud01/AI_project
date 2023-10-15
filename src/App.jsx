import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// nav로 이동할 페이지
//import styled from "styled-components";
import MainPage from "./component/page/mainPage";

import Photoshare from "./component/page/photoShare";
import Receiptshare from "./component/page/ReceiptShare";
import PickInput from "./component/page/writePhotoPostPage";
import LoginPage from "./component/page/loginPage";
import VideoPage from "./component/page/videoPage";
import NamingPage from "./component/page/namingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="/main/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="share/" element={<Photoshare />} />
        <Route path=":path/setName/" element={<NamingPage />} />
        <Route path="receipt/" element={<Receiptshare />} />
        <Route path="/youtube/" element={<VideoPage />} />
        <Route path=":path/input/" element={<PickInput />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
