import React from 'react';
import styles from './SectionCards.module.css';

function SectionCards() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.backgroundImage}>
          <div className={styles.flexContainer}>
            <div className={styles.Card}>
              <img src="/svgs/SectionCards/educacao2.svg" />
              <span>+ 500 cursos</span>
            </div>
            <div className={styles.Card}>
              <img src="/svgs/SectionCards/educacao1.svg" />
              <span>Acesso Ilimitado</span>
            </div>
            <div className={styles.Card}>
              <img src="/svgs/SectionCards/educacao5.svg" />

              <span>Certificado Digital </span>
            </div>
            <div className={styles.Card}>
              <img src="/svgs/SectionCards/educacao4.svg" />
              <span>100% Online</span>
            </div>
            <div className={styles.Card}>
              <img src="/svgs/SectionCards/educacao3.svg" />
              <span>Material Multimídia</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionCards;
