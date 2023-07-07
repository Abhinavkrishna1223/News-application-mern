import { Outlet, Link, Route, Routes, useNavigate } from "react-router-dom";
import React, {useLayoutEffect} from "react";
import './Layout.scss';
import Navbar from "./Navbar/Navbar";

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Sidebar from "./Sidebar/Sidebar";
import NewsList from "../../pages/NewsList/NewsList";
import CategoryList from "../../pages/CategoryList/CategoryList";
import Category from "../../pages/Category/Category";
import News from "../../pages/News/News";
import NoPage from "../../pages/NoPage/NoPage";
import Cookies from "../../utils/Cookies";
import TextEditor from "../ImageHandler/ImageHandler";

const Layout = () => {
  const navigate = useNavigate();
  const drawerWidth = 240;
  useLayoutEffect(() => {
    if(!Cookies.alive('token')) {
      navigate('/login');
      window.location.reload();
    } 
    // else console.log(Cookies.get('token', 'string'));
  },[]);
  return (
    <React.Fragment>
       <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Navbar/>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', background :"#000", color:"#fff" },
          
        }}
      >
        <Toolbar  sx={{background:"#000"}} />
        <Sidebar />
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
          <Routes> 
            <Route index element={<NewsList />} />
            {/* <Route index element={<TextEditor />} /> */}
            <Route path="/categories" element={<CategoryList />} />
            <Route path="/create-category" element={<Category />} />
            <Route path="/edit-category/:id" element={<Category />} />
            <Route path="/create-article" element={<News />} />
            <Route path="/edit-article/:id" element={<News />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
      </Box>
    </Box>
    </React.Fragment>

  );
};

export default Layout;
