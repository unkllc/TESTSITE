
import styles from '../styles/veracity.module.css';
import SectionHeader from './utils/SectionHeader';
function VeracityView() {
  return (
    <>
      <SectionHeader title="Consulta de Veracidade" ibraName="IBRA" />
      <section>

        <div className={styles.container}>
          <iframe
            src="https://sistema.alunodigital.com.br/validardiploma.aspx?navbar=s">
          </iframe>
        </div>


      </section>
    </>
  );
}

export default VeracityView;
