import React from 'react';
import { Routes, Route } from "react-router-dom";
import Navbar from '../Navbar/Navbar';
import Mainpage from '../../pages/Mainpage/Mainpage';
import FooterMain from '../FooterMain/FooterMain';
import SinglePost from '../../pages/SinglePost/SinglePost';
import Section from '../../pages/Section/Section';
import SignUp from '../SignUp/SignUp'
import LoginPage from '../LogIn/LoginPage';

function Layout() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Mainpage />} />
        <Route path="/Section/:id" element={<Section />} />
        <Route path="/SinglPost/:id" element={<SinglePost/>} />
        <Route path="/signUp" element={<SignUp/>} />
        <Route path="/login" element={<LoginPage/>} />
      </Routes>
      <FooterMain />
    

    </>
  )
}

export default Layout