import {Link} from 'react-router-dom';
import styles from './nav-bar.module.css';
import {useCandidatesContext} from '../../contexts/CandidatesContext';

function NavBar() {
  const candidatesContext = useCandidatesContext();

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleSearchTextChange(e) {
    candidatesContext.setSearchText(e.target.value);
  }

  function handleReset() {
    candidatesContext.setSearchText('');
  }

  return (
    <nav className={styles.navBar}>
      <div className={['container', styles.flexBar].join(' ')}>
        <Link to="/">Home</Link>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="search"
            id="search"
            value={candidatesContext.searchText}
            onChange={handleSearchTextChange}
            placeholder="Search here..."
          />
          {candidatesContext.searchText && (
            <button
              className={['btn', styles.btnReset].join(' ')}
              type="reset"
              onClick={handleReset}
            >
              Reset
            </button>
          )}
        </form>
      </div>
    </nav>
  );
}

export default NavBar;
