import React, { useEffect, useLayoutEffect, useState } from 'react';
import './CategoryList.scss';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCategory, getCategoryList } from '../../store/categories';

const CategoryList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { categoryList } = useSelector((state) => {
    return {
      categoryList: state.categories.categoryList,
    }
  });

  useLayoutEffect(() => {
    dispatch(getCategoryList());
  },[]);

  const refreshCategoryList = () => dispatch(getCategoryList());

  const deleteCategoryHandler = (id) => dispatch(deleteCategory(id));

  return (
    <React.Fragment>
      <div className='top-bar' >
        <p onClick={refreshCategoryList}>Update Categories</p>
        <span>
          <button onClick={() => navigate('/create-category')}>Add Category</button>
        </span>
      </div>
      <div className="admin-dashboard">
        <table>
          <thead>
            <tr>
              <th style={{width: "10%"}}>S.No.</th>
              <th>Title</th>
              <th style={{width: "20%"}}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {categoryList.data?.length ? categoryList.data.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.title}</td>
                <td style={{textAlign:"center"}}>
                  <button onClick={() => navigate(`/edit-category/${item._id}`)}>Edit</button>
                  <button onClick={() => deleteCategoryHandler(item._id)}>Delete</button>
                </td>
              </tr>
            )): null}
          </tbody>
        </table>

      </div>
    </React.Fragment>
  );
};

export default CategoryList;



