import Image from 'next/image';
import LinkButton from './utils/LinkButton';
import SectionHeader from './utils/SectionHeader';
import styles from '../styles/CurriculumView.module.css';

function CurriculumView() {
  return (
    <>
      <SectionHeader title="Trabalhe Conosco" ibraName="IBRA" />
      <section id={styles.curriculumSection}>
        <div className="container">
          <div className={styles.Curriculums}>
            <div className={styles.Card}>
              <div className={styles.vagas_img}></div>
              <div className={styles.cardBody}>
                <span>Vagas Abertas</span>
                <p>VEJA AQUI AS VAGAS DISPONÍVEIS</p>
                <LinkButton href="/vagas" text="Saiba mais" />
              </div>
            </div>
            <div className={styles.Card}>
              <div className={styles.banco_img}></div>
              <div className={styles.cardBody}>
                <span>Banco de curriculos</span>
                <p>CADASTRE-SE NO NOSSO BANCO DE TALENTOS</p>
                <LinkButton href="/banco" text="Saiba mais" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default CurriculumView;
