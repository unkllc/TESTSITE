import React, { useState } from 'react';
import ModalForm from './ModalForm';
import styles from './SectionOne.module.css';

function SectionOne() {
  const [open, setOpen] = useState(false);
  function openModal() {
    setOpen(!open);
  }
  return (
    <>
      <ModalForm show={open} />
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.infos}>
            <img src="/svgs/IBRA+.svg" />
            <span>
              <i className={styles.arrow} />
              Sua plataforma de cursos online
            </span>
            <span>
              <i className={styles.arrow} />
              Acesso ilimitado
            </span>
            <span>
              <i className={styles.arrow} />
              Estude onde e quando quiser!
            </span>
            <span>
              <i className={styles.arrow} />
              <b>7 dias</b> de teste grátis
            </span>
          </div>
          <div className={styles.text}>
            <span>
              <strong>Use o cupom de desconto:</strong> IBRA+
            </span>
            <div className={styles.priceWrap}>
              <img src="/svgs/price.svg" alt="" />
            </div>

            <button onClick={() => openModal()}>Assine agora!</button>
            <label>
              Prazo de 7 dias de arrependimento, conforme o código de defesa do
              consumidor (CDC).
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionOne;
