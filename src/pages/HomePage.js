import React, {useMemo} from 'react';
import {useCandidatesContext} from '../contexts/CandidatesContext';
import CandidatesList from '../components/CandidatesList';

function HomePage() {
  const candidatesContext = useCandidatesContext();
  const candidatesArray = useMemo(
    () => Object.values(candidatesContext.candidates),
    [candidatesContext.candidates]
  );

  return (
    <div className="container">
      <div>Tabs</div>
      <div>
        <h1>All candidates</h1>
        <CandidatesList candidates={candidatesArray} />
      </div>
    </div>
  );
}

export default HomePage;
