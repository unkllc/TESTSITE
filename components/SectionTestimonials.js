import { useState, useEffect } from 'react';
import styles from '../styles/SectionTestimonials.module.css';
import { getTestimonials } from '../services/helpers';

function SectionSlider() {
  const [Index, setIndex] = useState(1);
  const [isLoad, setLoad] = useState(false);
  const [testimonials, setTestimonials] = useState([]);

  async function getTestimonial() {
    try {
      setLoad(true);
      setTestimonials(await getTestimonials());
    } catch (error) {
      console.log(error);
    } finally {
      setLoad(false);
    }
  }

  const slideLenght = testimonials.length;

  function goRight() {
    if (Index < slideLenght) {
      setIndex(Index + 1);
    } else {
      setIndex(1);
    }
  }

  const navigate = (index) => {
    setIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(goRight, 6500);
    return () => clearInterval(interval);
  }, [Index, testimonials]);

  useEffect(() => {
    getTestimonial();
  }, []);

  return (
    <section id={styles.Slider}>
      <div className="container">
        <div className={styles.Slider}>
          {testimonials.map((testimonial, index) => {
            return (
              <blockquote
                key={testimonial.id}
                className={
                  Index === index + 1
                    ? `${styles.itemSlider} ${styles.active} `
                    : styles.itemSlider
                }
              >
                <div
                  className={
                    Index === index + 1
                      ? `${styles.itemBody} ${styles.active}`
                      : styles.itemBody
                  }
                >
                  <div className={styles.img}>
                    <img
                      src={`https://ibranet.ibraeducacional.com.br/disk/${testimonial.img}`}
                      width="100%"
                      height="100%"
                    />
                  </div>
                  <div className={styles.reverse}>
                    <strong>{testimonial.nome}</strong>
                    <div className={styles.description}>
                      <p>{testimonial.depoimento}</p>
                    </div>
                  </div>
                </div>
              </blockquote>
            );
          })}
          <div className={styles.sliderControls}>
            {Array.from({ length: slideLenght }).map((item, index) => (
              <span
                key={index}
                onClick={() => navigate(index + 1)}
                className={
                  Index == index + 1
                    ? `${styles.dot} ${styles.active}`
                    : styles.dot
                }
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionSlider;
