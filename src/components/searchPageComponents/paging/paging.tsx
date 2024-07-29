import './paging.css';
import chevronRight from '../../../assets/icons/chevron-right-solid.svg';
import chevronLeft from '../../../assets/icons/chevron-left-solid.svg';
import chevronRightGrey from '../../../assets/icons/chevron-right-solid-grey.svg';
import chevronLeftGrey from '../../../assets/icons/chevron-left-solid-grey.svg';

interface PagingProps {
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
}

export const Paging = (props: PagingProps) => {
  const movePreviousPage = () => {
    if (props.currentPage > 1) {
      props.setCurrentPage(props.currentPage - 1);
    }
  };

  const moveNextPage = () => {
    if (props.currentPage < props.totalPages) {
      props.setCurrentPage(props.currentPage + 1);
    }
  };

  return (
    <div className="paging">
      <button
        className={
          props.currentPage === 1
            ? 'paging__button--disabled'
            : 'paging__button--enabled'
        }
        onClick={movePreviousPage}
        disabled={props.currentPage === 1}
      >
        <img
          className={`paging__icon ${props.currentPage === 1 ? 'paging__icon--disabled' : ''}`}
          src={props.currentPage === 1 ? chevronLeftGrey : chevronLeft}
          alt="Previous page"
        />
      </button>
      <p>
        Page: {props.currentPage} / {props.totalPages}
      </p>
      <button
        className={
          props.currentPage === props.totalPages
            ? 'paging__button--disabled'
            : 'paging__button--enabled'
        }
        onClick={moveNextPage}
        disabled={props.currentPage === props.totalPages}
      >
        <img
          className={`paging__icon ${props.currentPage === props.totalPages ? 'paging__icon--disabled' : ''}`}
          src={
            props.currentPage == props.totalPages
              ? chevronRightGrey
              : chevronRight
          }
          alt="Next page"
        />
      </button>
    </div>
  );
};
