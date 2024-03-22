import PropTypes from 'prop-types';
import css from './SearchBox.module.css';
const SearchBox = ({ value, onSearch }) => {
  return (
    <div className={css.searchBox}>
      <label>
        Find contacts by name:
        <input
          className={css.searchInput}
          type="text"
          name="nameSearch"
          value={value}
          onChange={e => {
            onSearch(e.target.value);
          }}
        />
      </label>
    </div>
  );
};
export default SearchBox;
SearchBox.proptypes = {
  value: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
};
