import styles from '../../styles/ultisCss/Modal.module.css';

function Modal({ open, children, header, closethis }) {
  if (!open) {
    return null;
  }
  return (
    <div className={styles.modal}>
      <div className={styles.modalDialog}>
        <div className={styles.modalClose} onClick={closethis}>
          <img src="/icons/close.svg" width="12" height="12" />
        </div>
        <div className={styles.modalHeader}>
          <h4>{header}</h4>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}
export default Modal;
