import React, { useState, useEffect } from 'react';
import styles from './SectionCarousel.module.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { getTestimonialsIbra } from '../../services/helpers';

// const carouselItems = [
//   {
//     id: 1,
//     title: '1',
//     price: 10,
//     category: 'asdfa',
//   },
//   {
//     id: 1,
//     title: '2',
//     price: 10,
//     category: 'asdfa',
//   },
//   {
//     id: 1,
//     title: '3',
//     price: 10,
//     category: 'asdfa',
//   },
//   {
//     id: 1,
//     title: '4',
//     price: 10,
//     category: 'asdfa',
//   },
//   {
//     id: 1,
//     title: '5',
//     price: 10,
//     category: 'asdfa',
//   },
//   {
//     id: 1,
//     title: '6',
//     price: 10,
//     category: 'asdfa',
//   },
// ];

function SectionCarousel() {
  const [carouselItems, setTestimonials] = useState([]);

  async function getData() {
    try {
      setTestimonials(await getTestimonialsIbra());
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getData();
  }, []);

  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '30%',
    slidesToShow: 1,
    speed: 300,
    nextArrow: <div className={styles.Teste}></div>,
    responsive: [
      {
        breakpoint: 320,
        settings: {
          centerPadding: '5%',
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          centerPadding: '10%',
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerPadding: '20%',
        },
      },
      {
        breakpoint: 1024,
        settings: {
          centerPadding: '25%',
        },
      },
    ],
  };

  return (
    <div className={styles.backgroundImage}>
      <div className={styles.Container}>
        <h3>Depoimentos</h3>
        <Slider {...settings}>
          {carouselItems.map((item) => (
            <div key={item.id}>
              <div className={styles.card}>
                <div className={styles.cardWrap}>
                  <dir className={styles.cardHeader}>
                    <img src={'/icons/span.svg'} />
                  </dir>
                  <div className={styles.cardBody}>
                    <p>{item.depoimento}</p>
                  </div>
                  <div className={styles.cardFooter}>
                    <div className={styles.Avatar}>
                      <div className={styles.imageWrap}>
                        <img
                          src={`https://ibranet.ibraeducacional.com.br/disk/${item.img}`}
                          alt=""
                        />
                      </div>
                      <div className={styles.avatarInfo}>
                        <span>{item.nome}</span>
                        <span>{item.curso}</span>
                      </div>
                    </div>
                    <div className={styles.starRating}>
                      <img src="/icons/star.svg" width={12} alt="" />
                      <img src="/icons/star.svg" width={12} alt="" />
                      <img src="/icons/star.svg" width={12} alt="" />
                      <img src="/icons/star.svg" width={12} alt="" />
                      <img src="/icons/star.svg" width={12} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default SectionCarousel;
