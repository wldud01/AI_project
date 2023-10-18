import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// nav로 이동할 페이지
//import styled from "styled-components";
import MainPage from "./component/page/mainPage";

import Photoshare from "./component/page/photoShare";
import Receiptshare from "./component/page/ReceiptShare";
import WritePhotoPost from "./component/page/writePhotoPostPage";
import LoginPage from "./component/page/loginPage";
import VideoPage from "./component/page/videoPage";
import NamingPage from "./component/page/namingPage";
import MyPage from "./component/page/myPage";
import RecommandInput from "./component/page/RecommandInputPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="/home" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="share/" element={<Photoshare />} />
        <Route path=":path/setName/" element={<NamingPage />} />
        <Route path="receipt/" element={<Receiptshare />} />
        <Route path="recommandInput/" element={<RecommandInput />} />
        <Route path="mypage/" element={<MyPage />} />
        <Route path="/youtube/" element={<VideoPage />} />
        <Route path=":path/write%post" element={<WritePhotoPost />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
