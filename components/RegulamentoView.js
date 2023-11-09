import { useState, useEffect } from 'react';
import DescriptionIcon from '@mui/icons-material/Description';

import styles from '../styles/RegulamentoView.module.css';
import SectionHeader from './utils/SectionHeader';
import { getRegulamentos } from '../services/helpers';

function RegulamentoView() {
  const [regulamentos, setRegulamentos] = useState([]);
  const [isLoad, setLoad] = useState(true);
  async function loadData() {
    try {
      setLoad(true);
      setRegulamentos(await getRegulamentos());
    } catch (error) {
      console.error(error);
    } finally {
      setLoad(false);
    }
  }
  useEffect(() => {
    loadData();
  }, []);
  return (
    <div className={styles.main}>
      <SectionHeader title="Regulamentos" ibraName="IBRA" />
      <section className={styles.container}>
        <h2>Confira abaixo os regulamentos das promoções do grupo IBRA.</h2>
        <div>
          <h3>Regulamentos Vigentes</h3>
          <ul>
            {isLoad
              ? 'Não há regulamentos em vigência!'
              : regulamentos.map((el) => {
                  return (
                    <li key={el.id}>
                      <a
                        target="_blank"
                        href={`https://ibranet.ibraeducacional.com.br/disk/${el.file}`}
                      >
                        <DescriptionIcon
                          sx={{ fontSize: '1.5rem', color: '#B41218' }}
                        />
                        {el.name}
                      </a>
                    </li>
                  );
                })}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default RegulamentoView;
