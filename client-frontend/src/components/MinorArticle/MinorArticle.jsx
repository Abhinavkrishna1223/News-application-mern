import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./MinorArticle.scss";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { useNavigate } from 'react-router-dom';

const MinorArticle = ({ title, article }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container">
        <div className="news_blog">
          <h1 style={{color:'#000'}} className="text-left  text-danger ">{title || 'NEWS'}</h1>
          <div className="row-items">


            <Row>
            {article?.length ? article.map((arti, index) => {
              return (
              <Col xs={4}>
              <div className="card1 m-2" key={index}>
                  <img
                    src={arti?.image ? process.env.REACT_APP_PRE_URL + arti.image : "https://images.pexels.com/photos/3944454/pexels-photo-3944454.jpeg?auto=compress&cs=tinysrgb&w=1600"}
                    className="card-img-top"
                    alt="..."
                    onClick={() => navigate(`/SinglPost/${arti._id}`)}
                  />
                  <div className="card-body">
                    <h5 onClick={() => navigate(`/SinglPost/${arti._id}`)} style={{fontWeight:"700", margin:"12px 0"}} className="card-title"> {arti?.title.substring(0,65)}...</h5>
                    <p className="">{arti?.detail.substring(0, 150)}...</p>
                    <a href={`/SinglPost/${arti._id}`} className="btn btn-dark">
                      {"Read Full Article"}
                    </a>
                  </div>
                </div>
              </Col>
                )
              }) : null}
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};

export default MinorArticle;
