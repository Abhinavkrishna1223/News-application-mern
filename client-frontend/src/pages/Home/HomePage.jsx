import React, { useEffect, useState, useLayoutEffect } from "react";
import "./homepage.scss";
import MajorArticle from "../../components/MajorArticle/MajorArticle";
import MinorArticle from "../../components/MinorArticle/MinorArticle";
import { useDispatch, useSelector } from "react-redux";
import { getHomeNews } from "../../store/news";
import SliderSection from "../../components/SliderSection/SliderSection";
//import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const dispatch = useDispatch();

  const { homeNews } = useSelector((state) => {
    return {
      homeNews: state.newsArticlesReducer.homeNews
    }
  });

  const [sectionNews, setSectionNews] = useState('');

  useLayoutEffect(() => {
    dispatch(getHomeNews());
  },[]);

  useEffect(() => {
    if(homeNews.success){
      console.log(homeNews.data);
      const news = [];
      if(homeNews.data.news){
        for(let x in homeNews.data.news){
          if(homeNews.data.news[x].length) news[x] = homeNews.data.news[x];
        }
      }
      console.log(news);
      setSectionNews(news);
    }
  },[homeNews]);


  return (
    <>
    <SliderSection/>
    <div className="mainContent">
      <MajorArticle data={homeNews.data.latestNews} />
      {Object.keys(sectionNews)?.length && Object.keys(sectionNews).map((data,index) => {
        return <MinorArticle key={index} title={data} article={sectionNews[data]} />
      }) }
      {/* <MinorArticle /> */}
    </div>
    </>
  );
};

export default HomePage;
