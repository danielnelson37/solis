// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate, useLocation  } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCircleChevronRight, faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons'; 
// import products from '../productsData';

// const GalleryItemDetails = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const product = products.find((p) => p.id === parseInt(id, 10));

//   const location = useLocation();
//   const searchParams = new URLSearchParams(location.search);
//   const page = searchParams.get('page');

//   if (!product) {
//     return <p>Product not found.</p>;
//   }

//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const handleNextImage = () => {
//     const nextIndex = (currentImageIndex + 1) % product.image.length;
//     setCurrentImageIndex(nextIndex);
//   };

//   const handlePrevImage = () => {
//     const prevIndex = (currentImageIndex - 1 + product.image.length) % product.image.length;
//     setCurrentImageIndex(prevIndex);
//   };

//   const handleThumbnailClick = (index) => {
//     if (product.image[index].includes('/videos/')) {
//       // If the clicked thumbnail is a video, set the index to the first video in the array
//       const videoIndex = product.image.findIndex((item) => item.includes('/videos/'));
//       setCurrentImageIndex(videoIndex);
//     } else {
//       // If it's an image, set the index to the clicked image index
//       setCurrentImageIndex(index);
//     }
//   };

//   const handleGoBack = () => {
//     //find the product id, divide it by 12 to get current page?
//     navigate(`/gallery?page${page}`);
//   };

//   return (
//     <div className="gallery-details">
//       {/* <video className="video-overlay" autoPlay muted width="auto" loop >
//             <source src='/videos/eclipse.gif' type="video/mp4" />
//             Your browser does not support the video tag.
//           </video> */}
//           {/* <img className="image-overlay" src="/videos/eclipse.gif" alt="" /> */}
//       <div className="gallery-nav">
//         <button className="back-button" onClick={handleGoBack}>
//           Back to Gallery
//         </button>
//       </div>
//       <div className="details-container">
//         <div className="details-section">
//           <div className="details-title">
//             <h1>{product.name}</h1>
//             <p className="gallery-item-date">{product.date}</p>
//             <p>Media: {product.media}</p>
//             {product.dimensions && (
//               <p className="gallery-dimensions">Dimensions: {product.dimensions}</p>
//             )}
//             {product.description && (
//               <div className="gallery-bio">
//                 <p>Description: {product.description}</p>
//               </div>
//             )}
//           </div>

//           <div className="image-section">
//             {product.image[currentImageIndex].includes('.mp4') ? (
//               <video
//                 className="gallery-video"
//                 autoPlay
//                 width="500"
//                 controls
//                 src={product.image[currentImageIndex]}
//               >
//                 Your browser does not support the video tag.
//               </video>
//             ) : (
//               <img src={product.image[currentImageIndex]} alt={product.name} />
//             )}
//             {product.image.length > 1 && (
//               <div className="image-navigation">
//                  <FontAwesomeIcon icon={faCircleChevronLeft} onClick={handlePrevImage} className="prev" />
//                  <FontAwesomeIcon icon={faCircleChevronRight} onClick={handleNextImage} className="next"/>
//               </div>
//             )}
//           </div>

//           {/* Add row of alternative image thumbnails */}
//           {product.image.length > 1 && (
//             <div className="thumbnail-row">
//               {product.image.map((image, index) => (
//                 <div
//                   key={index}
//                   className={`thumbnail ${index === currentImageIndex ? 'selected' : ''}`}
//                   onClick={() => handleThumbnailClick(index)}
//                 >
//                   {image.includes('/videos/') ? (
//                     <video >
//                       <source src={image} type="video/mp4" />
//                       Your browser does not support the video tag.
//                     </video>
//                   ) : (
//                     <img src={image} alt={`${product.name} - Thumbnail ${index}`} />
//                   )}
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GalleryItemDetails;

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronRight, faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons'; 
import products from '../productsData';

const GalleryItemDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const page = searchParams.get('page');

  const navigate = useNavigate();
  // const itemsPerPage = 12
  
  const product = products.find((p) => p.id === parseInt(id, 10));

  useEffect(() => {
    window.scrollTo(0, 0);
  })

  if (!product) {
    return <p>Product not found.</p>;
  }

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    const nextIndex = (currentImageIndex + 1) % product.image.length;
    setCurrentImageIndex(nextIndex);
  };

  const handlePrevImage = () => {
    const prevIndex = (currentImageIndex - 1 + product.image.length) % product.image.length;
    setCurrentImageIndex(prevIndex);
  };

  const handleThumbnailClick = (index) => {
    if (product.image[index].includes('/videos/')) {
      // If the clicked thumbnail is a video, set the index to the first video in the array
      const videoIndex = product.image.findIndex((item) => item.includes('/videos/'));
      setCurrentImageIndex(videoIndex);
    } else {
      // If it's an image, set the index to the clicked image index
      setCurrentImageIndex(index);
    }
  };

  const handleGoBack = () => {
    // const productIndex = products.findIndex((p) => p.id === parseInt(id, 10));
    // const targetPage = Math.ceil((productIndex + 1) / itemsPerPage);
    navigate(`/gallery?page=${page}`);
    console.log("pageNumber from galleryitem:", page); 
    // console.log("targetPage:", targetPage);
  };

  return (
    <div className="gallery-details">
      <div className="gallery-nav">
        <button className="back-button" onClick={handleGoBack}>
          Back to Gallery
        </button>
      </div>
      <div className="details-container">
        <div className="details-section">
          <div className="details-title">
            <h1>{product.name}</h1>
            <p className="gallery-item-date">{product.date}</p>
            <p>Media: {product.media}</p>
            {product.dimensions && (
              <p className="gallery-dimensions">Dimensions: {product.dimensions}</p>
            )}
            {product.description && (
              <div className="gallery-bio">
                <p>Description: {product.description}</p>
              </div>
            )}
          </div>
          <div className='view'>
          <div className="image-section">
            {product.image[currentImageIndex].includes('.mp4') ? (
              <video
                className="gallery-video"
                autoPlay
                width="500"
                controls
                src={product.image[currentImageIndex]}
              >
                Your browser does not support the video tag.
              </video>
            ) : (
              <img src={product.image[currentImageIndex]} alt={product.name} />
            )}
            
                 {product.image.length > 1 && (
            <div className="thumbnail-row">
              {product.image.map((image, index) => (
                <div
                  key={index}
                  className={`thumbnail ${index === currentImageIndex ? 'selected' : ''}`}
                  onClick={() => handleThumbnailClick(index)}
                >
                  {image.includes('/videos/') ? (
                    <video >
                      <source src={image} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img src={image} alt={`${product.name} - Thumbnail ${index}`} />
                  )}
                </div>
              ))}

            </div>
          )}    
          </div>
          {product.image.length > 1 && (
              <div className="image-navigation">
                 <FontAwesomeIcon icon={faCircleChevronLeft} onClick={handlePrevImage} className="prev" />
                 <FontAwesomeIcon icon={faCircleChevronRight} onClick={handleNextImage} className="next"/>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryItemDetails;