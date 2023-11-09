import React, { useState } from 'react';
import styles from './SectionCollege.module.css';
import ModalForm from './ModalForm';

function SectionCollege() {
  const [open, setOpen] = useState(false);
  function openModal() {
    setOpen(!open);
  }

  return (
    <>
      <ModalForm show={open} />
      <div className={styles.Container}>
        <div className={styles.Title}>
          <h3>Conheça a Faculdade:</h3>
        </div>
        <div className={styles.Content}>
          <div className={styles.imageWrap}>
            <div className={styles.img}>
              <img src="/svgs/faculdade.svg" />
            </div>
          </div>
          <div className={styles.textWrap}>
            <p>
              A Faculdade IBRA entende a educação como uma ponte no presente
              para um futuro melhor. Existimos para levar ensino de excelência a
              todos, em todos os cantos do Brasil. A Faculdade IBRA conta com 7
              unidades espalhadas pelo Brasil.
            </p>
            <p>
              Oferecemos mais de mil cursos em modalidade presencial e EAD:
              pós-graduação, complementação pedagógica, graduação, capacitação e
              EJA, todos credenciados pelo MEC.
            </p>
            <p>
              O segredo para o nosso sucesso é a convicção de que todos possuem
              direito ao conhecimento de qualidade e crescimento profissional.
            </p>
            <div className={styles.buttonWrap}>
              <button onClick={() => openModal()}>Assinar agora!</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default SectionCollege;
