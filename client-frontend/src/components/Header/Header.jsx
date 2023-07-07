import React, { useLayoutEffect, useEffect, useState } from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import meta from "../../assets/meta.png";
// import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { getHomeNews } from "../../store/news";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { IoMdMenu } from 'react-icons/io';
import { useNavigate  } from 'react-router-dom';

function Header() {
  const dispatch = useDispatch();
  const navigate  = useNavigate();

  const { dataSuccess, categories } = useSelector((state) => {
    return {
      dataSuccess: state.newsArticlesReducer.homeNews.success,
      categories: state.newsArticlesReducer.homeNews.data,
    }
  });

  const [valCategory, setvalCategory] = useState('');
  const [showMenu, setShowMenu] = useState(false);

  useLayoutEffect(() => {
    dispatch(getHomeNews());
  }, []);

  useEffect(() => {
    if (dataSuccess) {
      const cat = [];
      if (categories.news) {
        for (let x in categories.news) {
          if (categories.news[x].length) cat.push(x);
        }
      }
      setvalCategory(cat);
    }
  }, [dataSuccess, categories]);


  return (
    <>

      <Navbar bg="dark" data-bs-theme="dark">
        <Container style={{backgroundColor: '#212529'}}>
          <Navbar.Brand href="/"><img width="50px" src={meta} alt="" /></Navbar.Brand>
          <Nav className="me-auto dest_view">
            <Nav.Link onClick={() => navigate(`/`)} to={`/`}>Home </Nav.Link>
            {valCategory.length ? valCategory.map((data, index) => {
              return <Nav.Link key={index} onClick={() => navigate(`/Section/${data}`)} to={`/`}>{data} </Nav.Link>
            }) : <h3>Loading...</h3>}
          </Nav>
          <Form className="dest_view">
            <Form.Control

              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button className="search_btn" variant="outline-success">Search</Button>
          </Form>
          <div className="mob_icon" onClick={() => setShowMenu(!showMenu)} >
            <IoMdMenu style={{color: "#fff"}} />
          </div>
          {showMenu ? <div className="mob_view">
            <Nav >
            {valCategory.length ? valCategory.map((data, index) => {
              return <Nav.Link key={index} to={"/"}>{data} </Nav.Link>
            }) : <h3>Loading...</h3>}
            </Nav>
            <Form>
              <Form.Control

                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button className="search_btn" variant="outline-success">Search</Button>
            </Form>
          </div>: null}

        </Container>
      </Navbar >
    </>
  );
}

export default Header;
