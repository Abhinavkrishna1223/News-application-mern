import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './component/Layout/Layout';
import Category from './pages/Category/Category';
import CategoryList from './pages/CategoryList/CategoryList';
import News from './pages/News/News';
import NewsList from './pages/NewsList/NewsList';
import NoPage from './pages/NoPage/NoPage';
import LogIn from './pages/Login/Login';
import SignUp from './pages/Signup/Signup';
// import AuthLayout from './component/AuthLayout/AuthLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LogIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/*" element={<Layout />}>
          {/* <Route index element={<NewsList />} />
          <Route path="/categories" element={<CategoryList />} />
          <Route path="/create-category" element={<Category />} />
          <Route path="/edit-category" element={<Category />} />
          <Route path="/create-article" element={<News />} />
          <Route path="/edit-article" element={<News />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>
        {/* <Route path="/auth" element={<AuthLayout />}> */}
          
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
