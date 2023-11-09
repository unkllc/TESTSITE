import { useContext } from 'react';
import LinkButton from './LinkButton';
import styles from '../../styles/ultisCss/ExtraCard.module.css';
import FilterContext from '../../services/FilterContext';

function ExtraCards() {
  const { setFilter } = useContext(FilterContext);
  return (
    <>
      <div className={styles.Description}>
        <p>Escolha a modalidade que mais se adequa ao seu perfil</p>
      </div>
      <div className={styles.gridCards}>
        <div className={`${styles.Card} ${styles.Red}`}>
          <div className={styles.cardHeader}>
            <span>Cursos Livres por Assinatura</span>
          </div>
          <div className={styles.cardBody}>
            <ul>
              <li>Acesso à mais de 500 cursos de forma ilimitada</li>
              <li>
                Certificados emitidos de forma automática após cumprimento do
                tempo mínimo e finalização do curso
              </li>
              <li>Cursos válidos como horas complementares</li>
              <li>Plataforma Streaming 100% virtual</li>
            </ul>
          </div>
          <div className={styles.cardFooter}>
            <LinkButton href="/inscreva-se/ibra+" text="Saiba mais" />
          </div>
        </div>
        <div className={styles.Card}>
          <div className={styles.cardHeader}>
            <span>EJA</span>
          </div>
          <div className={styles.cardBody}>
            <ul>
              <li>
                O estudo é feito de forma 100% online ( EAD) e não tem nenhum
                encontro presencial.
              </li>
              <li>Conclusão em 6 meses.</li>
              <li>
                Metodologia e estratégias diferenciadas para jovens e adultos.
              </li>
            </ul>
          </div>
          <div className={styles.cardFooter}>
            <a
              onClick={() => {
                setFilter({ open: true, tipo_id: 4 });
              }}
              className={styles.LinkButton}
            >
              R$99,00/mês
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default ExtraCards;
