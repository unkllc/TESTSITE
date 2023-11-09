import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';
import { getUnities } from '../services/helpers';
import styles from '../styles/SectionUnities.module.css';

function SectionUnities() {
  const [unities, setUnity] = useState([]);
  const [isLoad, setLoad] = useState(true);

  const carousel = useRef(null);
  const item = useRef(null);

  const goToLeft = () => {
    carousel.current.scrollLeft -= item.current.offsetWidth + 26;
  };
  const goToRight = () => {
    carousel.current.scrollLeft += item.current.offsetWidth + 26;
  };
  async function getUnity() {
    try {
      setLoad(true);
      setUnity(await getUnities());
    } catch (error) {
      console.log(error);
    } finally {
      setLoad(false);
    }
  }

  useEffect(() => {
    getUnity();
  }, []);

  return (
    <section id={styles.Unities}>
      <div className="container">
        <h2>Todas as nossas faculdades!</h2>
      </div>
      <div className="relative">
        <div className={styles.carousel_container} ref={carousel}>
          <div className={styles.carousel}>
            {isLoad
              ? ''
              : unities.map((unity) => (
                  <Link href={unity.site} key={unity.id}>
                    <a target="_blank" className={styles.item} ref={item}>
                      <span className={styles.unity_name}>{unity.nome}</span>
                      <div
                        className={styles.img}
                        style={{
                          backgroundImage:
                            'url(https://ibranet.ibraeducacional.com.br/disk/' +
                            unity.faculdade_img +
                            ')',
                            backgroundPosition: 'center'
                        }}
                      ></div>
                    </a>
                  </Link>
                ))}
          </div>
          <div className={styles.carousel_controls}>
            <button onClick={goToLeft}>
              <Image width="12" height="12" src="/icons/prev.svg" />
            </button>
            <button onClick={goToRight}>
              <Image width="12" height="12" src="/icons/next.svg" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default SectionUnities;
