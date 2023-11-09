import { useState, useEffect } from 'react';

import styles from '../styles/Home.module.css';
import Api from '../services/Api';
import SectionCarousel from '../components/SectionCarousel';
import SectionCarouselEvents from '../components/SectionCarouselEvents';
import SectionCards from '../components/SectionCards';
import SectionVideo from '../components/SectionVideo';
import SectionUnities from '../components/SectionUnities';
import SectionEad from '../components/SectionEad';
import SectionSlider from '../components/SectionTestimonials';
import { SectionVideoInstitutional } from '../components/SectionVideoInstitutional';
import CarouselEvents from '../components/utils/CarouselEvents';


export default function Home() {
  const [isLoad, setLoad] = useState(false);
  const [banner, setBanner] = useState('');

  async function getBanner() {
    try {
      setLoad(true);
      const { data } = await Api.get('/get-banner');
      setBanner(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoad(false);
    }
  }

  useEffect(() => {
    getBanner();
  }, []);

  const mockEvents = [
    {
      id: 1,
      title: "Evento 1",
      description: "Descrição do Evento 1",
      image: "https://source.unsplash.com/random" // Exemplo de imagem placeholder
    },
    {
      id: 2,
      title: "Evento 2",
      description: "Descrição do Evento 2",
      image: "https://source.unsplash.com/random"
    },
    {
      id: 3,
      title: "Evento 3",
      description: "Descrição do Evento 3",
      image: "https://source.unsplash.com/random"
    },
    {
      id: 4,
      title: "Evento 4",
      description: "Descrição do Evento 4",
      image: "https://source.unsplash.com/random"
    },
    {
      id: 5,
      title: "Evento 5",
      description: "Descrição do Evento 5",
      image: "https://source.unsplash.com/random"
    },
    {
      id: 6,
      title: "Evento 6",
      description: "Descrição do Evento 6",
      image: "https://source.unsplash.com/random"
    },
    {
      id: 7,
      title: "Evento 7",
      description: "Descrição do Evento 7",
      image: "https://source.unsplash.com/random"
    },
    {
      id: 8,
      title: "Evento 8",
      description: "Descrição do Evento 8 TESTE 123",
      image: "https://source.unsplash.com/random"
    },
];
  
  return (
    <>
      {isLoad ? (
        <div className="basic"></div>
      ) : (
        <div
          style={{
            backgroundImage: `url(https://ibranet.ibraeducacional.com.br/disk/${banner})`,
          }}
          className={styles.backgroundImageHome}
        >
          {/* {<div className={styles.infos}>
          <div className={styles.textWrap1}>
            <span className={styles.text1}>ESQUENTA</span>
            <br />
            <span className={styles.text2}>BLACK</span>
            <br />
            <span className={styles.text3}>FRIDAY</span>
          </div>
          <div className={styles.textWrap2}>
            <span className={styles.text4}>COBRIMOS</span>
            <br />
            <span className={styles.text5}>QUALQUER</span>
            <br />
            <span className={styles.text6}>OFERTA</span>
            <br /
            <span className={styles.text7}>DO BRASIL</span>
          </div>
        </div> } */}
        </div>
      )}
      <SectionCarousel />
      <SectionCards />
      <CarouselEvents events={mockEvents} />
      <SectionVideo />
      <SectionUnities />
      <SectionEad />
      <SectionCarouselEvents />
      <SectionSlider />
      
      <SectionVideoInstitutional />
    </>
  );
}
