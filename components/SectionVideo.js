import { useRouter } from 'next/router';
import styles from '../styles/SectionVideo.module.css';

function SectionVideo() {
  const router = useRouter();
  return (
    <section className={styles.bg}>
      <div id={styles.video}>
        <div className={styles.textcdc}>
          <span>
            • Prazo de 7 dias de arrependimento, conforme o código de defesa do
            consumidor (CDC).
          </span>
        </div>
        <div className={styles.text}>
          <img src="/svgs/IBRA+.svg" />
          <p>
            Conheça a plataforma de streaming IBRA+ e tenha acesso a mais de 500
            cursos, válidos como horas complementartes e com certificado
            expedido automaticamente, em diversas áreas do conhecimento.
          </p>
          <div className={styles.promo7}>
            <span>7 dias de teste grátis</span>
          </div>
          <button
            onClick={() => {
              router.push('/inscreva-se/ibra+');
            }}
          >
            Assine agora!
          </button>
        </div>
        <div className={styles.carousel}>
          <div className={styles.cards}>
            <div>
              <img src="/images/enfemagemibramais.png" />
              <span>Enfermagem em Urgências e Emergências Pediátricas </span>
            </div>
            <div>
              <img src="/images/gestaoibramais.png" />
              <span>Gestão de Pessoas </span>
            </div>
            <div>
              <img src="/images/legislacaoibramais.png" />
              <span>Legislação Penal </span>
            </div>
            <div>
              <img src="/images/enfemagemibramais.png" />
              <span>Psicomotricidade e Psicopedagogia </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default SectionVideo;
