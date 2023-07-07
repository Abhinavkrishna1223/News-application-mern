import React, { useState, useLayoutEffect, useEffect } from "react";
import "./section.scss";
import SectionBigCard from "../../components/SectionBigCard/SectionBigCard";
import SectionSmallCard from "../../components/SectionSmallCard/SectionSmallCard";
import { useDispatch, useSelector } from "react-redux";
import { getNewsList } from "../../store/news";
import { useNavigate, useParams, Link } from 'react-router-dom';
import { FiHome } from "react-icons/fi";


const Section = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { sectionNews } = useSelector((state) => {
    return {
      sectionNews: state.newsArticlesReducer.newsList
    }
  });

  const [articlecontainer, setArticleContainer] = useState('');

  useLayoutEffect(() => {
    dispatch(getNewsList(id));
  }, [id]);

  useEffect(() => {
    if (sectionNews.success) {
      console.log(sectionNews.data);
      let set = 1;
      const data = {};
      while ((set - 1) * 9 < sectionNews.data.length) {
        data[set] = sectionNews.data.slice((set - 1) * 9, set * 9);
        set++;
      }
      setArticleContainer(data);
    }
  }, [sectionNews]);

  const articleBox = (data, index) => {
    if (data.length) {
      return (
        <div className="section">
          {
            !index && <div className="top-line">
              <h4>{id}</h4>
            </div>
          }

          <div className="first-Section flex justify-between px-[28px] lg:flex-row flex-col ">
            {data.slice(0, 3).map((val, index) => {
              return <SectionBigCard key={index} data={val} />
            })}
          </div>
          <div className=" px-[28px] lg:px-[32px] flex lg:flex-row flex-col  justify-between lg:mt-[121px] mt-[20px]  ">
            {data.length > 3 && data.slice(3, 6).map((val, index) => {
              return <SectionSmallCard key={index} data={val} />
            })}
          </div>
          <div className=" px-[28px] lg:px-[32px] flex lg:flex-row flex-col justify-between lg:mt-[121px] mt-[20px]  ">
            {data.length > 6 && data.slice(6).map((val, index) => {
              return <SectionSmallCard key={index} data={val} />
            })}
          </div>
        </div>
      )
    } else {
      <div className="section">No data</div>
    }
  }

  return (
    <div>

      <div className="container">
        <div style={{ margin: "90px 0 -15px 0", display:'flex', alignItems:'center' }}>
          <FiHome /> &nbsp;  &nbsp;  <Link to="/">Home</Link>  &nbsp; |  &nbsp; <Link to={`#`}> {id || `Section`}</Link>
        </div>
        {Object.keys(articlecontainer)?.length ? Object.keys(articlecontainer).map((val, index) => {
          return articleBox(articlecontainer[val], index)
        }) : null}

      </div>
    </div>


  );
};

export default Section;
