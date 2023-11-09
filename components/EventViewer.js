import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import reactHtmlParser from 'react-html-parser';
import styles from '../styles/EventViewer.module.css';
import LinkButton from './utils/LinkButton';
import { findEvent } from '../services/helpers';

function EventViewer({ slug }) {
  const [isLoad, setLoad] = useState(true);
  const [event, setEvent] = useState({});
  const link = useRouter();

  async function getSingleEvent() {
    try {
      setLoad(true);
      const data = await findEvent(slug);
      console.log(data);
      setEvent(data[0]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoad(false);
    }
  }

  useEffect(() => {
    if (slug) {
      getSingleEvent();
    }
  }, [slug]);

  return (
    <>
      {isLoad ? (
        <>
          <div className="basic"></div>
        </>
      ) : (
        <>
          <section className={styles.backgroundImage}>
            <div
              className={styles.courseImage}
              style={{
                backgroundImage:
                  'url(https://ibranet.ibraeducacional.com.br/disk/' +
                  event.featured_image +
                  ')',
              }}
            >
              <div className={styles.imageText}>
                <strong>{event.title}</strong>
              </div>
            </div>
          </section>

          <section className={styles.tabSection}>
            <div className={styles.courseContainer}>
              {reactHtmlParser(event.body_content)}
            </div>
          </section>
          {event.link_vimeo && (
            <section className={styles.tabSection}>
              <div className={styles.vimeo}>
                <iframe
                  title="vimeo-player"
                  src={`https://player.vimeo.com/video/640087063`}
                  height="500"
                  width="100%"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            </section>
          )}
        </>
      )}
    </>
  );
}
export default EventViewer;
