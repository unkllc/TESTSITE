import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import HelpIcon from '@mui/icons-material/Help';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkIcon from '@mui/icons-material/Link';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SchoolIcon from '@mui/icons-material/School';
import SearchIcon from '@mui/icons-material/Search';
import WorkIcon from '@mui/icons-material/Work';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

import Link from 'next/link';
import { useState } from 'react';
import InputMask from 'react-input-mask';
import Api from '../services/Api';
import styles from '../styles/Footer.module.css';
import Modal from './utils/Modal';

function Footer() {
  const [modalShowOperator, setModalShowOperator] = useState(false);
  const [dataOperator, setOperator] = useState({});
  const [isLoad, setLoad] = useState(false);
  function toogleModalOperator() {
    setModalShowOperator(!modalShowOperator);
  }
  async function findOperator(e) {
    e.preventDefault();
    try {
      setLoad(true);
      const phone = e.target[0].value;
      const { data } = await Api.get('/veracity/' + phone);
      setOperator(data[0]);
    } catch (err) {
      console.error(err);
    } finally {
      setLoad(false);
    }
  }
  return (
    <>
      <Modal
        open={modalShowOperator}
        closethis={toogleModalOperator}
        header="Digite o WhatsApp do operador"
      >
        <div className={styles.modalBody}>
          {isLoad ? (
            <img src="/svgs/spinner.svg" alt="Spinner" />
          ) : dataOperator.id ? (
            <div className={styles.operator}>
              <div className={styles.imgOperator}>
                <img
                  src={`https://ibranet.ibraeducacional.com.br/disk/${(dataOperator.people.profile_img &&
                    dataOperator.people.profile_img) ||
                    'rIp6GxQP69KzDzPxA6yNusrTMx7ylgcUqZXMnveS.svg'
                    }`}
                  alt=""
                />
              </div>
              <div className={styles.dataOperator}>
                <label>Nome do Operador:</label>
                {dataOperator.name || ''}
                <label>Numero de Telefone:</label>
                {dataOperator.phone || ''}
                <label>Setor do Operador:</label>
                {(dataOperator.setor && dataOperator.setor.nome) ||
                  'Não cadastrado'}
              </div>
            </div>
          ) : (
            <form action="" onSubmit={findOperator}>
              <div className={styles.formInputs}>
                <label htmlFor="phoneOperator">Número do WhatsApp:</label>
                <InputMask
                  mask="(99) 9 9999-9999"
                  type="text"
                  id="phoneOperator"
                />
              </div>
              <div>
                <button>Buscar</button>
              </div>
            </form>
          )}
        </div>
      </Modal>
      <footer id={styles.footer_menu}>
        <div className={styles.container}>
          <div className={styles.grid_footer}>
            <div className={styles.links}>
              <strong>Links úteis</strong>
              <div>
                <ul>
                  <a
                    target="_blank"
                    href="https://universa.ibraeducacional.com.br/"
                  >
                    <li>
                      <LinkIcon fontSize="small" /> Portal do Representante
                    </li>
                  </a>
                  <a
                    target="_blank"
                    href="https://www.facebook.com/faculdadeibra/"
                  >
                    <li>
                      <FacebookIcon fontSize="small" /> Facebook
                    </li>
                  </a>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/faculdadeibra/"
                  >
                    <li>
                      <InstagramIcon fontSize="small" /> Instagram
                    </li>
                  </a>
                  <a
                    target="_blank"
                    href="https://blog.ibraeducacional.com.br/"
                  >
                    <li>
                      <EmailIcon fontSize="small" /> Blog
                    </li>
                  </a>
                  <a
                    target="_blank"
                    href="/veracity"
                  >
                    <li>
                      <SchoolIcon fontSize="small" /> Consulta Pública de
                      Veracidade
                    </li>
                  </a>
                  <Link href="/regulamentos">
                    <a>
                      <li>
                        <FormatListBulletedIcon fontSize="small" /> Regulamentos
                      </li>
                    </a>
                  </Link>
                  <Link href="https://b24-k7uiqv.bitrix24.site/crm_form_qnhiy/">
                    <a>
                      <li>
                        <WorkIcon fontSize="small" /> Trabalhe Conosco
                      </li>
                    </a>
                  </Link>
                  <a
                    target="_blank"
                    href="https://suporte.ibraeducacional.com.br/"
                  >
                    <li>
                      <HelpIcon fontSize="small" /> FAQ
                    </li>
                  </a>
                  <a onClick={() => toogleModalOperator()}>
                    <li>
                      <SearchIcon fontSize="small" /> Consultar operadores
                    </li>
                  </a>
                  <a href="https://universa.ibraeducacional.com.br/financeiro/painel/titulos">
                    <li>
                      <LocalPrintshopIcon fontSize="small" /> Segunda via de
                      boleto
                    </li>
                  </a>
                  <a href="/validacao-de-diplomas">
                    <li>
                      <WorkspacePremiumIcon fontSize="small" /> Validação de diplomas
                    </li>
                  </a>
                </ul>
              </div>
            </div>
            <div className={styles.excelent}>
              <strong>Excelência</strong>
              <div className={styles.flex}>
                <div>
                  <img src="/images/selo.png" width="95" />
                </div>
                <div>
                  <strong>
                    Selo
                    <br />
                    Reclame Aqui
                    <br />
                  </strong>
                  <small>Anos 2019/2020/2021</small>
                </div>
              </div>
            </div>
            <div className={styles.info}>
              <strong>Informativo</strong>
              <div className={styles.flex}>
                <div>
                  <img
                    src="/images/seloibra.png"
                    width="70"
                    className="img-responsive"
                    alt=""
                  />
                </div>
                <div>
                  <strong>Prêmio Referência Nacional</strong>
                  <small>ANCEC - Melhores do ano de 2021</small>
                </div>
              </div>
            </div>
            <div className={styles.contact}>
              <strong>Contato</strong>
              <ul>
                
                <li>
                  <LocationOnIcon fontSize="small" /> Rua Engenheiro Herbert,
                  135 - Rodoviários / Caratinga-MG
                </li>

                <li>
                  <EmailIcon fontSize="small" />
                  <a href="mailto:ouvidoria@ibraeducacional.com.br">
                    ouvidoria@ibraeducacional.com.br
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
