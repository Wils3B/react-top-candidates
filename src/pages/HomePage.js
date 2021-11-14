import React, {useMemo} from 'react';
import {useCandidatesContext} from '../contexts/CandidatesContext';
import CandidatesList from '../components/CandidatesList';

function HomePage() {
  const candidatesContext = useCandidatesContext();
  const candidates = useMemo(
    () => candidatesContext.getCandidates({name: candidatesContext.searchText}),
    [candidatesContext.candidates, candidatesContext.searchText]
  );

  return (
    <div className="container">
      {candidatesContext.searchText && <h3>Search results, {candidates.length} results</h3>}
      <div>
        <h1>All candidates</h1>
        <CandidatesList candidates={candidates} />
      </div>
    </div>
  );
}

export default HomePage;
