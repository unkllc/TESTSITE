import React, { useState } from 'react';
import ModalForm from './ModalForm';
import styles from './SectionThirt.module.css';

function SectionThirt() {
  const [open, setOpen] = useState(false);
  function openModal() {
    setOpen(!open);
  }
  return (
    <>
      <ModalForm show={open} />
      <header className={styles.sectionHeader}>
        <div className={styles.textWrap}>
          <span>+ de 500 cursos</span>
          <span>+ de 5.000 aulas</span>
        </div>
        <div className={styles.buttonWrap}>
          <button onClick={() => openModal()}>Assine agora!</button>
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.flexContainer}>
          <div className={styles.video}>
            <video controls poster="/images/ibramais.png">
              <source type="video/mp4" src="/videos/ibramais.mp4" />
            </video>
          </div>
          <div className={styles.content}>
            <div className={styles.textContent}>
              <p>
                <strong>Mais do que uma plataforma Streaming de cursos</strong>,
                a Ibra+ é a experiência completa de capacitação profissional e
                desenvolvimento pessoal.
              </p>
              <p>
                Na IBRA+ você terá <strong>ACESSO ILIMITADO</strong> a cursos
                que tornarão o seu currículo irresistível!
              </p>
            </div>
            <button onClick={() => openModal()}>Assine agora!</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionThirt;
