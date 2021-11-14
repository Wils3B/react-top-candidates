import {Link} from 'react-router-dom';
import styles from './candidate-card.module.css';

function CandidateCard(props) {
  const {candidate} = props;
  return (
    <Link to={`/${candidate.id}`} className={styles.card}>
      <img className={styles.cardImage} alt={`${candidate.name}`} src={candidate.Image} />
      <div className={styles.cardBody}>{candidate.name}</div>
    </Link>
  );
}

export default CandidateCard;
