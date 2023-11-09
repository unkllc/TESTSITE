import { useState, useEffect } from 'react';
import Carousel from '../components/utils/Carousel';
import styles from '../styles/SectionCarousel.module.css';
import { getBestCourses } from '../services/helpers';

function SectionCarousel() {
  const [cursos, setCursos] = useState([]);
  const [isLoad, setLoad] = useState(true);

  async function getCursos() {
    try {
      setLoad(true);
      setCursos(await getBestCourses());
    } catch (error) {
      console.log(error);
    } finally {
      setLoad(false);
    }
  }
  useEffect(() => {
    getCursos();
  }, []);

  return (
    <section id={styles.Carousel}>
      <header className={styles.carouselHeader}>
        <span>Mais acessados</span>
      </header>
      {isLoad ? '' : <Carousel cards={cursos} />}
    </section>
  );
}

export default SectionCarousel;
