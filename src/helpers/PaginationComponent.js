import React from 'react';
import { Link } from 'react-router-dom';


const PaginationComponent = ({totalPages, pageNo, setPageNo, link}) => {
    const getPageDiv = (currentPage) => {

        var temp;
        if(currentPage === -1)
        {
          temp = <li className="page__dots">...</li>
        }
        else{
          temp = <Link to={`${link}?page=${currentPage}`}>
                 <li className={(currentPage === pageNo) ? "page__numbers active": "page__numbers"} onClick={() => setPageNo(currentPage)}>
                 {currentPage}
                 </li>
                 </Link>
                 
          }
        // console.log(temp);
        return temp;
      }
    // const totalPages = Math.ceil(totalCount / (9.0));

     var pageNumbers = [1];
    // var pagination = <div></div>;
    if((pageNo-1) !== 1 && (pageNo-1) !== totalPages && (pageNo-1)>0)
    {
      if(pageNo > 3)
        pageNumbers.push(-1);
      pageNumbers.push(pageNo-1);
    }
    if(pageNo !== 1 && pageNo !== totalPages)
    {
      pageNumbers.push(pageNo);
    }
    if((pageNo+1) !== 1 && (pageNo+1) !== totalPages && (pageNo+1)<totalPages)
    {
      pageNumbers.push(pageNo+1);
      if(pageNo < (totalPages - 2))
        pageNumbers.push(-1);
    }
    if(totalPages > 1)
      pageNumbers.push(totalPages);
    // console.log(pageNumbers);

    return (
      <>
       <ul className="page">
         {/* <Link to={`/gallery?page=${pageNo === 1? 1: pageNo-1}`}>
          <li className="page__btn"><span className="material-icons">chevron_left</span></li>
         </Link> */}
          {
            pageNumbers.map((cPageNo, index) => (
              <div key={index}>{ getPageDiv(cPageNo)}</div>

            ))
          }
          {/* <Link to={`/gallery?page=${pageNo === totalPages? totalPages: pageNo+1}`}>
          <li className="page__btn"><span className="material-icons">chevron_right</span></li>
          </Link> */}

       </ul>
    </>);
}

export default PaginationComponent;
