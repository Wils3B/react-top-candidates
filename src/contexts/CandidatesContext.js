import React, {createContext, useContext, useState} from 'react';

const CandidatesContext = createContext();

function CandidatesProvider({children}) {
  const [candidates, setCandidates] = useState(null);
  const [searchText, setSearchText] = useState('');

  function updateCandidate(id, data) {
    setCandidates({...candidates, [id]: data});
  }

  function getCandidate(id) {
    return candidates[id];
  }

  /**
   * get candidates array bu filter the current data first
   * @param filters
   */
  function getCandidates(filters = {}) {
    const returnedArray = [];
    Object.keys(candidates).forEach((id) => {
      const candidate = candidates[id];
      const filtersKeys = Object.keys(filters);
      for (let i = 0; i < filtersKeys.length; i++) {
        const filterKey = filtersKeys[i];
        const value = candidate[filterKey];
        if (
          typeof value !== 'string' ||
          !value.toLowerCase().includes(filters[filterKey].toLowerCase())
        ) {
          return;
        }
        returnedArray.push(candidates[id]);
      }
    });
    return returnedArray;
  }

  return (
    <CandidatesContext.Provider
      value={{
        candidates,
        updateCandidate,
        getCandidate,
        setCandidates,
        getCandidates,
        searchText,
        setSearchText,
      }}
    >
      {children}
    </CandidatesContext.Provider>
  );
}

function useCandidatesContext() {
  return useContext(CandidatesContext);
}

export {CandidatesContext, CandidatesProvider, useCandidatesContext};
