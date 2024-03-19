// import React, { useState, useEffect } from 'react';
// import {  useParams, useNavigate, useLocation } from 'react-router-dom';
// import GalleryCard from './GalleryCard';
// import SearchBar from './SearchBar';
// import GalleryFilterSection from './GalleryFilterSection';
// import SortSection from './SortSection';
// import Loading from './Loading';
// import products from '../productsData';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCircleChevronRight, faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons'; 

// const itemsPerPage = 12;
// const maxButtonsToShow = 3;

// const GalleryList = () => {
//   const navigate = useNavigate();
//   // const location = useLocation();
//   // const searchParams = new URLSearchParams(location.search);
//   // const currentPageParam = searchParams.get('page');
//   // const currentPageFromURL = currentPageParam ? parseInt(currentPageParam, 10) : 1;

//   const [filters, setFilters] = useState({
//     date: 'all',
//     media: 'all',
//   });
//   const [searchTerm, setSearchTerm] = useState('');
//   const [showFilters, setShowFilters] = useState(false);
//   const [sortBy, setSortBy] = useState('name'); // Default sorting by name
//   const [showSort, setShowSort] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [loading, setLoading] = useState(true); // Loading state

//   const sortOptions = [
//     { label: 'Name', value: 'name' },
//     { label: 'Date', value: 'date' },
//     { label: 'Unsort', value: 'unsorted' }, // Added "Unsorted" option
//   ];

//   const filterProducts = (product) => {
//     const { date, media } = filters;
//     const dateFilter = date === 'all' || product.date === parseInt(date, 10);
//     const mediaFilter = media === 'all' || product.media.toLowerCase().includes(media.toLowerCase());
//     return dateFilter && mediaFilter;
//   };

//   const searchFilter = (product) => {
//     return product.name.toLowerCase().includes(searchTerm.toLowerCase());
//   };

//   const sortProducts = (a, b) => {
//     if (sortBy === 'name') {
//       return a.name.localeCompare(b.name);
//     } else if (sortBy === 'date') {
//       return a.date - b.date;
//     }
//     // If sortBy is 'unsorted', maintain the original order
//     return 0;
//   };

//   const applyFiltersAndSort = () => {
//     const filteredProducts = products.filter(filterProducts).filter(searchFilter);
//     const sortedProducts = filteredProducts.sort(sortProducts);
//     return sortedProducts;
//   };

//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//     const newParams = new URLSearchParams(window.location.search);
//     newParams.set('page', pageNumber);
//     navigate(`/gallery?${newParams.toString()}`);
//   };

//   const handleFilterChange = () => {
//     setCurrentPage(1);
//     const newParams = new URLSearchParams(window.location.search);
//     newParams.set('page', '1');
//     navigate(`/gallery?${newParams.toString()}`);
//   };

//   const handleSortChange = () => {
//     setCurrentPage(1);
//     const newParams = new URLSearchParams(window.location.search);
//     newParams.set('page', '1');
//     navigate(`/gallery?${newParams.toString()}`);
//   };

//   const handleSearchChange = (newSearchTerm) => {
//     setSearchTerm(newSearchTerm);
//     setCurrentPage(1); // Resets page when search term changes
//     const newParams = new URLSearchParams(window.location.search);
//     newParams.set('page', '1');
//     navigate(`/gallery?${newParams.toString()}`);
//   }

//   useEffect(() => {
//     setLoading(true); // Set loading to true when component mounts or when filters, sorting, or search term change
     
    
//     // Simulate an API call or any asynchronous operation
//     setTimeout(() => {
//       setLoading(false); // Set loading to false once the operation is complete
//       window.scrollTo(0, 0);
//     }, 1000); // Adjust the timeout as needed
//   }, [currentPage, filters, sortBy, searchTerm]);

//   useEffect(() => {
//     // Update the URL with the current page when the component is first loaded
//     navigate(`/gallery?page=${currentPage}`);
//   }, [currentPage, navigate]);

//   useEffect(() => {
//     // Update the URL dynamically when the search term changes
//     const searchParams = new URLSearchParams(location.search);
//     searchParams.set('page', currentPage.toString());
//     navigate(`/gallery?${searchParams.toString()}`);
//   }, [currentPage, searchTerm, navigate, location.search]);

//   const totalPages = Math.ceil(applyFiltersAndSort().length / itemsPerPage);
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = applyFiltersAndSort().slice(indexOfFirstItem, indexOfLastItem);

//   const renderPaginationButtons = () => {
//     const buttons = [];
//     const totalPages = Math.ceil(applyFiltersAndSort().length / itemsPerPage);

//     let startPage = Math.max(1, currentPage - Math.floor(maxButtonsToShow / 2));
//     let endPage = Math.min(totalPages, startPage + maxButtonsToShow - 1);

//     if (endPage - startPage + 1 < maxButtonsToShow) {
//       startPage = Math.max(1, endPage - maxButtonsToShow + 1);
//     }

//     if (startPage > 1) {
//       buttons.push(
//         <button className="pagination-prev" key="prev" onClick={() => handlePageChange(currentPage - 1)}>
//         <FontAwesomeIcon icon={faCircleChevronLeft}  />
//         </button>
//       );
//     }

//     for (let i = startPage; i <= endPage; i++) {
//       buttons.push(
//         <button key={i} onClick={() => handlePageChange(i)} className={currentPage === i ? 'active' : ''}>
//           {i}
//         </button>
//       );
//     }

//     if (endPage < totalPages) {
//       buttons.push(
//         <button className="pagination-next" key="next" onClick={() => handlePageChange(currentPage + 1)}>
//           <FontAwesomeIcon icon={faCircleChevronRight} />
//         </button>
//       );
//     }

//     return buttons;
//   };

//   return (
//     <div className="gallery-list-container">
//       <div className="filter-search-row">
//         <div className="gallery-search">
//         <h1 className="gallery-title">GALLERY</h1>
//         <SearchBar searchTerm={searchTerm} setSearchTerm={handleSearchChange} className="gallery-search-bar" />
//         </div>
//         <GalleryFilterSection filters={filters} setFilters={setFilters} showFilters={showFilters} setShowFilters={setShowFilters} handleFilterChange={handleFilterChange} />
//         <SortSection sortOptions={sortOptions} sortBy={sortBy} setSortBy={setSortBy} showSort={showSort} setShowSort={setShowSort} handleSortChange={handleSortChange} />
//       </div>

//       {loading ? (
//         <Loading /> // Render the loading component while loading is true
//       ) : (
//         <>
//           <div className="gallery-list">
//             {currentItems.map((product) => (
//               <GalleryCard key={product.id} product={product} currentPage={currentPage} />
//             ))}
//           </div>

//           <div className="pagination">
//             {renderPaginationButtons()}
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default GalleryList;








import React, { useState, useEffect } from 'react';
import GalleryCard from './GalleryCard';
import SearchBar from './SearchBar';
import { useParams, useNavigate } from 'react-router-dom';
import GalleryFilterSection from './GalleryFilterSection';
import SortSection from './SortSection';
import Loading from './Loading';
import products from '../productsData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronRight, faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons'; 

const itemsPerPage = 12;
const maxButtonsToShow = 3;

const GalleryList = () => {

  const navigate = useNavigate();

  const [filters, setFilters] = useState({
    date: 'all',
    media: 'all',
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('name'); // Default sorting by name
  const [showSort, setShowSort] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true); // Loading state
  
  const sortOptions = [
    { label: 'Name', value: 'name' },
    { label: 'Date', value: 'date' },
  ];

  const filterProducts = (product) => {
    const { date, media } = filters;
    const dateFilter = date === 'all' || product.date === parseInt(date, 10);
    const mediaFilter = media === 'all' || product.media.toLowerCase().includes(media.toLowerCase());
    return dateFilter && mediaFilter;
  };

  const searchFilter = (product) => {
    return product.name.toLowerCase().includes(searchTerm.toLowerCase());
  };

  const sortProducts = (a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'date') {
      return a.date - b.date;
    }
  };

  const applyFiltersAndSort = () => {
    const filteredProducts = products.filter(filterProducts).filter(searchFilter);
    const sortedProducts = filteredProducts.sort(sortProducts);
    return sortedProducts;
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber); 
    const newParams = new URLSearchParams(window.location.search);
    newParams.set('page', pageNumber);
    navigate(`/gallery?${newParams.toString()}`);

  };

  const handleFilterChange = () => {
    setCurrentPage(1);
    const newParams = new URLSearchParams(window.location.search);
    newParams.set('page', '1');
    navigate(`/gallery?${newParams.toString()}`);
    
  };

  const handleSortChange = () => {
    setCurrentPage(1);
    // Update URL parameters based on the new sort
  const newParams = new URLSearchParams(window.location.search);
  newParams.set('page', '1');
  navigate(`/gallery?${newParams.toString()}`);
  };

  const handleSearchChange = (newSearchTerm) => {
    setSearchTerm(newSearchTerm);
    setCurrentPage(1); // Resets page when search term changes
    // Update URL parameter based on the new search term
  const newParams = new URLSearchParams(window.location.search);
  newParams.set('page', '1');
  navigate(`/gallery?${newParams.toString()}`);
  }
  
  

  useEffect(() => {
    // setLoading(true);
    // window.scrollTo(0, 0);
  
    // Extract query parameters from the location
    const searchParams = new URLSearchParams(window.location.search);
    const pageParam = parseInt(searchParams.get('page'), 10) || 1;
    // Set the state based on query parameters
    setCurrentPage(pageParam);
    console.log("pageParam from gallery list", pageParam);
    
  }, []);
  
   useEffect(() => {
     setLoading(true); // Set loading to true when component mounts or when filters, sorting, or search term change
     window.scrollTo(0, 0);
     // Simulate an API call or any asynchronous operation
     setTimeout(() => {
       setLoading(false); // Set loading to false once the operation is complete
       
     }, 2000); // Adjust the timeout as needed
   }, [currentPage, filters, sortBy, searchTerm]);

  const totalPages = Math.ceil(applyFiltersAndSort().length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = applyFiltersAndSort().slice(indexOfFirstItem, indexOfLastItem);

  const renderPaginationButtons = () => {
    const buttons = [];
    const totalPages = Math.ceil(applyFiltersAndSort().length / itemsPerPage);

    let startPage = Math.max(1, currentPage - Math.floor(maxButtonsToShow / 2));
    let endPage = Math.min(totalPages, startPage + maxButtonsToShow - 1);

    if (endPage - startPage + 1 < maxButtonsToShow) {
      startPage = Math.max(1, endPage - maxButtonsToShow + 1);
    }

    if (startPage > 1) {
      buttons.push(
        <button className="pagination-prev" key="prev" onClick={() => handlePageChange(currentPage - 1)}>
        <FontAwesomeIcon icon={faCircleChevronLeft}  />
        </button>
      );
    }

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <button key={i} onClick={() => handlePageChange(i)} className={currentPage === i ? 'active' : ''}>
          {i}
        </button>
      );
    }

    if (endPage < totalPages) {
      buttons.push(
        <button className="pagination-next" key="next" onClick={() => handlePageChange(currentPage + 1)}>
          <FontAwesomeIcon icon={faCircleChevronRight} />
        </button>
      );
    }

    return buttons;
  };

  return (
    <div className="gallery-list-container">
      <div className="filter-search-row">
        <div className="gallery-search">
        <h1 className="gallery-title">GALLERY</h1>
        <SearchBar searchTerm={searchTerm} setSearchTerm={handleSearchChange} className="gallery-search-bar" />
        </div>
        <GalleryFilterSection filters={filters} setFilters={setFilters} showFilters={showFilters} setShowFilters={setShowFilters} handleFilterChange={handleFilterChange} />
        <SortSection sortOptions={sortOptions} sortBy={sortBy} setSortBy={setSortBy} showSort={showSort} setShowSort={setShowSort} handleSortChange={handleSortChange} />
      </div>

      {loading ? (
        <Loading /> // Render the loading component while loading is true
      ) : (
        <>
          <div className="gallery-list">
            {currentItems.map((product) => (
              <GalleryCard key={product.id} product={product} currentPage={currentPage} />
            ))}
          </div>

          <div className="pagination">
            {renderPaginationButtons()}
          </div>
        </>
      )}
    </div>
  );
};

export default GalleryList;
