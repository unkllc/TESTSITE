import React, { useState, useRef } from 'react';
import Accordion from '../utils/Accordion';
import styles from './SectionFAQ.module.css';

function SectionFAQ() {
  return (
    <div className={styles.Container}>
      <div className={styles.Title}>
        <h3>Dúvidas frequentes:</h3>
      </div>
      <div className={styles.AccordionWrap}>
        <Accordion title="Por quanto tempo tenho acesso ao conteúdo?">
          <p>
            Por quanto tempo quiser! Todo conteúdo estará disponível, enquanto
            você for assinante da plataforma.
          </p>
        </Accordion>
        <Accordion title="Como funciona o pagamento?">
          <p>
            Pague por meio do cartão de crédito. A cobrança é mensal e
            recorrente
          </p>
        </Accordion>
        <Accordion title="Tem certificado?">
          <p>
            Sim, são mais de 500 cursos e todos eles oferecem certificado válido
            em todo o território Nacional! Os certificados solicitados, são
            emitidos de forma automática ao final de cada curso, sendo
            necessário cumprir o tempo mínimo de 10 dias de realização.
          </p>
        </Accordion>
        <Accordion title="Como funciona o cancelamento?">
          <p>
            Você consegue cancelar, por meio da plataforma. Ao cancelar, haverá
            também o cancelamento das mensalidades em seu cartão, a partir do
            mês em que o cancelamento for solicitado
          </p>
        </Accordion>
      </div>
    </div>
  );
}
export default SectionFAQ;
