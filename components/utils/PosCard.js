import { useContext } from 'react';
import styles from '../../styles/PosCard.module.css';
import FilterContext from '../../services/FilterContext';

function PosCard() {
  const { setFilter } = useContext(FilterContext);
  return (
    <>
      <div className={styles.Description}>
        <p>Escolha a modalidade que mais se adequa ao seu perfil</p>
      </div>
      <div className={styles.gridCards}>
        <div className={styles.Card}>
          <div className={styles.cardHeader}>
            <span>ESSENCIAL</span>
          </div>
          <div className={styles.cardBody}>
            <ul>
              <li>
                <img src="/svgs/xRed.svg" alt="" /> Material didático com
                metodologia IBRA (Sala de aula Invertida)
              </li>
              <li>
                <img src="/svgs/vGreen.svg" alt="" />
                E-books
              </li>
              <li>
                <img src="/svgs/xRed.svg" alt="" /> Videoaulas em todas as
                disciplinas
              </li>
             
              <li>
                <img src="/svgs/xRed.svg" alt="" />
                Laboratórios virtuais
              </li>
              <li>
                <img src="/svgs/vGreen.svg" alt="" />
                Tutores disponíveis
              </li>
              <li>
                <img src="/svgs/vGreen.svg" alt="" />
                Provas online
              </li>
              <li>
                <img src="/svgs/xRed.svg" alt="" />
                Professores renomados que ensinam com aplicações práticas
              </li>
              <li>
                <img src="/svgs/xRed.svg" alt="" /> Plataforma com total
                acessibilidade (VLIBRAS, Letras grandes, Mudança de cor para
                daltônico e legenda)
              </li>
              <li>
                <img src="/svgs/xRed.svg" alt="" />
                Games
              </li>
              <li>
                <img src="/svgs/xRed.svg" alt="" /> Infográficos
              </li>
              <li>
                <img src="/svgs/vGreen.svg" alt="" /> Curso 100% online pelo
                computador ou celular
              </li>
              <li>
                <img src="/svgs/xRed.svg" alt="" /> Tutores exclusivos
              </li>
            </ul>
          </div>
          <div className={styles.cardFooter}>
            <button
              onClick={() => {
                setFilter({ open: true, curso_categoria: 1 });
              }}
            >
              R$99,00/mês
            </button>
          </div>
        </div>
        <div className={styles.Card}>
          <div className={styles.cardHeader}>
            <span>AVANÇADO</span>
          </div>
          <div className={styles.cardBody}>
            <ul>
              <li>
                <img src="/svgs/vGreen.svg" alt="" /> Material didático com
                metodologia IBRA (Sala de aula Invertida)
              </li>
              <li>
                <img src="/svgs/vGreen.svg" alt="" />
                E-books
              </li>
              <li>
                <img src="/svgs/vGreen.svg" alt="" /> Videoaulas em todas as
                disciplinas
              </li>
              <li>
                <img src="/svgs/vGreen.svg" alt="" />
                Laboratórios virtuais
              </li>
              <li>
                <img src="/svgs/vGreen.svg" alt="" />
                Tutores disponíveis
              </li>
              <li>
                <img src="/svgs/vGreen.svg" alt="" />
                Provas online
              </li>
              <li>
                <img src="/svgs/xRed.svg" alt="" />
                Professores renomados que ensinam com aplicações práticas
              </li>
              <li>
                <img src="/svgs/vGreen.svg" alt="" /> Plataforma com total
                acessibilidade (VLIBRAS, Letras grandes, Mudança de cor para
                daltônico e legenda)
              </li>
              <li>
                <img src="/svgs/vGreen.svg" alt="" />
                Games
              </li>
              <li>
                <img src="/svgs/vGreen.svg" alt="" /> Infográficos
              </li>
              <li>
                <img src="/svgs/vGreen.svg" alt="" /> Curso 100% online pelo
                computador ou celular
              </li>
              <li>
                <img src="/svgs/xRed.svg" alt="" /> Tutores exclusivos
              </li>
            </ul>
          </div>
          <div className={styles.cardFooter}>
            <button
              onClick={() => {
                setFilter({ open: true, curso_categoria: 2 });
              }}
            >
              R$149,90/mês
            </button>
          </div>
        </div>
        <div className={styles.Card}>
          <div className={styles.cardHeader}>
            <span>PREMIUM</span>
          </div>
          <div className={styles.cardBody}>
            <ul>
              <li>
                <img src="/svgs/vGreen.svg" alt="" /> Material didático com
                metodologia IBRA (Sala de aula Invertida)
              </li>
              <li>
                <img src="/svgs/vGreen.svg" alt="" />
                E-books
              </li>
              <li>
                <img src="/svgs/vGreen.svg" alt="" /> Videoaulas em todas as
                disciplinas
              </li>
              <li>
                <img src="/svgs/vGreen.svg" alt="" />
                Laboratórios virtuais
              </li>
              <li>
                <img src="/svgs/vGreen.svg" alt="" />
                Tutores disponíveis
              </li>
              <li>
                <img src="/svgs/vGreen.svg" alt="" />
                Provas online
              </li>
              <li>
                <img src="/svgs/vGreen.svg" alt="" />
                Professores renomados que ensinam com aplicações práticas
              </li>
              <li>
                <img src="/svgs/vGreen.svg" alt="" /> Plataforma com total
                acessibilidade (VLIBRAS, Letras grandes, Mudança de cor para
                daltônico e legenda)
              </li>
              <li>
                <img src="/svgs/vGreen.svg" alt="" />
                Games
              </li>
              <li>
                <img src="/svgs/vGreen.svg" alt="" /> Infográficos
              </li>
              <li>
                <img src="/svgs/vGreen.svg" alt="" /> Curso 100% online pelo
                computador ou celular
              </li>
              <li>
                <img src="/svgs/vGreen.svg" alt="" /> Tutores exclusivos
              </li>
            </ul>
          </div>
          <div className={styles.cardFooter}>
            <button
              onClick={() => {
                setFilter({
                  open: true,
                  curso_categoria: 3,
                });
              }}
            >
              R$225,00/mês
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default PosCard;
