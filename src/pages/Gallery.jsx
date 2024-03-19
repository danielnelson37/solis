import React, { useState, useEffect } from 'react';
import GalleryList from '../components/GalleryList'; // Import your ProductList component
import products from '../productsData'; // Adjust the path accordingly
import { useNavigate } from 'react-router-dom';

const Gallery = () => {
  // const navigate = useNavigate();

  // const [currentPage, setCurrentPage] = useState(1);

  // useEffect(() => {
  //   const newParams = new URLSearchParams();
  //   newParams.set('page', currentPage);
  //   navigate(`/gallery?${newParams.toString()}`);
  // }, [currentPage]);

  return (
    <div className="gallery">
      <GalleryList 
      products={products}
      // currentPage={currentPage}
  
      />
    </div>
  );
};

export default Gallery;