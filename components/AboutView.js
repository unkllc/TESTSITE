import styles from '../styles/AboutView.module.css';
import SectionUnities from './SectionUnities';
import SectionHeader from './utils/SectionHeader';
function AboutView() {
  return (
    <>
      <SectionHeader title="Sobre nós" ibraName="IBRA" />
      <section id={styles.About}>
        <div className={styles.video}>
          <video controls poster="/images/video.png">
            <source type="video/mp4" src="/videos/institucional.mp4" />
          </video>
        </div>
        <div className="container">
          <p>


            TESTE TESTE TESTE
          </p>
        </div>
        <SectionUnities />
        <div className="container">
          <p>
            Todos os nossos cursos são credenciados pelo Ministério da Educação
            (MEC), além de possuírmos nota de excelência!
          </p>
          <p>
            Oferecemos cursos de <strong>GRADUAÇÃO</strong>,
            <strong> COMPLEMENTAÇÃO PEDAGÓGICA</strong>,
            <strong> PÓS-GRADUAÇÃO</strong>,<strong> EJA</strong> E UMA
            PLATAFORMA INOVADORA CONTENDO MAIS DE
            <strong> 400 CURSOS</strong> DE CAPACITAÇÃO para auxiliar no seu
            crescimento profissional.
          </p>
          <p>
            Aqui na IBRA você entende que é possível simplificarmos a sua
            jornada como aluno. Aqui todos nós vivemos a ideia da EDUCAÇÃO QUE
            SIMPLIFICA.
          </p>
          <p>
            Invista em sua carreira e conhecimento. Venha conhecer nossos
            cursos!
          </p>
        </div>
      </section>
    </>
  );
}
export default AboutView;
