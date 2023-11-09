import styles from '../../styles/ultisCss/ModalEvents.module.css'

function EventModal({ isOpen, onClose, event }) {
    if (!isOpen) return null; // Esta linha garante que, se o modal não estiver aberto, ele não retornará nada

    return (
        <div className={`${styles.modalOverlay} ${isOpen ? styles.isOpen : ''}`}>
            <div className={styles.modalContent}>
                {event ? (
                    <>
                        <h3>{event.title}</h3>
                        <div className={styles.imageContainer}>
                            <img className={styles.eventImage} src={event.image} alt={event.title} />
                        </div>
                        <p>{event.description}</p>
                        <button onClick={onClose}>Fechar</button>
                    </>
                ) : (
                    <p>Loading...</p> // Ou outra mensagem padrão/exibição de erro caso "event" esteja ausente
                )}
            </div>
        </div>
    );
}

export default EventModal;
