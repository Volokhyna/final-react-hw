import React from "react";

export const PaginationWrapper = ({children, currentPage, totalPages, onPrevClick, onNextClick, handleLastPage, handleFirstPage}) => {

    const handleNextClick = () => {
        if (currentPage + 1 <= totalPages) {
            onNextClick && onNextClick(currentPage + 1)
        }
    }
    const handlePrevClick = () => {
        if (currentPage - 1 > 0) {
            onPrevClick && onPrevClick(currentPage - 1)
        }
    }
    const handleLastClick = () => handleLastPage && handleLastPage(totalPages);
    const handleFirstClick = () => handleFirstPage && handleFirstPage(1);

    return (
        <div>
            <div className='pagination'>
                <button disabled={currentPage === 1} onClick={handleFirstClick}> First page</button>
                <button disabled={currentPage - 1 === 0} onClick={handlePrevClick}> Prev page</button>
                <span> {currentPage} of {totalPages} </span>
                <button disabled={currentPage + 1 > totalPages} onClick={handleNextClick}> Next page</button>
                <button disabled={currentPage === totalPages} onClick={handleLastClick}> Last page</button>
            </div>
            {children}
        </div>
    )
}

