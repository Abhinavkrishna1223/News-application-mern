import React, { useState, useLayoutEffect } from 'react';
import './NewsList.scss';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteNewsArticle, getNewsList } from '../../store/news';

const NewsList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {newsList, totalPages} = useSelector((state) => {
    return {
      newsList: state.newsArticles.newsList.data.newsArticles,
      totalPages: state.newsArticles.newsList.data.totalPages
    }
  });

  const [filters, setFilters] = useState({
    search: '',
    limit: 15,
    page: 1,
    category: ''
  });
  

  useLayoutEffect(() => {
    dispatch(getNewsList(filters));
  },[]);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    dispatch(getNewsList({...filters, page: pageNumber}));
    setFilters((prevState) => {
      return{...prevState, page: pageNumber}
    });
  };

  const handleSearch = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    setFilters((prevState) => {
      return{...prevState, search: event.target.value}
    });
    if(event.target.value === '') dispatch(getNewsList({...filters, search:''}));
  }

  const searchResult = () => dispatch(getNewsList(filters));

  const refreshNews = () => dispatch(getNewsList({search: '', limit: 15, page: 1, category: ''}));

  const deleteArticleHandler = (id) => {
    dispatch(deleteNewsArticle(id));
  };

  return (
    <React.Fragment>
      <div className='top-bar' >
        <p onClick={refreshNews}>Update News</p>
        <span>
          <input value={filters.search} onChange={handleSearch} onKeyDown={(e) => {e.key === 'Enter' && searchResult()}} placeholder='Search here...'/>
          <button onClick={() => navigate('/create-article')} >Add News</button>
        </span>
      </div>
      <div className="admin-dashboard">
        <table>
          <thead>
            <tr>
              <th style={{width:"5%"}}>S.No.</th>
              <th style={{width:"15%"}}>Title</th>
              <th >Details</th>
              <th style={{width:"15%"}}>Category</th>
              <th style={{width:"15%"}}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {newsList?.length ? newsList.map((item, index) => (
              <tr key={index}>
                <td >{index + 1}</td>
                <td >{item?.title}</td>
                <td className='scroll_td'>
                  <p>
                  {item?.detail}
                  </p>
                  </td>
                <td >{item.category || 'No Category'}</td>
                <td style={{textAlign:"center"}}>
                  <button onClick={() => navigate(`/edit-article/${item._id}`)}>View / Edit</button>
                  <button onClick={() => deleteArticleHandler(item._id)}>Delete</button>
                </td>
              </tr>
            )) : <h2>No Article Available</h2>}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="pagination">
          {newsList?.length && (
            <ul>
              {filters.page !== 1 ? <li
                onClick={() => handlePageChange(filters.page - 1)}
              >
                Prev
              </li> : null}
              {Array(totalPages)
                .fill()
                .map((_, index) => (
                  <li
                    key={index + 1}
                    className={filters.page === index + 1 ? 'active' : ''}
                    onClick={() => handlePageChange(index + 1)}
                  >
                    {index + 1}
                  </li>
                ))}
                {filters.page < totalPages ? <li
                onClick={() => handlePageChange(filters.page + 1)}
              >
                Next
              </li> : null}
            </ul>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default NewsList;



