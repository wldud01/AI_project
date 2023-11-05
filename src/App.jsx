import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// nav로 이동할 페이지
//import styled from "styled-components";
import MainPage from "./component/page/mainPage";

import Photoshare from "./component/page/photoShare";
import Receiptshare from "./component/page/ReceiptShare";
import WritePhotoPost from "./component/page/writePhotoPostPage";
import LoginPage from "./component/page/loginPage";
import NamingPage from "./component/page/namingPage";
import MyPage from "./component/page/myPage";
import RecommandInput from "./component/page/RecommandInputPage";
import FoodInfo from "./component/page/foodInfo";
import RecommendResult from "./component/page/RecommendResult";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="/home" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/Kcal" element={<Photoshare />} />
        <Route path="/result" element={<RecommendResult />} />
        <Route path="foodInfo/:path" element={<FoodInfo />} />
        <Route path=":path/setName/" element={<NamingPage />} />
        <Route path="photo/" element={<Receiptshare />} />

        <Route path="recommandInput/" element={<RecommandInput />} />
        <Route path="mypage/" element={<MyPage />} />
        <Route path=":path/writepost" element={<WritePhotoPost />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
