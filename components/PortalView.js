import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import CardMembershipIcon from '@mui/icons-material/CardMembership';

import styles from '../styles/PortalView.module.css';

import { getCursosEad } from '../services/helpers';
import Modal from './utils/Modal';

function PortalView() {
  const [modalGraduacaoEad, setShowModalGradEad] = useState(false);
  const [isLoad, setLoad] = useState(true);
  const [cursosEad, setCursosEad] = useState([]);

  const link = useRouter();

  const closeModalGradEad = () => {
    setShowModalGradEad(false);
  };

  function redirectAva(e) {
    e.preventDefault();
    link.push(e.target[0].value);
  }

  async function getCursos() {
    try {
      setLoad(true);
      setCursosEad(await getCursosEad());
    } catch (error) {
      console.log(error);
    } finally {
      setLoad(false);
    }
  }

  useEffect(() => {
    getCursos();
  }, []);

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.gridCards}>
          
          <div
            onClick={() => {
              setShowModalGradEad(!modalGraduacaoEad);
            }}
            className={`${styles.cards} ${styles.one}`}
          >
            <div className={styles.cardOverlay}>
              <img src="/icons/ead.svg" width="80" height="70" />
              <strong>Graduação EAD</strong>
            </div>
            <div className={styles.redStripes}>
              <span>Graduação EAD</span>
              <span>Acessar</span>
            </div>
          </div>

          <div
            onClick={() => {
              link.push('https://ava.ibraeducacional.com.br/wp-login.php');
            }}
            className={`${styles.cards} ${styles.two}`}
          >
            <div className={styles.cardOverlay}>
              <img src="/icons/comp.svg" width="80" height="70" />
              <strong>Complementação Pedagógica</strong>
            </div>
            <div className={styles.redStripes}>
              <span>Complementação Pedagógica</span>
              <span>Acessar</span>
            </div>
          </div>

          <div
            onClick={() => {
              link.push('https://ava.ibraeducacional.com.br/wp-login.php');
            }}
            className={`${styles.cards} ${styles.three}`}
          >
            <div className={styles.cardOverlay}>
              <img src="/icons/pos.svg" width="80" height="70" />
              <strong>Pós Graduação</strong>
            </div>
            <div className={styles.redStripes}>
              <span>Pós Graduação</span>
              <span>Acessar</span>
            </div>
          </div>

          <div
            onClick={() => {
              link.push('https://ciecv.com.br/sys/#');
            }}
            className={`${styles.cards} ${styles.four}`}
          >
            <div className={styles.cardOverlay}>
              <img src="/icons/comp.svg" width="80" height="70" />
              <strong>Educação de Jovens e Adultos</strong>
            </div>
            <div className={styles.redStripes}>
              <span>Educação de Jovens e Adultos</span>
              <span>Acessar</span>
            </div>
          </div>

          {/* Cloned Card - 5º card */}
          <div
            onClick={() => {
              link.push('https://ava.faculdadefibms.universaeducacional.com.br/');
            }}
            className={`${styles.cards} ${styles.five}`}
          >
            <div className={styles.cardOverlay}>
              <img src="/icons/comp.svg" width="80" height="70" />
              <strong>Faculdade Ibra do Mato Grosso do Sul</strong>
            </div>
            <div className={styles.redStripes}>
              <span>FIBMS</span>
              <span>Acessar</span>
            </div>
          </div>

          <div
            onClick={() => {
              link.push('https://easy-cap.conted.tech/ibra/login');
            }}
            className={`${styles.cards} ${styles.six}`}
          >
            <div className={styles.cardOverlay}>
              <CardMembershipIcon
                sx={{ fontSize: '5.5rem', color: '#B41218' }}
              />
              <strong>Cursos por Assinatura</strong>
            </div>
            <div className={styles.redStripes}>
              <span>Cursos por Assinatura</span>
              <span>Acessar</span>
            </div>
          </div>
        </div>
      </div>
      <Modal
        open={modalGraduacaoEad}
        closethis={closeModalGradEad}
        header="Graduação EAD"
      >
        <form action="#" className={styles.modalForm} onSubmit={redirectAva}>
          <select name="EAD">
            {isLoad ? (
              <option>Carregando...</option>
            ) : (
              cursosEad.map((cursoEad) => (
                <option value={cursoEad.link_ava || '#'}>
                  {cursoEad.nome}
                </option>
              ))
            )}
          </select>
          <button className={styles.modalButton}>Enviar</button>
        </form>
      </Modal>
    </>
  );
}

export default PortalView;
