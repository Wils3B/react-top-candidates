import React, {createContext, useContext, useState} from 'react';

const CandidatesContext = createContext();

function CandidatesProvider({children}) {
  const [candidates, setCandidates] = useState(null);

  function updateCandidate(id, data) {
    setCandidates({...candidates, [id]: data});
  }

  function getCandidate(id) {
    return candidates[id];
  }

  return (
    <CandidatesContext.Provider value={{candidates, updateCandidate, getCandidate, setCandidates}}>
      {children}
    </CandidatesContext.Provider>
  );
}

function useCandidatesContext() {
  return useContext(CandidatesContext);
}

export {CandidatesContext, CandidatesProvider, useCandidatesContext};
