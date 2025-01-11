import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import SignIn from "./views/SignIn";
import SignUp from "./views/SignUp";
import Home from "./views/Home";
import Profile from "./views/Profile";
import Announcement_Page from "./views/Announcement_Page";
import Announcement_Content from "./views/Announcement_Content";
import Announcement_Disater from "./views/Announcement_Disater";
import History from "./views/History";
import About from "./views/About";
const AppRoute = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/sign_up" />} />
    <Route path="/sign_in" element={<SignIn />} />
    <Route path="/sign_up" element={<SignUp />} />

    <Route path="/home" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/history" element={<History />} />
    <Route path="/announcement_page" element={<Announcement_Page />} />
    <Route path="/announcement_content" element={<Announcement_Content />} />
    <Route path="/announcement_disaster" element={<Announcement_Disater />} />
    <Route path="*" />
  </Routes>
);

export default AppRoute;
