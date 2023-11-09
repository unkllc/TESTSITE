import styles from '../../styles/ultisCss/Card.module.css';
import Image from 'next/image';

function Card(props) {
  return (
    <div className={styles.card}>
      <div className="cardHeader">
        <Image
          src={props.srcImg}
          layout="responsive"
          width="330"
          height="130"
        />
      </div>
      <div className={styles.cardBody}>
        <p>{props.text}</p>
        <button className={styles.LinkButton}>{props.linkText}</button>
      </div>
    </div>
  );
}
export default Card;
