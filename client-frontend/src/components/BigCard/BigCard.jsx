import React from "react";
import "./bigcard.scss";
import { useNavigate } from 'react-router-dom';

const BigCard = ({article}) => {
  const navigate = useNavigate();
  return (
    <div className="card1" onClick={() => navigate(`/SinglPost/${article._id}`)}>
      <img
        className="card-img-top"
        src={article?.image ? process.env.REACT_APP_PRE_URL + article.image :"https://images.pexels.com/photos/3944454/pexels-photo-3944454.jpeg?auto=compress&cs=tinysrgb&w=1600"}
        alt="Card"
      />
      <h1 className="card-text">
        {article?.title}
      </h1>
    </div>
  );
};

export default BigCard;
