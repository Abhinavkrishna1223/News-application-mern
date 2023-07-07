import React from "react";
import "./SidebarCard.scss";
// import Ellipse from "../../../../assets/Ellipse.png";

function SidebarCard({data}) {
  return (
    <div className="SidebarCard">
      <img
        className="SidebarCard-img"
        src={ data?.image ? `${process.env.REACT_APP_PRE_URL}${data.image}` : "https://images.pexels.com/photos/1194410/pexels-photo-1194410.jpeg?auto=compress&cs=tinysrgb&w=1600"}
        alt="Card"
      />
      <div className="SidebarCard-rap">

      <h3 className="SidebarCard-text">
        {data?.title.substring(0,50) || `News for the heading page and article`}
      </h3>
      <div className="Logo side_date_section">
        {/* <img src={Ellipse} alt="" /> */}
        <span>{ data?.createdAt}</span>
      </div>
      </div>
    </div>
  );
}

export default SidebarCard;
