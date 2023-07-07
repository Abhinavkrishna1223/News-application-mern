import React from 'react'
import "./sidebar.scss";
import SidebarCard from "../Sidebar/SidebarCard/SidebarCard";

function Sidebar({news, tag}) {
  return (
    
    <div class="Sidebar-container">
      <div class="Heading">
      </div>
      <h2>{tag || `Heading` } </h2>
      {news.length ? news.map((data,index) => {
        return <SidebarCard key={index} data={data} />
      }) : null}
    </div>
  )
}

export default Sidebar;
