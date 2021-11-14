import './App.css';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import HomePage from './pages/HomePage';
import CandidatePage from './pages/CandidatePage';
import {useCandidatesContext} from './contexts/CandidatesContext';
import {useEffect, useState} from 'react';

function fetchDataFromApi() {
  return fetch('https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json')
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      const candidatesObject = {};
      data.forEach((item) => {
        candidatesObject[item.id] = item;
      });
      return candidatesObject;
    });
}

function App() {
  const [loading, setLoading] = useState(true);
  const [fetchFailed, setFetchFailed] = useState(false);
  const candidatesContext = useCandidatesContext();

  const fetchData = () => {
    console.log('fetch data');
    setLoading(true);
    setFetchFailed(false);
    fetchDataFromApi()
      .then((data) => {
        candidatesContext.setCandidates(data);
      })
      .catch((e) => {
        console.error(e);
        setFetchFailed(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {fetchFailed ? (
        <div>
          Fetch failed{' '}
          <button className="btn btn-blue" onClick={() => fetchData()}>
            Reload
          </button>
        </div>
      ) : loading ? (
        <div>Loading...</div>
      ) : (
        <Router history={true}>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
              </ul>
            </nav>

            <Switch>
              <Route path="/" exact={true}>
                <HomePage />
              </Route>
              <Route path="/:candidateId">
                <CandidatePage />
              </Route>
            </Switch>
          </div>
        </Router>
      )}
    </>
  );
}

export default App;
