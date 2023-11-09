import React, { useState } from 'react';
import styles from './SectionCheckCard.module.css';
import ModalForm from './ModalForm';

function SectionCheckCard() {
  const [open, setOpen] = useState(false);
  function openModal() {
    setOpen(!open);
  }
  return (
    <>
      <ModalForm show={open} />
      <div className={styles.Container}>
        <div className={styles.CardWrap}>
          <div className={styles.Card}>
            <div className={styles.CardHeader}>
              <span>ASSINE IBRA+</span>
            </div>
            <div className={styles.CardBody}>
              <div className={styles.listWrap}>
                <div className={styles.listItem}>
                  <img src="/icons/check.svg" alt="" />
                  <span>+ 500 cursos</span>
                </div>
                <div className={styles.listItem}>
                  <img src="/icons/check.svg" alt="" />
                  <span>E-books</span>
                </div>
                <div className={styles.listItem}>
                  <img src="/icons/check.svg" alt="" />
                  <span>Certificado Digital</span>
                </div>
                <div className={styles.listItem}>
                  <img src="/icons/check.svg" alt="" />
                  <span>Acesso Ilimitado</span>
                </div>
                <div className={styles.listItem}>
                  <img src="/icons/check.svg" alt="" />
                  <span>Material Multimídia</span>
                </div>
                <div className={styles.listItem}>
                  <img src="/icons/check.svg" alt="" />
                  <span>Estude onde e quando quiser</span>
                </div>
                <div className={styles.listItem}>
                  <img src="/icons/check.svg" alt="" />
                  <span>7 dias de teste grátis.</span>
                </div>
              </div>
            </div>
            <div className={styles.CardFooter}>
              <button onClick={() => openModal()}>
                <img src="/svgs/priceCard.svg" width={80} />
              </button>
              <span>
                *Pagamento pelo cartão de crédito | *Cobrança recorrente. |
                Prazo de 7 dias de arrependimento, conforme o código de defesa
                do consumidor (CDC).
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionCheckCard;
