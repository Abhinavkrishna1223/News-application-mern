import React from 'react'
import coin from '../../../assets/coins.png'
import stats from '../../../assets/stats.png'
//import data from '../../../assets/data.png'
import shopping from '../../../assets/shopping.png'
import runing from '../../../assets/runing.png'
import marathon from '../../../assets/marathon.png'
import food from '../../../assets/food.png'
import fnf from '../../../assets/fastfurious.png'
import singer from '../../../assets/singer.png'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Mainbottom() {

  const navigate = useNavigate();

  const { latestNews, categories, news } = useSelector((state) => {
    return {
      latestNews: state.newsArticlesReducer.homeNews.data.latestNews,
      dataSuccess: state.newsArticlesReducer.homeNews.success,
      categories: state.newsArticlesReducer.homeNews.data.categories,
      news: state.newsArticlesReducer.homeNews.data.news,
    }
  });

  const jsxRendering = (key, id) => {
    const data = news[key];
    console.log(id);

    switch (id) {
      case 0:
        return (
          <React.Fragment>
            <div className="4th">
              <div className=" mb-[32px] tnr not-italic font-bold text-6xl ">
                {key}
              </div>
              <div className="par2 flex xl:flex-row flex-col justify-between">
                <div className="coin"  onClick={() => navigate(`/SinglPost/${data[0]._id}`)}>
                  <img className="w-[100%] xl:w-[960px] xl:h-[404px] rounded-[20px]" src={data?.length && data[0].image ?  process.env.REACT_APP_PRE_URL + data[0].image :coin} alt="" />
                  <div className="smtxt my-[2rem] text-[0.8rem] leading-[21px] not-italic  font-medium">
                    {data[0]?.createdAt || `Anna-Mercury - 8 hours ago`}
                  </div>
                  <div className="big-ipsum   font-bold not-italic roman text-[2rem] leading-[40px]">
                    {data[0].title}
                   
                  </div>
                </div>
                <div className="double-img flex flex-col xl:mt-[0] mt-[32px] xl:ml-[80px] "  onClick={() => navigate(`/SinglPost/${data[1]._id}`)}>
                  <div className="flex flex-col justify-evenly">
                    <img className="w-full  xl:w-[536px] xl:h-[196px]  rounded-[20px]"  src={data?.length && data[1].image ?  process.env.REACT_APP_PRE_URL + data[1].image :stats} alt="" />
                    <img className="mt-3 w-full xl:w-[536px] xl:h-[196px]  rounded-[20px]" src={data?.length && data[2].image ?  process.env.REACT_APP_PRE_URL + data[2].image :stats} alt="" />
                  </div>
                  <div className="smtxt my-[2rem] text-[0.8rem] leading-[21px] not-italic  font-medium">
                  {data[1]?.createdAt || `Anna-Mercury - 8 hours ago`}
                  </div>
                  <div className="big-ipsum font-bold not-italic roman text-[2rem] leading-[40px]">
                  {data[1].title ?  (`${data[1].title.substr(0, 65)}...`) : (<h1>Loading...</h1>)}
                  </div>
                </div>
              </div>
              <div className="btn w-full flex justify-center rounded-[10px] mt-[60px]">
                <button className="btnclr text-white font-bold  py-2 px-4 rounded-full" onClick={() => navigate(`/Section/${key}`)}>
                  View More
                </button>
              </div>
            </div>
            <div className="line2 " />
          </React.Fragment>
        );

      case 1:
        return (
          <React.Fragment>
            <div className="5th">
              <div className=" mb-[32px] tnr not-italic font-bold text-6xl ">
                {key}
              </div>
              <div className="parnt-5th flex xl:flex-row flex-col justify-between"  onClick={() => navigate(`/SinglPost/${data[0]._id}`)}>
                <div className=" flex flex-col  xl:mr-[250px]">
                  <div className="smtxt my-[2rem] text-[0.8rem] leading-[21px] not-italic  font-medium">
                    { data[0].createdAt || `Anna Mercury - 5 hours ago`}
                  </div>
                  <div className="big font-bold  leading-[40px]  text-[2rem]">
                  {data[0].title}
                   
                  </div>
                </div>
                <img className="mt-[50px] xl:mt-[0] xl:w-[514px]" src={data[0].image ? process.env.REACT_APP_PRE_URL + data[0].image : shopping} alt="" />
              </div>
              <div className="flex  xl:flex-row flex-col mt-20">
                <div className="inner w-full xl:w-[40%] flex flex-col"  onClick={() => navigate(`/SinglPost/${data[0]._id}`)}>
                  <img className=' rounded-[20px] xl:h-[259px]   w-full ' src={data[0].image ? process.env.REACT_APP_PRE_URL + data[0].image : runing} alt="" />
                  <div className="smtxt my-[2rem] text-[0.8rem] leading-[21px] not-italic  font-medium">
                  { data[0].createdAt || `Anna Mercury - 5 hours ago`}
                  </div>
                  <div className="big font-bold  259pxroman leading-[40px]  text-[1.74rem]">
                  { data[0].title}
                   
                  </div>
                </div>
                <div className="inner w-full xl:w-[40%] flex flex-col xl:ml-[121px] xl:mt-[0px] mt-[20px]"  onClick={() => navigate(`/SinglPost/${data[1]._id}`)}>
                  <img className=' rounded-[20px] xl:h-[259px]  w-full' src={data[1].image ? process.env.REACT_APP_PRE_URL + data[1].image : marathon} alt="" />
                  <div className="smtxt my-[2rem] text-[0.8rem] leading-[21px] not-italic  font-medium">
                  { data[1].createdAt || `Anna Mercury - 5 hours ago`}
                  </div>
                  <div className="big font-bold roman leading-[40px]  text-[1.74rem]">
                  { data[1].title}
                   
                  </div>
                </div>
                <div className="inner w-full xl:w-[40%] flex flex-col xl:ml-[121px]  xl:mt-[0px] mt-[20px]"  onClick={() => navigate(`/SinglPost/${data[2]._id}`)}>
                  <img className='xl:h-[259px]  w-full' src={data[2].image ? process.env.REACT_APP_PRE_URL + data[2].image : food} alt="" />
                  <div className="smtxt my-[2rem] text-[0.8rem] leading-[21px] not-italic  font-medium">
                  { data[2].createdAt || `Anna Mercury - 5 hours ago`}
                  </div>
                  <div className="big font-bold roman leading-[40px]  text-[1.74rem]">
                  { data[2].title}
                   
                  </div>
                </div>
              </div>
              <div className="btn w-full flex justify-center rounded-[10px] mt-[60px]">
                <button className="btnclr text-white font-bold py-2 px-4 rounded-full" onClick={() => navigate(`/Section/${key}`)}>
                  View More
                </button>
              </div>
            </div>
            <div className="line2 " />
          </React.Fragment>
        );

      case 2:
        return (
          <React.Fragment>
            <div className="6th flex flex-col">
              <div className="mb-[32px] tnr not-italic font-bold md:text-6xl text-4xl">
                {key || `Entertainment`}
              </div>
              <div className="flex xl:flex-row flex-col justify-between"  onClick={() => navigate(`/SinglPost/${data[0]._id}`)}>
                <img className='xl:w-[514px]' src={data[0].image ? process.env.REACT_APP_PRE_URL + data[0].image : fnf} alt="" />
                <div className="flex flex-col xl:ml-[102px]">
                  <div className="smtxt my-[2rem] text-[0.8rem] leading-[21px] not-italic  font-medium">
                  {data[0]?.createdAt || `Anna-Mercury - 8 hours ago`}
                  </div>
                  <div className="big font-bold leading-[40px] roman  text-[2rem]">
                    {data[0].title}
                   
                  </div>
                </div>
              </div>
              <div className="flex xl:flex-row flex-col justify-between mt-16"  onClick={() => navigate(`/SinglPost/${data[1]._id}`)}> 
                <img className='xl:w-[370px]' src={data[1].image ? process.env.REACT_APP_PRE_URL + data[1].image : singer} alt="" />
                <div className="flex flex-col xl:ml-[70px] ">
                  <div className="smtxt my-[2rem] text-[0.8rem] leading-[21px] not-italic  font-medium">
                  {data[1]?.createdAt || `Anna-Mercury - 8 hours ago`}
                  </div>
                  <div className="big font-bold leading-[40px] roman text-[2rem]">
                    {data[1].title}
                   
                  </div>
                </div>
              </div>
              <div className="btn w-full flex justify-center rounded-[10px] mt-[60px]">
                <button className="btnclr text-white font-bold py-2 px-4 rounded-full" onClick={() => navigate(`/Section/${key}`)}>
                  View More
                </button>
              </div>
            </div>
            <div className="line2 " />
          </React.Fragment>
        );

      case 3:
        return (
          <React.Fragment>

            <div className="7th flex flex-col">
              <div className=" mb-[32px] tnr not-italic font-bold text-6xl ">
                {key || `Shopping`}
              </div>
              <div className=" flex xl:flex-row flex-col justify-between">
                <div className=" flex flex-col  xl:mr-[250px] "  onClick={() => navigate(`/SinglPost/${data[0]._id}`)}>
                  <div className="smtxt my-[2rem] text-[0.8rem] leading-[21px] not-italic  font-medium">
                  {data[0]?.createdAt || `Anna-Mercury - 8 hours ago`}
                  </div>
                  <div className="big font-bold  leading-[40px]  text-[2rem]">
                    {data[0].title}
                   
                  </div>
                </div>
                <img className="mt-[50px] xl:mt-[0] xl:w-[514px]" src={data[1].image ? process.env.REACT_APP_PRE_URL + data[1].image : shopping} alt="" />
              </div>
              <div className="img-foot md:my-[80px] flex flex-col justify-center ">
                <div className="w-full flex justify-center font-sans font-semibold text-[18px] md:text-[24px] leading-[40px] text-white">
                  Subscribe to get latest stories!
                </div>
                <div className="w-full flex md:flex-row items-center flex-col justify-center mt-6">
                  <input style={{ backgroundColor: '#D9D9D9' }} className="md:w-[636px] w-[80%] md:h-[40px] h-[30px] " type="text" placeholder="Email" />
                  <button className="md:w-[174px] md:h-[40px] w-[130px] bg-orange-500 text-[white]"> Get Free Book
                  </button>
                </div>
              </div>
            </div>
          </React.Fragment >
        );

      default:
        break;
    }
  }


  return (
    <>
      {news && Object.keys(news).length > 1 ? Object.keys(news).slice(0,5).map((val, ind) => {
        return(jsxRendering(val, ind))
      }): null}
     
    </>
  )
}

export default Mainbottom;