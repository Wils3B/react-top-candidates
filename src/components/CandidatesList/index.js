import styles from './candidates-list.module.css';
import CandidateCard from '../CandidateCard';

function CandidatesList(props) {
  const {candidates} = props;

  return (
    <>
      {candidates && candidates.length ? (
        <div className={styles.candidatesList}>
          {candidates.map((candidate) => (
            <CandidateCard candidate={candidate} key={candidate.id} />
          ))}
        </div>
      ) : (
        <div className={styles.noResults}>😔 Nothing to display</div>
      )}
    </>
  );
}

export default CandidatesList;
