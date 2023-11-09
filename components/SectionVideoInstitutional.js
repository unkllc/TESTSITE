import styles from '../styles/SectionVideoInstitutional.module.css';

export function SectionVideoInstitutional() {
  return (
    <section id={styles.video}>
      <iframe
        width="100%"
        title="vimeo-player"
        src="https://player.vimeo.com/video/740364214"
        frameBorder={0}
        allowFullScreen
      ></iframe>
    </section>
  );
}
