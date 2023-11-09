import { useContext } from 'react';
import styles from '../../styles/ultisCss/CompCard.module.css';
import FilterContext from '../../services/FilterContext';

function CompCard() {
  const { setFilter } = useContext(FilterContext);
  return (
    <>
      <div className={styles.Description}>
        <p>Escolha a modalidade que mais se adequa ao seu perfil</p>
      </div>
      <div className={styles.gridCards}>
        <div className={styles.Card}>
          <div className={styles.cardHeader}>
            <span>Formação de Professores</span>
          </div>
          <div className={styles.cardBody}>
            <ul>
              <li>
                Se você é bacharel e deseja se tornar professor, o curso de
                Formação Pedagógica é ideal para você.
              </li>
              <li>Torne-se professor em 6 meses!</li>
            </ul>
          </div>
          <div className={styles.cardFooter}>
            <a
              onClick={() => {
                setFilter({ open: true, tipo_id: 3 });
              }}
              className={styles.LinkButton}
            >
              R$99,00/mês
            </a>
          </div>
        </div>
        <div className={styles.Card}>
          <div className={styles.cardHeader}>
            <span>Segunda Licenciatura</span>
          </div>
          <div className={styles.cardBody}>
            <ul>
              <li>
                Se você já tem um diploma de licenciatura, e deseja se licenciar
                em uma nova área, esse é o curso ideal pra você!
              </li>
              <li>Sua segunda licenciatura em 6 meses!</li>
            </ul>
          </div>
          <div className={styles.cardFooter}>
            <a
              onClick={() => {
                setFilter({ open: true, tipo_id: 2 });
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
export default CompCard;
