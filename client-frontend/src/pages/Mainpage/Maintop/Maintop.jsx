import React, { useEffect, useLayoutEffect, useState } from 'react'
import loremTxt from '../../../assets/loremTxt.png';
// import notes from '../../../assets/notes.png';
// import earth from '../../../assets/earth.png';
import vegies from '../../../assets/vegies.png';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';





function Maintop() {
  const navigate = useNavigate();

  const { latestNews, categories, news } = useSelector((state) => {
    return {
      latestNews: state.newsArticlesReducer.homeNews.data.latestNews,
      dataSuccess: state.newsArticlesReducer.homeNews.success,
      categories: state.newsArticlesReducer.homeNews.data.categories,
      news: state.newsArticlesReducer.homeNews.data.news,
    }
  });

  const removeHtmlTags=(text) => {
    return text.replace(/<\/?[^>]+(>|$)/g, "");
  }

  const jsxRendering = (key) => {
    const data = news[key];
    // switch (id) {
    //   case 0:
    console.log(process.env.REACT_APP_PRE_URL + data[0].image)
    return (
      <>
        <div className=" mb-[32px] tnr not-italic font-bold text-6xl ">
          {key}
        </div>
        <div className="parent flex flex-col my-[30px] justify-between" onClick={() => navigate(`/SinglPost/${data[0]._id}`)}>
          <img src={data?.length && data[0].image ? process.env.REACT_APP_PRE_URL + data[0].image : "https://images.pexels.com/photos/3944454/pexels-photo-3944454.jpeg?auto=compress&cs=tinysrgb&w=1600"} alt="" />
          <div className="content-txt flex flex-col">

            <div className="smtxt my-[2rem] text-[0.8rem] leading-[21px] not-italic  font-medium">
              {data[0].createdAt ? data[0].createdAt : "Anna-Mercury - 19-06-2023"}
            </div>
            <div className="big-ipsum font-bold not-italic mb-[24px] roman text-4xl leading-[50px]">
              {data?.length ? (`${data[0].title.substr(0, 80)}...`) : (<h1>Loading...</h1>)}
            </div>
            <div className="sm-ipsum text-gray-500 text-2xl poppins">
              {data?.length ? (`${removeHtmlTags(data[0].detail).substr(0, 250)}...`) : (<h1>Loading...</h1>)}
            </div>
          </div>
        </div>
        <div className="flip flex xl:flex-row  mt-[80px] flex-col">
          {data.length > 1 ? data.slice(1,4).map((val, ind) => {
            return (
              <div className="inner flex flex-col w-full xl:w-[40%] md:mx-[12px] mx-[0]" key={ind}  onClick={() => navigate(`/SinglPost/${val[0]._id}`)}>
                <img className=' w-full  xl:h-[200px]' src={val.image ? process.env.REACT_APP_PRE_URL + val.image : vegies} alt="" />
                <div className="smtxt mt-[2rem] mb-[24px] text-[0.8rem] leading-[21px] not-italic  font-medium">
                  {val.createdAt || `Anna-Mercury - 8 hours ago`}
                </div>
                <div className="big-ipsum font-bold not-italic mb-[4rem] roman text-[1.85rem] leading-[40px]">
                {val.title ? (`${val.title.substr(0, 50)}...`) : (<h1>Loading...</h1>)}
                </div>
              </div>
            )
          }) : null}
        </div>
        <div className="btn w-full flex justify-center rounded-[10px]">
          <button className="btnclr text-white font-bold py-2 px-4 rounded-full" onClick={() => navigate(`/Section/${data[0]._id}`)}>
            View More
          </button>
        </div>
      </>
    )

  }

  



  console.log(news);

  return (
    <>

      <div className="bg-img flex flex-col justify-center items-center ">
        <div className="text-white font-sans not-italic md:text-[1.25rem] lg:text-[1.65rem] xl:text-[2.2rem] mt-[13%] text-[1.3rem]">
          Chennai Super Kings becomes most popular sports team in Asia;
          <br />
          Ronaldo's Al Nassr &amp; RCB takes second &amp; third spot respectively
        </div>
        <div className="w-[60%] md:w-[56%]  xl:w-full flex justify-center absolute mt-[87%] sm:mt-[60%]  ">
          <img className src={loremTxt} alt="" />
        </div>
      </div>
      {/* this is underline */}
      <div className="line mt-[40%]" />
      <div className=" md:mt-[60px] md:mb-[32px] tnr not-italic font-bold text-6xl mt-[30px] mb-[15px] ">
        Top Headlines
      </div>

      <div className="parent flex xl:flex-row  my-[30px] xl:justify-between flex-col">
        <img className=" xl:w-[596px] w-full" src={latestNews?.length && latestNews[0].image ? process.env.REACT_APP_PRE_URL + latestNews[0].image : "https://images.pexels.com/photos/3944454/pexels-photo-3944454.jpeg?auto=compress&cs=tinysrgb&w=1600"} alt="" />
        <div className="content-txt flex flex-col  xl:ml-[4%] ml-0">

          {categories?.length ?
            (
              <div className="smtxt my-[1.2rem] text-[0.8rem] leading-[21px] not-italic  font-medium">
                {categories[0].createdAt}
              </div>

            )
            : (<h1>Loading...</h1>)}

          <div className="big-ipsum font-bold not-italic mb-[20px] roman text-4xl leading-[50px]">
            {latestNews?.length ? (`${latestNews[0].title.substr(0, 80)}...`) : (<h1>Loading...</h1>)}
          </div>
          <div className="sm-ipsum text-gray-500 text-2xl poppins">
            {latestNews?.length ? (`${removeHtmlTags(latestNews[0].detail).substr(0, 250)}...`) : (<h1>Loading...</h1>)}
          </div>
        </div>
      </div>
      <div className="line2 " />
      <div className="4th flex flex-col">
        {news && Object.keys(news)?.length && jsxRendering(Object.keys(news)[0])}
        
      </div>
      <div className="line2 " />

    </>
  )
}


export default Maintop