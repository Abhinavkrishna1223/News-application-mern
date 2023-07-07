import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./SectionSmallCard.scss";

function SectionSmallCard({ data }) {
  return (

    <>
      <div className=" flex lg:flex-row  flex-col w-auto my-[40px] lg:m-0 lg:ml-[5%] lg:mr-[8%]">
        
          <img
            className=" lg:h-[101px] h-auto rounded-[10px] lg:w-[58%] w-full "
            src={data?.image ? process.env.REACT_APP_PRE_URL + data.image : "https://images.pexels.com/photos/57749/pexels-photo-57749.jpeg?auto=compress&cs=tinysrgb&w=1600"}
            alt="Card"
          />
       
        <p className="SectionSmallCardSection-text leading-[1.2rem] mt-[1rem] lg:mt-0">{data.title.substring(0,50) || `News for the heading page and article is isdjfaksdufpo sfj asfiq whufiqweefiqw ef`}</p>
      </div>
    </>

  );
}

export default SectionSmallCard;


