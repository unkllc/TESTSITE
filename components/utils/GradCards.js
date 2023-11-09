import { useContext } from 'react';
import styles from '../../styles/ultisCss/GradCards.module.css';
import FilterContext from '../../services/FilterContext';

function GradCards() {
  const { setFilter } = useContext(FilterContext);
  return (
    <>
      <div className={styles.Description}>
        <p>Escolha a modalidade que mais se adequa ao seu perfil</p>
      </div>
      <div className={styles.gridCards}>
        <div className={styles.Card}>
          <div className={styles.cardHeader}>
            <span>Graduação Online</span>
          </div>
          <div className={styles.cardBody}>
            <ul>
              <li>
                Material didático com metodologia IBRA (Sala de aula Invertida)
              </li>
              <li> E-books</li>
              <li> Dicas do professor, desafios e infográfico</li>
              <li>Na pratica (práxis x teoria)</li>
              <li>Curso 100% online</li>
              <li>Tutores disponíveis</li>
              <li>Plataforma para estudo no computador e celular</li>
              <li>Provas online</li>
              <li>Polos próximos</li>
              <li>Laboratórios físicos e virtuais</li>
              <li>
                Desenvolvimento de projetos com foco na pesquisa e extensão
              </li>
              <li>Biblioteca digital com mais de 20 mil títulos</li>
              <li>Portal com total acessibilidade</li>
            </ul>
          </div>
          <div className={styles.cardFooter}>
            <a
              onClick={() => {
                setFilter({ open: true, tipo_id: 8, modalidade: 'Online' });
              }}
              className={styles.LinkButton}
            >
              R$119,00/mês
            </a>
          </div>
        </div>
        <div className={styles.Card}>
          <div className={styles.cardHeader}>
            <span>Graduação 2.0</span>
          </div>
          <div className={styles.cardBody}>
            <ul>
              <li>Obtenção de um novo título em um prazo menor</li>
              <li>
                Grade curricular personalizada com garantia da qualidade do
                ensino ofertado
              </li>
              <li>conclusão máxima em 24 meses</li>
              <li>Provas online e Tutores exclusivos</li>
              <li>Portal com total acessibilidade</li>
              <li>Games, Infográficos e aplicações práticas</li>
              <li>Laboratórios físicos e virtuais</li>
              <li>
                Desenvolvimento de projetos com foco na pesquisa e extensão
              </li>
              <li>Biblioteca digital com mais de 20 mil títulos</li>
              <li>Polos próximos</li>
            </ul>
          </div>
          <div className={styles.cardFooter}>
            <a
              onClick={() => {
                setFilter({ open: true, tipo_id: 12, modalidade: 'Online' });
              }}
              className={styles.LinkButton}
            >
              R$199,00/mês
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default GradCards;
