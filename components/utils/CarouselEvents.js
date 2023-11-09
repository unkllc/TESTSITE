
import { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/ultisCss/Carousel.module.css';

function CarouselEvents(props) {
  const { cards } = props;
  const carousel = useRef(null);
  const item = useRef(null);

  const goToLeft = () => {
    carousel.current.scrollLeft -= item.current.offsetWidth + 26;
  };

  const goToRight = () => {
    carousel.current.scrollLeft += item.current.offsetWidth + 26;
  };

  return (
    <div className={styles.carousel_container}>
      <div className={styles.carousel} ref={carousel}>
        {cards.map((card, index) => (
          <div className={styles.carousel_item} ref={item} key={index}>
            <div
              className={styles.carousel_item_img}
              style={{
                backgroundImage:
                  'url(https://ibranet.ibraeducacional.com.br/disk/' +
                  card.featured_image +
                  ')',
              }}
            ></div>
            <div className={styles.carousel_item_desc}>
              <strong>{card.title}</strong>
              <Link href={'eventos/' + card.slug}>
                <a className={styles.carousel_link}>Ver Evento</a>
              </Link>
            </div>
          </div>
        ))}
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
  );

}

export default CarouselEvents;
