import React from 'react';
import styles from './SectionTwo.module.css';

function SectionTwo() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.flexArea}>
          <div className={styles.imageArea}>
            <img src="/svgs/computer.svg" />
          </div>
          <div className={styles.infoArea}>
            <h3>Conhecimento Ilimitado </h3>
            <p>
              Assine a plataforma de streaming IBRA+ e tenha acesso a mais de
              500 cursos, válidos como horas complementares e com certificado
              expedido automaticamente, em diversas áreas do conhecimento.
            </p>
            <div className={styles.knowledges}>
              <span>Segurança Pública</span>
              <span>Saúde</span>
              <span>Educação</span>
              <span>Administração</span>
              <span>Gestão de Pessoas</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionTwo;
