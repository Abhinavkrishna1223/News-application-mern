
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./SectionBigCard.scss";
import SectionSmallCard from "../SectionSmallCard/SectionSmallCard";
import { useNavigate } from 'react-router-dom';

function SectionBigCard({ data }) {
  const navigate = useNavigate();
  return (

    <div className="flex flex-col items-center lg:w-[32%] mb-[25px] lg:mb-0 " onClick={() => navigate(`/SinglPost/${data._id}`)}>
      
        <img
          className="SectionBigCard-img lg:h-[240px]"
          src={data?.image ? process.env.REACT_APP_PRE_URL + data.image : "https://images.pexels.com/photos/3944454/pexels-photo-3944454.jpeg?auto=compress&cs=tinysrgb&w=1600"}
          alt="Card"
        />
     
      <div className=" lg:mt-[10px] text-[1.2rem] font-bold  text-left  " style={{ height: "74px" }}>
        {/* <span> */}
       {`${data?.title.substring(0, 65)}...` || `PM Modi to address US Congress today hjsdfkasjdhkf`}
        {/* </span> */}
      </div>

    </div>
  );
}

export default SectionBigCard;