import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import reactHtmlParser from 'react-html-parser';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import styles from '../styles/CourseSingleView.module.css';
import LinkButton from './utils/LinkButton';
import Api from '../services/Api';
import Modal from './utils/Modal';

function CourseSingleView({ id }) {
  const [Index, setIndex] = useState(1);
  const [curso, setCurso] = useState({});
  const [isLoad, setLoad] = useState(true);
  const [open, setOpen] = useState(false);
  const [openCertificado, setOpenCertificado] = useState(false);
  const [openLinkMec, setOpenLinkMec] = useState(false);
  const link = useRouter();

  async function getSingleCourse() {
    try {
      setLoad(true);
      const { data } = await Api.get('/get-curso/' + id);
      setCurso(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoad(false);
    }
  }

  function redirect(e) {
    e.preventDefault();
    link.push(e.target[0].value);
  }

  useEffect(() => {
    if (id) {
      getSingleCourse();
    }
  }, [id]);

  const changeIndex = (index) => {
    setIndex(index);
  };
  const closeModal = () => {
    setOpen(false);
  };
  const closeModalCertificado = () => {
    setOpenCertificado(false);
  };

  const closeModalLinkMec = () => {
    setOpenLinkMec(false);
  }
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
                  curso.img +
                  ')',
              }}
            >
              <div className={styles.imageText}>
                <strong>{curso.nome}</strong>
                <p>
                  TESTE
                </p>
              </div>
            </div>
          </section>
          <section className={styles.sectionCourseSingle}>
            <div className={styles.courseContainer}>
              <div className={styles.courseBox}>
                <div className={styles.courseBoxHeader}>
                  <span>Objetivo do Curso</span>
                  <img src="/icons/book.svg" width="10" height="10" />
                </div>
                <div className={styles.courseBoxContent}>
                  <p>{reactHtmlParser(curso.objetivos)}</p>
                </div>
              </div>
            </div>
          </section>
          <section className={styles.tabSection}>
            <div className={styles.courseContainer}>
              <div className={styles.Tabs}>
                <div className={styles.navTabs}>
                  <label
                    onClick={() => changeIndex(1)}
                    className={
                      Index == 1
                        ? `${styles.tabs} ${styles.active}`
                        : styles.tabs
                    }
                  >
                    <span>+ informações</span>
                  </label>
                  <label
                    onClick={() => changeIndex(2)}
                    className={
                      Index == 2
                        ? `${styles.tabs} ${styles.active}`
                        : styles.tabs
                    }
                  >
                    <span>Matriz curricular</span>
                  </label>
                  <label
                    onClick={() => changeIndex(3)}
                    className={
                      Index == 3
                        ? `${styles.tabs} ${styles.active}`
                        : styles.tabs
                    }
                  >
                    <span>Documentação</span>
                  </label>
                </div>

                <div className={styles.tabContent}>
                  <div
                    className={
                      Index == 1
                        ? `${styles.content} ${styles.active}`
                        : styles.content
                    }
                  >
                    <div className={styles.tab1}>
                      <div className={styles.link}>
                        <strong>Público alvo:</strong>
                        <p>{reactHtmlParser(curso.publico)}</p>
                      </div>
                      <div className={styles.infos}>
                        <ul>
                          <li>
                            <div className={styles.divSemIdeia}>
                              <i className={styles.book_checked}></i>{' '}
                              <label>Nome: </label>
                            </div>
                            {curso.nome}
                          </li>
                          <li>
                            <div className={styles.divSemIdeia}>
                              <span className={styles.awards}></span>{' '}
                              <label>Área de Ensino: </label>
                            </div>
                            {curso.categoria ? curso.categoria.nome : ''}
                          </li>

                          {curso.tipo_id == 8 ? (
                            <li>
                              <div className={styles.divSemIdeia}>
                                <span className={styles.clock}></span>{' '}
                                <label>Duração: </label>
                              </div>
                              {curso.horas} {curso.time}
                            </li>
                          ) : (
                            <li>
                              <div className={styles.divSemIdeia}>
                                <span className={styles.time}></span>{' '}
                                <label>Carga horária: </label>
                              </div>
                              {curso.horas} {curso.time}
                            </li>
                          )}
                          <li>
                            {curso.faculdades ? (
                              <div className={styles.divSemIdeia}>
                                <a
                                onClick={()=> setOpenLinkMec(true)}
                                  
                                  className={styles.btnLink}
                                >
                                  Link MEC
                                </a>
                                {curso.tipo_id == 8 || curso.tipo_id == 12 ? (
                                  ''
                                ) : (
                                  <a
                                    onClick={() => setOpenCertificado(true)}
                                    className={styles.btnLink}
                                  >
                                    Certificado
                                  </a>
                                )}
                                {curso.link_crea && (
                                  <a
                                    href={curso.link_crea}
                                    className={styles.btnLink}
                                  >
                                    CREA
                                  </a>
                                )}
                              </div>
                            ) : (
                              ''
                            )}
                          </li>
                        </ul>
                      </div>
                      <Modal
                      open={openLinkMec}
                      closethis={closeModalLinkMec}
                      header="Consulta MEC">
                        {curso.faculdades[0] ? (
                          <div className={styles.overflow}>
                              <iframe 
                              height="1000px"
                              width="562px"
                              src={curso.faculdades[0].mec}>

                              </iframe>
                          </div>
                        ): (
                          'Conteúdo indisponível'
                        )}
                        
                      </Modal>
                      <Modal
                        open={openCertificado}
                        closethis={closeModalCertificado}
                        header="Modelo de Certificado"
                      >
                        {curso.faculdades[0] ? (
                          <div className={styles.overflow}>
                            <img
                              height="1000px"
                              src={`https://ibranet.ibraeducacional.com.br/disk/${
                                curso.tipo_id == 2 || curso.tipo_id == 3
                                  ? curso.faculdades[0].diploma
                                  : curso.faculdades[0].certificado
                              }`}
                            />
                          </div>
                        ) : (
                          'Modelo indisponivel'
                        )}
                      </Modal>
                      <div className={styles.price}>
                        <strong>Investimento</strong>
                        <div className={styles.investimento}>
                          {reactHtmlParser(curso.investimento)}
                        </div>
                        {curso.tipo_id == 8 && curso.link_matricula !== null ? (
                          <LinkButton
                            href={curso.link_matricula}
                            text="Vestibular"
                          />
                        ) : curso.link_matricula !== null ? (
                          <LinkButton
                            href={curso.link_matricula}
                            text="QUERO ME INSCREVER"
                          />
                        ) : (
                          <LinkButton
                            href="https://universa.ibraeducacional.com.br/matricula/acadgeral-aluno/captacao?alunocursoMediador=site-ibra"
                            text="QUERO ME INSCREVER"
                          />
                        )}
                      </div>
                    </div>
                  </div>
                  <div className={styles.tab2}>
                    <div
                      className={
                        Index == 2
                          ? `${styles.content} ${styles.active}`
                          : styles.content
                      }
                    >
                      {isLoad ? (
                        'Carregando'
                      ) : curso.show_file == 1 ? (
                        <LinkButton
                          target="_blank"
                          href={
                            'https://ibranet.ibraeducacional.com.br/disk/' +
                            curso.grade
                          }
                          text="Ver grade"
                        />
                      ) : (
                        reactHtmlParser(curso.disciplinas)
                      )}
                    </div>
                  </div>
                  <div
                    className={
                      Index == 3
                        ? `${styles.content} ${styles.active}`
                        : styles.content
                    }
                  >
                    {isLoad
                      ? 'Carregando'
                      : reactHtmlParser(curso.funcionamento.documentos)}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
}
export default CourseSingleView;
