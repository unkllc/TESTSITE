import React from 'react';
import styles from '../../styles/CoursesView.module.css';
import CourseCard from './CourseCard';

function FilteredCards({ cursos, paginate }) {
  return (
    <section>
      <div className={styles.courseListConatiner} id={styles.filteredContainer}>
        <header>
          <h5 className={styles.courseCardsHeader}>Cursos</h5>
        </header>
        <div className={styles.courseCards}>
          {cursos[0]
            ? cursos.map((curso) => (
              <CourseCard
                key={curso.id}
                name={curso.nome}
                tipo={curso.curso_categoria}
                logo={(curso.faculdades[0].logo ? 'https://ibranet.ibraeducacional.com.br/disk/' + curso.faculdades[0].logo : '')}
                nivel={curso.tipo}
                area={curso.categoria.nome}
                horas={`${curso.horas} ${curso.time}`}
                link={'/course-single/' + curso.id}
                objetivo={curso.objetivos}
                src={
                  'https://ibranet.ibraeducacional.com.br/disk/' + curso.img
                }
              />
            ))
            : 'Não há cursos para esse filtro'}
        </div>
        <div className={styles.seeMore}>
          <button onClick={() => paginate()}>Ver Mais</button>
        </div>
      </div>
    </section>
  );
}

export default FilteredCards;
