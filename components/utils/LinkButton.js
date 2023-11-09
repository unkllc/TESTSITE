import Link from 'next/link';
import styles from '../../styles/ultisCss/LinkButton.module.css';

function LinkButton(props) {
  return (
    <Link href={props.href}>
      <a target={props.target} className={styles.LinkButton}>
        {props.text}
      </a>
    </Link>
  );
}
export default LinkButton;
