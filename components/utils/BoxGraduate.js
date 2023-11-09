import styles from '../../styles/Diploma.module.css';

function BoxGraduate({ diplomado, curso, titulo, dtColacao, livro, folha, registro, processo, nDiploma, dtRegistro }) {
    return (
        <>
            <div className={styles.boxGraduateAll}>
                <div className={styles.boxGraduate}>
                    <h2>Diplomado</h2>
                    <p>{diplomado}</p>
                </div>

                <div className={styles.boxGraduate}>
                    <h2>Curso</h2>
                    <p>{curso}</p>
                </div>

                <div className={styles.boxGraduate}>
                    <h2>Título</h2>
                    <p>{titulo}</p>
                </div>

                <div className={styles.boxGraduate}>
                    <h2>Data da colação</h2>
                    <p>{new Date(dtColacao).toLocaleString().split(',')[0]}</p>
                </div>

                <div className={styles.boxGraduate}>
                    <h2>Livro</h2>
                    <p>{livro}</p>
                </div>

                <div className={styles.boxGraduate}>
                    <h2>Folha</h2>
                    <p>{folha}</p>
                </div>

                <div className={styles.boxGraduate}>
                    <h2>Registro</h2>
                    <p>{registro}</p>
                </div>
                <div className={styles.boxGraduate}>
                    <h2>Processo</h2>
                    <p>{processo}</p>
                </div>
                <div className={styles.boxGraduate}>
                    <h2>Número do diploma</h2>
                    <p>{nDiploma}</p>
                </div>
                <div className={styles.boxGraduate}>
                    <h2>Data do registro</h2>
                    <p>{new Date(dtRegistro).toLocaleString().split(',')[0]}</p>
                </div>
            </div>
        </>
    )
}

export default BoxGraduate;