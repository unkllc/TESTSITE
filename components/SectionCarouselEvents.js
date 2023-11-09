import { useState, useEffect } from 'react';
import CarouselEvents from './utils/CarouselEvents';
import styles from '../styles/SectionCarouselEvents.module.css';
import { getEvents } from '../services/helpers';

function SectionCarouselEvents() {
  const [events, setEvents] = useState([]);
  const [isLoad, setLoad] = useState(true);
  const [show, setShow] = useState(false);

  async function getAllEvents() {
    try {
      setLoad(true);
      setEvents(await getEvents());
    } catch (error) {
      console.log(error);
    } finally {
      setLoad(false);
    }
  }
  useEffect(() => {
    getAllEvents();
  }, []);
  useEffect(() => {
    if (events.length > 0) {
      setShow(true);
    }
  }, [events]);

  return (
    <section id={styles.Carousel}>
      {show ? (
        <>
          <header className={styles.carouselHeader}>
            <span>Acontece na Faculdade IBRA</span>
          </header>
          {isLoad ? '' : <CarouselEvents cards={events} />}
        </>
      ) : (
        ''
      )}
    </section>
  );
}

export default SectionCarouselEvents;
