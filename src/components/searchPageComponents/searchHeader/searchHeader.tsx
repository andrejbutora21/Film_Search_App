import { SearchBar } from '../searchBar/searchBar';
import './search-header.css';
import heartRegular from '../../../assets/icons/heart-regular.svg';
import heartSolid from '../../../assets/icons/heart-solid.svg';

interface SearchHeaderProps {
  defaultValue?: string;
  favouritesFilmsPage: boolean;
  setFavorites: () => void;
  setSearchTitle: (title: string) => void;
  setCurrentPage: (page: number) => void;
}

export const SearchHeader = (props: SearchHeaderProps) => {
  return (
    <div className="search-header">
      <SearchBar
        defaultValue={props.defaultValue}
        setSearchTitle={props.setSearchTitle}
        setCurrentPage={props.setCurrentPage}
      />
      <button className="heart-icon-button" onClick={props.setFavorites}>
        <img
          src={props.favouritesFilmsPage ? heartSolid : heartRegular}
          alt={props.favouritesFilmsPage ? 'Favourites' : 'All'}
          className="icon heart-icon"
        />
      </button>
    </div>
  );
};
