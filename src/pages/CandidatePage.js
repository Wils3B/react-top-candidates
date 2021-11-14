import React from 'react';
import {useParams} from 'react-router-dom';
import {useCandidatesContext} from '../contexts/CandidatesContext';
import CandidateCard from '../components/CandidateCard';
import ListType from '../enums/ListType';

function CandidatePage() {
  const {candidateId} = useParams();
  const candidatesContext = useCandidatesContext();

  const candidate = candidatesContext.getCandidate(candidateId);

  function sendToShortlist() {
    candidatesContext.updateCandidate(candidateId, { ...candidate, list: ListType.SHORT_LIST });
  }

  function sendToRejectedList() {
    candidatesContext.updateCandidate(candidateId, { ...candidate, list: ListType.REJECTED });
  }
  return (
    <>
      {candidate ? (
        <div className="container">
          <h1>Candidate {candidate.name}, List: { candidate.list }</h1>
          <div className="mw300">
            <CandidateCard candidate={candidate} />
          </div>
          <button className="btn btn-blue mr10" onClick={sendToShortlist}>Shortlist</button>
          <button className="btn btn-red" onClick={sendToRejectedList}>Reject</button>
        </div>
      ) : (
        <div>Candidate with id {candidateId} Not found</div>
      )}
    </>
  );
}

export default CandidatePage;
