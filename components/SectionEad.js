import styles from '../styles/SectionEad.module.css';
import PeopleIcon from '@mui/icons-material/People';
import ApartmentIcon from '@mui/icons-material/Apartment';
import SchoolIcon from '@mui/icons-material/School';

function SectionEad() {
  return (
    <section id={styles.Ead}>
      <div className="container">
        <h2>Educação que simplifica.</h2>
        <p className={styles.description}>
          A Faculdade IBRA entende a educação como uma ponte no presente para um
          futuro melhor. Existimos para levar ensino de excelência a todos, em
          todos os cantos do Brasil. <br />
          Cumprimos a nossa meta de uma maneira: simplificando o processo de
          aprendizagem por meio de conteúdos inovadores e de qualidade!
        </p>

        <div className={styles.Cards}>
          <div className={styles.card}>
            <div className={styles.img}>
              <SchoolIcon sx={{ fontSize: '6rem', color: '#B41218' }} />
            </div>
            <strong>+ de 1000 cursos reconhecidos pelo MEC</strong>
          </div>
          <div className={styles.card}>
            <div className={styles.img}>
              <PeopleIcon sx={{ fontSize: '6rem', color: '#B41218' }} />
            </div>
            <strong>+ de 120.000 alunos</strong>
          </div>
          <div className={styles.card}>
            <div className={styles.img}>
              <ApartmentIcon sx={{ fontSize: '6rem', color: '#B41218' }} />
            </div>
            <strong>7 unidades espalhadas pelo Brasil</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
export default SectionEad;
