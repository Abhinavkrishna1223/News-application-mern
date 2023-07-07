import React, { useEffect, useState } from 'react';
import './ImageHandler.scss';
import dummyImage from '../../assets/Images/dummy-image.webp';
import { useParams } from 'react-router-dom';

const ImageHandler = ({imageDataHandler, defaultImage}) => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(null);
  const [dummy, setDummy] = useState(dummyImage); 

  useEffect(() => {
    if(id && defaultImage){
      setDummy(`${process.env.REACT_APP_PRE_URL}${defaultImage}`);
    }
  },[defaultImage, id]);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setSelectedImage(reader.result);
    };

    if (file) {
      imageDataHandler(file);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
      />
      {/* {selectedImage && ( */}
        <img src={selectedImage || dummy} alt="Selected" className="preview-image" />
      {/* )} */}
    </div>
  );
};

export default ImageHandler;
