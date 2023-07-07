import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./smallcard.scss";
import { useNavigate } from 'react-router-dom';

const SmallCard = ({article}) => {
  const navigate = useNavigate();
  return (
    <div className="card2" onClick={() => navigate(`/SinglPost/${article._id}`)}>
      <img
        className="card-img-top1"
        src={article?.image ? process.env.REACT_APP_PRE_URL + article.image :"https://images.pexels.com/photos/3944454/pexels-photo-3944454.jpeg?auto=compress&cs=tinysrgb&w=1600"}
        alt="Card"
      />
      <p className="card-text1">
        55Some quickadjbdjhba To address all issues (including breaking
        changes), aiffh aifaj example text.
      </p>
    </div>
  );
};

export default SmallCard;
