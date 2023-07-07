import React, { useEffect, useLayoutEffect, useState } from 'react'
import Maintop from './Maintop/Maintop'
import Mainbottom from './Mainbottom/Mainbottom'
import { useDispatch, useSelector } from 'react-redux';
import { getHomeNews } from '../../store/news';

function Mainpage() {
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
      // console.log(news);
      setSectionNews(news);
    }
  },[homeNews]);



  return (
    <>
        <div className=" w-full flex  flex-col justify-center md:px-[132px] ">
       <Maintop/>
       <Mainbottom/>
       </div>
    </>
  )
}

export default Mainpage