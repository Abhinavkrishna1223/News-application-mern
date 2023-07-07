import React, { useEffect, useLayoutEffect, useState } from 'react';
import './Category.scss';
import { createCategory, getCategoryList, updateCategory } from '../../store/categories';
import { useDispatch, useSelector } from 'react-redux';
import Validation from '../../utils/Validation';
import { useNavigate, useParams } from 'react-router-dom';

const Category = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const validation = new Validation();

  const {categories} = useSelector((state) => {
    return {
      categories: state.categories.categoryList,
    };
  });

  const [title, setTitle] = useState('');

  useLayoutEffect(() => {
    if(id) dispatch(getCategoryList());
  },[]);

  useEffect(() => {
    if(id && categories.data?.length){
      const category = categories.data.find((element) => element._id === id);
      setTitle(category?.title);
    }
  },[categories]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSumbit = () => {
    if(validation.isNotEmpty(title)) {
      if(id) dispatch(updateCategory({_id: id, title}, navigate));
      else dispatch(createCategory({title}, navigate));
      setTitle('');
    } else {
      alert('Please enter a title');
    }
  };

  return (
    <div className="blog-page">
      <h1>Create News Category</h1>
      <div className="input-group">
        <label>Title:</label>
        <input type="text" value={title} onChange={handleTitleChange} />
      </div>
      <button onClick={handleSumbit} className="submit-button">Submit</button>
    </div>
  );
};

export default Category;
