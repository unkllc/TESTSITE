import React from 'react';
import styles from './SectionFour.module.css';

function SectionFour() {
  return (
    <div className={styles.Container}>
      <div className={styles.ListWrap}>
        <div className={styles.Item}>
          <img src="/icons/hourglass.svg" />
          <span>
            Cursos válidos como horas extracurriculares e para prova de títulos.
          </span>
        </div>
        <div className={styles.Item}>
          <img src="/icons/book-mark.svg" />
          <span>Certificados válidos em todo território nacional.</span>
        </div>
        <div className={styles.Item}>
          <img src="/icons/certificate.svg" />
          <span>
            Garanta quantos certificados quiser, de forma automática, ao
            finalizar cada curso.
          </span>
        </div>
        <div className={styles.Item}>
          <img src="/icons/play.svg" />
          <span>
            Aprenda com vídeos: onde, quando, da forma que quiser e quantas
            vezes quiser.
          </span>
        </div>
      </div>
    </div>
  );
}

export default SectionFour;
