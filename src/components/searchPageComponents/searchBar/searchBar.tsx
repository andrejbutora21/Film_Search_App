import './search-bar.css';

interface SearchBarProps {
  defaultValue?: string;
  setSearchTitle: (title: string) => void;
  setCurrentPage: (page: number) => void;
}

export const SearchBar = (props: SearchBarProps) => {
  let debounceTimeout: NodeJS.Timeout;

  const debounceSetSearchTitle = (title: string) => {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
      props.setSearchTitle(title);
      props.setCurrentPage(1);
    }, 800);
  };

  return (
    <div className="search-bar">
      <input
        className="search-bar__input"
        type="text"
        placeholder="Search ..."
        defaultValue={props.defaultValue}
        onChange={(e) => debounceSetSearchTitle(e.target.value)}
      />
    </div>
  );
};
