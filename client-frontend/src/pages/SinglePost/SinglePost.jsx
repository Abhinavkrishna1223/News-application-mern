import React, {useLayoutEffect, useEffect, useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate, Link } from 'react-router-dom';
import "./singlepost.scss";
// import  Ellipse from "../../assets/Ellipse.png";
import { FiHome } from "react-icons/fi";
import Sidebar from '../../components/Sidebar/Sidebar';
import {getSingleNewsArticle} from "../../store/news";
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

function SinglePost() {
  const {id} = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { article } = useSelector((state) => {
    return {
      article: state.newsArticlesReducer.newsArticle
    }
  });

  const [newsArticle, setNewsArticle] = useState('');
  const [latestArticle, setLatestArticle] = useState('');
  const [relatedArticle, setRelatedArticle] = useState('');

  useLayoutEffect(() => {
    dispatch(getSingleNewsArticle(id));
  },[dispatch, id]);

  useEffect(() => {
    if(article.success) {
      console.log(article.data);
      setNewsArticle(article.data.article);
      setLatestArticle(article.data.latestNews);
      setRelatedArticle(article.data.relatedNews);
    }
  },[article]);

  return (
   
       <div className="container">
      <div className="Article-page">
      <Row>
        <Col xs={8} className='left_side'>
          <div className="singlePostWrapper">
            <div>
              <FiHome /> <Link to="/">{` Home `}</Link>   |  <Link to={`/Section/${newsArticle?.category || '/Section/123'}`}> {newsArticle.category || `Section`}</Link>
            </div>
            <h1 className="Article-title"> {newsArticle.title || `Title Page`}</h1>
            <img
              className="Article-img"
              src={ newsArticle?.image ? `${process.env.REACT_APP_PRE_URL}${newsArticle.image}` : "https://images.pexels.com/photos/1194410/pexels-photo-1194410.jpeg?auto=compress&cs=tinysrgb&w=1600"}
              alt="Card"
            />
          </div>
          <div className="Article-info">
            {/* <span>
              <h1> <b>This is basic detail of heading</b></h1>
            </span> */}
            <div className="Logo data_section">
              <span >{`${ newsArticle.createdAt || '22/07/2023:- 4:21pm'}`}</span>
            </div>

            {/* <p>{ newsArticle?.detail || `jadjdnjknsfdjrjrsnjkasnfHowever, Aurangzeb still did not find much resonance in Maharashtra’s polity till right-wing organisations started painting him as the villain in their Hindu cultural renewal project. Riding that wave of religious and nativist chauvinism was the Shiv Sena.
                Once its politics took an anti-Muslim turn, it started openly calling Indian Muslims descendents of Aurangzeb. In seeking to denigrate Aurangzeb, the Sena even tended to refer to him as the colloquial “Aurangya”.
                The remnants of forts and monuments marking the long Maratha-Mughal rivalry which dot the state’s landscape were also used by the Sena for its political benefit.`}
            </p> */}
            <div dangerouslySetInnerHTML={{__html:newsArticle?.detail }} />
          </div>
        </Col>
        
        <Col xs={4} className='right_side'>
          {latestArticle.length ? <Sidebar news={latestArticle} tag={'Recent News'} /> : null}
          {relatedArticle.length ? <Sidebar news={relatedArticle} tag={'Related News'} /> : null}
        </Col>
     
       
        </Row>
      </div>
      
    </div>
  )
}

export default SinglePost








