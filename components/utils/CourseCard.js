import LinkButton from './LinkButton';
import styles from '../../styles/ultisCss/CourseCard.module.css';
import reactHtmlParser from 'react-html-parser';

function CourseCard({
  src,
  name,
  horas,
  area,
  tipo,
  logo,
  objetivo,
  link,
  nivel,
}) {
  const tipo_curso = (function () {
    if (tipo == 1) {
      return 'Curso Essencial';
    }
    if (tipo == 2) {
      return 'Curso Avançado';
    }
    if (tipo == 3) {
      return 'Curso Premium';
    }
  })();
  return (
    <div className={styles.Card}>
      <div className={styles.cardBody}>
        <div
          className={styles.cardImg}
          style={{ backgroundImage: `url(${src})` }}
        >
          {logo != '' ? (
            <div className={styles.logo}>
              <img src={logo} alt="logo" />
            </div>
          ) : null}
        </div>
        <div className={styles.cardInfo}>
          <strong>{name}</strong>
          <div className={styles.infos}>
            {nivel.id == 1 ? (
              <div tipocurso={tipo} className={styles.tipo}>
                {tipo_curso}
              </div>
            ) : (
              <div>{nivel.nome}</div>
            )}
            <div>{area}</div>
            <div>{horas}</div>
          </div>
          <p>{reactHtmlParser(objetivo)}</p>
          <LinkButton href={link} text="Ver mais" />
        </div>
      </div>
    </div>
  );
}
export default CourseCard;
