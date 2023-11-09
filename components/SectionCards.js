import { useState, useEffect, useContext, useCallback } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import moment from 'moment';
import FilterContext from '../services/FilterContext';
import Card from './utils/Card';
import styles from '../styles/SectionCards.module.css';
import Modal from './utils/Modal';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const useMediaQuery = (width) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addListener(updateTarget);

    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeListener(updateTarget);
  }, []);

  return targetReached;
};

function SectionCards() {
  const isBreakpoint = useMediaQuery(768);

  const [target2, setTarget2] = useState(false);
  const [target3, setTarget3] = useState(false);
  const { filter, setFilter } = useContext(FilterContext);
  const router = useRouter();

  const [isLoad, setLoad] = useState(true);

  const settings = {};

  const closeModal2 = () => {
    setTarget2(false);
  };
  const closeModal3 = () => {
    setTarget3(false);
  };

  async function submitTarget2(e) {
    e.preventDefault();

    try {
      const date = moment().format('YYYY-MM-D H:mm:ss');
      await axios
        .get(
          `https://api.sonax.net.br/a2billing_v2/admin/Public/dbdial_webapi.php?acao=chamada&id_cliente=22141&token=J3gtZVSc0YsiTO5pnW7r&id_contato=20&numero=${e.target[0].value}&id_campanha=783172&prioridade=1&data_hora=${date}`
        )
        .then(function (response) {
          if (response.status == 200) {
            alert('Logo entraremos em contato! Obrigado pela preferência!');
          }
        });
    } catch (error) {
      console.log(error);
    }
  }
  async function sendRD(e) {
    e.preventDefault();
    try {
      await axios.post(
        'https://gyruss.rdops.systems/v2/conversions',
        {
          '': '',
          c_utmz: '',
          client_tracking_id: '',
          conversion_identifier: 'site-frontend-preciso-de-ajuda',
          emP7yF13ld: '',
          email: e.target[1].value,
          internal_source: '6',
          name: e.target[0].value,
          personal_phone: e.target[3].value,
          privacy_data: { browser: '' },
          sh0uldN07ch4ng3: 'should_not_change',
          traffic_source: '',
          _doe: '',
        },
        {
          headers: {
            authorization: `PublicToken 3043db40c29393dbdb26b98fad206ebb`,
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <section id={styles.sectionCard}>
      <div className="container">
        <h2>Ainda não escolheu o seu curso?</h2>

        {isBreakpoint ? (
          <div>
            <Slider>
              <div
                onClick={() => {
                  window.location.href =
                    'https://ibraedu.bitrix24.com.br/online/atendimento';
                }}
              >
                <Card
                  srcImg="/svgs/chat.svg"
                  text="Você está com alguma dúvida e gostaria de conversar com a gente pelo chat? Se sim, só clicar abaixo"
                  linkText="Vamos conversar"
                />
              </div>
              <div
                onClick={() => {
                  setTarget2(!target2);
                }}
              >
                <Card
                  srcImg="/svgs/ligacao.svg"
                  text="Você está com alguma dúvida e gostaria de conversa com a gente pelo telefone? Se sim, só clicar abaixo."
                  linkText="Ligamos para você"
                />
              </div>
              <div
                onClick={() => {
                  setTarget3(!target3);
                }}
              >
                <Card
                  srcImg="/svgs/ajuda.svg"
                  text="Você será direcionado a um de nossos consultores que vai mostrar o melhor caminho."
                  linkText="Tenho Dúvidas!"
                />
              </div>
            </Slider>
          </div>
        ) : (
          <div className={styles.grid}>
            <div
              onClick={() => {
                window.location.href =
                  'https://google.com.br';
              }}
            >
              <Card
                srcImg="/svgs/chat.svg"
                text="Você está com alguma dúvida e gostaria de conversar com a gente pelo chat? Se sim, só clicar abaixo"
                linkText="Vamos conversar"
              />
            </div>
            <div
              onClick={() => {
                setTarget2(!target2);
              }}
            >
              <Card
                srcImg="/svgs/ligacao.svg"
                text="Você está com alguma dúvida e gostaria de conversa com a gente pelo telefone? Se sim, só clicar abaixo."
                linkText="Ligamos para você"
              />
            </div>
            <div
              onClick={() => {
                setTarget3(!target3);
              }}
            >
              <Card
                srcImg="/svgs/ajuda.svg"
                text="Você será direcionado a um de nossos consultores que vai mostrar o melhor caminho."
                linkText="Tenho Dúvidas!"
              />
            </div>
          </div>
        )}
      </div>
      <Modal open={target2} closethis={closeModal2} header="Ligamos para você!">
        <form onSubmit={submitTarget2} className={styles.modalForm} action="#">
          <div className={styles.inputs}>
            <div>
              <label for="inputPhone">Digite seu número de Telefone:</label>
              <input
                placeholder="SOMENTE NÚMEROS COM DDD"
                name="phone"
                id="inputPhone"
              />
            </div>
          </div>
          <div>
            <button>Enviar</button>
          </div>
        </form>
      </Modal>
      <Modal
        open={target3}
        closethis={closeModal3}
        header="Entramos em contato!"
      >
        <div className={styles.RD_Form}>
          <div className={styles.RD_Form_Box}>
            <form onSubmit={sendRD} action="#">
              <div className={styles.inputGroup}>
                <label>Nome</label>
                <input type="text" name="nome" />
              </div>
              <div className={styles.inputGroup}>
                <label>Email</label>
                <input type="text" name="email" />
              </div>
              <div className={styles.inputGroup}>
                <label>Telefone</label>
                <input type="text" name="phone" />
              </div>
              <button>Cadastrar</button>
              <span className={styles.RD_Alert}>
                Prometemos não utilizar suas informações de contato para enviar
                qualquer tipo de SPAM.
              </span>
            </form>
          </div>
        </div>
      </Modal>
    </section>
  );
}
export default SectionCards;
