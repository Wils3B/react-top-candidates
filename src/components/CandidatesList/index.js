import styles from './candidates-list.module.css';
import CandidateCard from '../CandidateCard';

function CandidatesList(props) {
  const {candidates} = props;

  return (
    <div className={styles.candidatesList}>
      {candidates.map((candidate) => (
        <CandidateCard candidate={candidate} key={candidate.id} />
      ))}
    </div>
  );
}

export default CandidatesList;
