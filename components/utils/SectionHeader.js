import styles from '../../styles/ultisCss/SectionHeader.module.css';
function SectionHeader(props) {
  return (
    <header className={styles.sectionHeader}>
      <p>
        {props.title} <span>{props.ibraName}</span>
      </p>
    </header>
  );
}
export default SectionHeader;
