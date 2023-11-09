import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/Carousel.module.css';

function Carousel() {
  const carousel = useRef(null);
  const item = useRef(null);

  const goToLeft = () => {
    carousel.current.scrollLeft -= item.current.offsetWidth + 26;
  };

  const goToRight = () => {
    carousel.current.scrollLeft += item.current.offsetWidth + 26;
  };

  return (
    <section id={styles.Carousel}>
      <header className={styles.carousel_header}>
        <span>Nossos Cursos</span>
      </header>
      <div className={styles.carousel_container}>
        <div className={styles.carousel} ref={carousel}>
          <div className={styles.carousel_item} ref={item}>
            <div className={styles.carouselItemText}>
              <span>Exatas</span>
              <span>Administração</span>
            </div>
            <Image src="/images/carousel.png" width="260" height="258" />
            <Link href="#">
              <a className={styles.carousel_link}>Ver curso</a>
            </Link>
          </div>
          <div className={styles.carousel_item}>
            <div className={styles.carouselItemText}>
              <span>Exatas</span>
              <span>Administração</span>
            </div>
            <Image src="/images/carousel.png" width="260" height="258" />
            <Link href="#">
              <a className={styles.carousel_link}>Ver curso</a>
            </Link>
          </div>
          <div className={styles.carousel_item}>
            <div className={styles.carouselItemText}>
              <span>Exatas</span>
              <span>Administração</span>
            </div>
            <Image src="/images/carousel.png" width="260" height="258" />
            <Link href="#">
              <a className={styles.carousel_link}>Ver curso</a>
            </Link>
          </div>
          <div className={styles.carousel_item}>
            <div className={styles.carouselItemText}>
              <span>Exatas</span>
              <span>Administração</span>
            </div>
            <Image src="/images/carousel.png" width="260" height="258" />
            <Link href="#">
              <a className={styles.carousel_link}>Ver curso</a>
            </Link>
          </div>
          <div className={styles.carousel_item}>
            <div className={styles.carouselItemText}>
              <span>Exatas</span>
              <span>Administração</span>
            </div>
            <Image src="/images/carousel.png" width="260" height="258" />
            <Link href="#">
              <a className={styles.carousel_link}>Ver curso</a>
            </Link>
          </div>
          <div className={styles.carousel_item}>
            <div className={styles.carouselItemText}>
              <span>Exatas</span>
              <span>Administração</span>
            </div>
            <Image src="/images/carousel.png" width="260" height="258" />
            <Link href="#">
              <a className={styles.carousel_link}>Ver curso</a>
            </Link>
          </div>
          <div className={styles.carousel_item}>
            <div className={styles.carouselItemText}>
              <span>Exatas</span>
              <span>Administração</span>
            </div>
            <Image src="/images/carousel.png" width="260" height="258" />
            <Link href="#">
              <a className={styles.carousel_link}>Ver curso</a>
            </Link>
          </div>
          <div className={styles.carousel_item}>
            <div className={styles.carouselItemText}>
              <span>Exatas</span>
              <span>Administração</span>
            </div>
            <Image src="/images/carousel.png" width="260" height="258" />
            <Link href="#">
              <a className={styles.carousel_link}>Ver curso</a>
            </Link>
          </div>
          <div className={styles.carousel_item}>
            <div className={styles.carouselItemText}>
              <span>Exatas</span>
              <span>Administração</span>
            </div>
            <Image src="/images/carousel.png" width="260" height="258" />
            <Link href="#">
              <a className={styles.carousel_link}>Ver curso</a>
            </Link>
          </div>
          <div className={styles.carousel_item}>
            <div className={styles.carouselItemText}>
              <span>Exatas</span>
              <span>Administração</span>
            </div>
            <Image src="/images/carousel.png" width="260" height="258" />
            <Link href="#">
              <a className={styles.carousel_link}>Ver curso</a>
            </Link>
          </div>
          <div className={styles.carousel_item}>
            <div className={styles.carouselItemText}>
              <span>Exatas</span>
              <span>Administração</span>
            </div>
            <Image src="/images/carousel.png" width="260" height="258" />
            <Link href="#">
              <a className={styles.carousel_link}>Ver curso</a>
            </Link>
          </div>
        </div>
        <div className={styles.carousel_controls}>
          <button className={styles.active} onClick={goToLeft}>
            <Image width="12" height="12" src="/icons/prev.svg" />
          </button>
          <button onClick={goToRight}>
            <Image width="12" height="12" src="/icons/next.svg" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Carousel;
