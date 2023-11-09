import { useEffect, useState, useContext } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/CoursesView.module.css';
import GradCards from './utils/GradCards';
import PosCard from './utils/PosCard';
import CompCard from './utils/CompCard';
import CourseCard from './utils/CourseCard';
import Filter from './utils/Filter';
import FilteredCards from './utils/FilteredCards';
import FilterContext from '../services/FilterContext';
import SectionHeader from './utils/SectionHeader';
import ExtraCards from './utils/ExtraCards';

function CoursesView() {
  const [isLoad, setLoad] = useState(false);
  const { filter, setFilter, cursos, promotions, handleSubmit, seeMore } =
    useContext(FilterContext);
  const { tipo, faculdade, tipo_id } = useRouter().query;

  useEffect(() => {
    if (tipo == 'graduacao') {
      setFilter({ ...filter, tipo_id: 8 });
    }
    if (tipo == 'pos') {
      setFilter({ ...filter, tipo_id: 1 });
    }
    if (tipo == 'complementacao') {
      setFilter({ ...filter, tipo_id: 2 });
    }
    if (faculdade != undefined) {
      setFilter({
        ...filter,
        open: true,
        faculdades: faculdade,
        tipo_id: tipo_id,
      });
    }
  }, [tipo, faculdade]);

  useEffect(() => {
    if (filter.curso_categoria || filter.tipo_id || filter.faculdades) {
      handleSubmit();
    }
  }, [filter]);
  return (
    <>
      <SectionHeader title="Cursos" ibraName="IBRA" />
      <section id={styles.sectionCourses}>
        <Filter />
      </section>
      {filter.open && cursos ? (
        <FilteredCards cursos={cursos} paginate={seeMore} />
      ) : (
        <section>
          <div className="container">
            {filter.tipo_id == 8 || filter.tipo_id == 12 ? <GradCards /> : ''}
            {filter.tipo_id == 2 || filter.tipo_id == 3 ? <CompCard /> : ''}
            {filter.tipo_id == 1 ? <PosCard /> : ''}
            {filter.tipo_id == 4 ||
            filter.tipo_id == 5 ||
            filter.tipo_id == 9 ? (
              <ExtraCards />
            ) : (
              ''
            )}
          </div>
          <div className={styles.courseListConatiner}>
            <header>
              <h5 className={styles.courseCardsHeader}>Em alta</h5>
            </header>
            <div className={styles.courseCards}>
              {isLoad
                ? ''
                : cursos.map((curso) => (
                    <CourseCard
                      key={curso.id}
                      name={curso.nome}
                      tipo={curso.curso_categoria}
                      logo={
                        curso.faculdades[0].logo
                          ? 'https://ibranet.ibraeducacional.com.br/disk/' +
                            curso.faculdades[0].logo
                          : ''
                      }
                      nivel={curso.tipo}
                      area={curso.categoria.nome}
                      horas={`${curso.horas} ${curso.time}`}
                      link={'/course-single/' + curso.id}
                      objetivo={curso.objetivos}
                      src={
                        'https://ibranet.ibraeducacional.com.br/disk/' +
                        curso.img
                      }
                    />
                  ))}
            </div>
            {isLoad ? (
              ''
            ) : (
              <div className={styles.seeMore}>
                <button onClick={() => seeMore()}>Ver Mais</button>
              </div>
            )}
          </div>
          <div className={styles.courseListConatiner}>
            <header>
              <h5 className={styles.courseCardsHeader}>Em Promoção</h5>
            </header>
            <div className={styles.courseCards}>
              {isLoad
                ? ''
                : promotions.map((curso) => (
                    <CourseCard
                      key={curso.id}
                      name={curso.nome}
                      tipo={curso.curso_categoria}
                      logo={
                        curso.faculdades[0].logo
                          ? 'https://ibranet.ibraeducacional.com.br/disk/' +
                            curso.faculdades[0].logo
                          : ''
                      }
                      area={curso.categoria.nome}
                      nivel={curso.tipo}
                      horas={`${curso.horas} ${curso.time}`}
                      link={'/course-single/' + curso.id}
                      objetivo={curso.objetivos}
                      src={
                        'https://ibranet.ibraeducacional.com.br/disk/' +
                        curso.img
                      }
                    />
                  ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
export default CoursesView;
