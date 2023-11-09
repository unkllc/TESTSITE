import { useEffect, useState } from 'react';
import { useRouter } from 'next/dist/client/router';
import InputMask from 'react-input-mask';
import reactHtmlParser from 'react-html-parser';
import styles from '../styles/VagasView.module.css';
import SectionHeader from './utils/SectionHeader';
import {
  getUnity,
  getVacancy,
  getVacancyDescription,
} from '../services/helpers';

function VagasView() {
  const [isLoad, setLoad] = useState(true);
  const [unities, setUnities] = useState([]);
  const [vagas, setVagas] = useState([]);
  const [vagaDescription, setVagaDescription] = useState(undefined);
  const [url, setUrl] = useState('');
  const router = useRouter();
  const { success } = router.query;

  async function getAllUnities() {
    try {
      setLoad(true);
      setUnities(await getUnity());
    } catch (error) {
      console.log(error);
    } finally {
      setLoad(false);
    }
  }
  async function getAllVacancies(e) {
    try {
      setVagas(await getVacancy(e.target.value));
    } catch (error) {
      console.log(error);
    }
  }

  async function getDescription(e) {
    try {
      setVagaDescription(await getVacancyDescription(e.target.value));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (success) {
      alert('Seu curriculo foi enviado com sucesso!');
    }
  }, [success]);

  useEffect(() => {
    getAllUnities();
    setUrl(window.location.href);
  }, []);

  return (
    <section id={styles.Vagas}>
      <SectionHeader title="Vagas Abertas" ibraName="IBRA" />
      <div className={styles.container}>
        <div className={styles.alert}>
          <span>PRIMEIRO ESCOLHA A UNIDADE!</span>
        </div>
        <form
          method="POST"
          encType="multipart/form-data"
          action="https://ibranet.ibraeducacional.com.br/api/store-curriculum-vagas"
        >
          <div className={styles.inputGroup}>
            <label>Unidades:</label>
            <select
              name="sede"
              defaultValue={'selecione'}
              onChange={getAllVacancies}
            >
              <option value="selecione" disabled hidden>
                Selecione
              </option>
              {isLoad
                ? ''
                : unities.map((unity) => (
                    <option value={unity.id} key={unity.id}>
                      {unity.name}
                    </option>
                  ))}
            </select>
          </div>
          <div className={styles.inputGroup}>
            <label>Vagas Abertas</label>
            <select
              name="cargo"
              defaultValue={'selecione'}
              onChange={getDescription}
            >
              <option value="selecione" disabled hidden>
                Selecione
              </option>
              {vagas.map((vaga) => (
                <option value={vaga.name} key={vaga.id}>
                  {vaga.name}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.vagaDescription}>
            {vagaDescription && reactHtmlParser(vagaDescription)}
          </div>
          <div className={styles.inputGroup}>
            <label>Ja é colaborador?</label>
            <select name="colaborador">
              <option value="0">selecione</option>
              <option value="1">sim</option>
              <option value="0">não</option>
            </select>
          </div>
          <div className={styles.inputGroup}>
            <label>Nome Completo:</label>
            <input name="nome" type="text" />
          </div>
          <div className={styles.inputGroup}>
            <label>Email:</label>
            <input name="email" type="text" />
          </div>
          <div className={styles.inputGroup}>
            <label>CPF:</label>
            <InputMask
              mask="999.999.999-99"
              type="text"
              name="cpf"
              placeholder="SOMENTE NÚMEROS"
            />
          </div>
          <h5>Anexe seu currículo ou foto:</h5>
          <div className={styles.inputGroup}>
            <input type="file" name="anexo" />
          </div>
          <hr />
          <input type="hidden" name="url" value={url} />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </section>
  );
}
export default VagasView;
