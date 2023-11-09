import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from '../styles/OldPortalView.module.css';
import Modal from './utils/Modal';
import { getCursosEad } from '../services/helpers';
import CardMembershipIcon from '@mui/icons-material/CardMembership';

function PortalView() {
  const [target1, setTarget1] = useState(false);
  const [target2, setTarget2] = useState(false);
  const [cursosEad, setCursosEad] = useState([]);
  const [isLoad, setLoad] = useState(true);

  const link = useRouter();

  const closeModal1 = () => {
    setTarget1(false);
  };
  const closeModal2 = () => {
    setTarget2(false);
  };

  function redirect(e) {
    e.preventDefault();
    link.push(e.target[0].value);
  }
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
    <section id={styles.Portal}>
      <div className={styles.PortalContainer}>
        <div className={styles.gridCards}>
          <Link href="#">
            <a
              onClick={() => {
                setTarget1(!target1);
              }}
              className={styles.Card}
              style={{ gridArea: 'graduacaoPresensial' }}
            >
              <Image src="/icons/presencial.svg" width="55" height="55" />
              <strong>Graduação presencial</strong>
            </a>
          </Link>
          <Link href="#">
            <a
              className={styles.Card}
              style={{ gridArea: 'graduaçãoEAD' }}
              onClick={() => {
                setTarget2(!target2);
              }}
            >
              <Image src="/icons/ead.svg" width="55" height="55" />
              <strong>Graduação EAD</strong>
            </a>
          </Link>
          <Link href="https://ava.ibraeducacional.com.br/wp-login.php">
            <a
              style={{ gridArea: 'posGraduacao' }}
              target="_blank"
              className={styles.Card}
            >
              <Image src="/icons/pos.svg" width="55" height="55" />
              <strong>Pós graduação</strong>
            </a>
          </Link>
          <Link href="https://ava.ibraeducacional.com.br/wp-login.php">
            <a
              style={{ gridArea: 'complementacao' }}
              target="_blank"
              className={styles.Card}
            >
              <Image src="/icons/comp.svg" width="55" height="55" />
              <strong>Complementação pedagógica</strong>
            </a>
          </Link>
          <Link href="https://ciecv.com.br/sys/#">
            <a
              style={{ gridArea: 'EJA' }}
              target="_blank"
              className={styles.Card}
            >
              <Image src="/icons/comp.svg" width="55" height="55" />
              <strong>EJA</strong>
            </a>
          </Link>
          <Link href="https://ibra-assinatura.conted.tech/login">
            <a
              style={{ gridArea: 'capacitacao', maxWidth: '100%' }}
              target="_blank"
              className={styles.Card}
            >
              <CardMembershipIcon sx={{ fontSize: '4.5rem', color: '#fff' }} />
              <strong>Cursos por assinatura</strong>
            </a>
          </Link>
        </div>
      </div>
      <Modal
        open={target1}
        closethis={closeModal1}
        header="Graduação Presencial"
      >
        <form action="#" className={styles.modalForm} onSubmit={redirect}>
          <select name="unidade">
            <option value="https://ava.graduacao.ibraeducacional.com.br/wp-login.php">
              Unidade IBRA-Ipatinga
            </option>
            <option value="https://ava.faculdadefabras.com.br/wp-login.php">
              Unidade IBRA-Brasília
            </option>
            <option value="https://ava.faculdadefagran.com.br/wp-login.php">
              Unidade IBRA-Grande São Paulo
            </option>
            <option value="https://ava.faculdadefitau.com.br/wp-login.php">
              Unidade IBRA-Taubté
            </option>
            <option value="https://ava.faculdadefitec.com.br/wp-login.php">
              Unidade IBRA-São José dos Campos
            </option>
            <option value="https://ava.faculdadefadivales.com.br/wp-login.php">
              Unidade IBRA-Jacareí
            </option>
            <option value="https://ava.faculdadefaech.com.br/wp-login.php">
              Unidade IBRA-Uberlândia
            </option>
          </select>
          <button className={styles.modalButton}>Enviar</button>
        </form>
      </Modal>
      <Modal open={target2} closethis={closeModal2} header="Graduação EAD">
        <form action="#" className={styles.modalForm} onSubmit={redirectAva}>
          <select name="EAD">
            {isLoad ? (
              <option>Carregando...</option>
            ) : (
              cursosEad.map((cursoEad) => (
                <option value={cursoEad.faculdades[0].link_ava}>
                  {cursoEad.nome}
                </option>
              ))
            )}
          </select>
          <button className={styles.modalButton}>Enviar</button>
        </form>
      </Modal>
    </section>
  );
}
export default PortalView;
