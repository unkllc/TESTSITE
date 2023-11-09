import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import InputMask from 'react-input-mask';
import styles from '../styles/BancoView.module.css';
import SectionHeaders from './utils/SectionHeader';
function BancoView() {
  const [url, setUrl] = useState('');
  const router = useRouter();
  const { success } = router.query;
  useEffect(() => {
    if (success) {
      alert('Seu curriculo foi enviado com sucesso!');
    }
  }, [success]);

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  return (
    <section id={styles.Banco}>
      <SectionHeaders title="Banco de Currículos" ibraName="IBRA" />
      <div className={styles.container}>
        <h4>Preencha os campos abaixo:</h4>
        <form
          method="post"
          encType="multipart/form-data"
          action="https://ibranet.ibraeducacional.com.br/api/store-curriculum"
        >
          <div className={styles.inputGroup}>
            <label>CPF:</label>
            <InputMask
              mask="999.999.999-99"
              type="text"
              name="cpf"
              placeholder="SOMENTE NÚMEROS"
            />
          </div>
          <div className={styles.inputGroup}>
            <label>Unidades:</label>
            <select name="sede">
              <option>Caratinga-MG (Mantenedora)</option>
              <option>Ipatinga-MG (Faculdade IBRA)</option>
              <option>Uberlandia-MG (Faculdade Faech)</option>
              <option>Brasília-DF (Faculdade Fabras)</option>
              <option>São Jose dos Campos-SP (Fitec)</option>
              <option>São Paulo-SP (Fagran)</option>
              <option>Jacareí-SP (Fadivales)</option>
              <option>Taubaté-SP (Fitau)</option>
              <option>Belo Horizonte-BH (BHTe)</option>
            </select>
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
            <label>Telefone:</label>
            <InputMask
              mask="+99 9 9999-9999"
              name="telefone"
              placeholder="SOMENTE NÚMEROS"
              type="text"
            />
          </div>
          <div className={styles.inputGroup}>
            <label>Facebook:</label>
            <input name="facebook" type="text" />
          </div>
          <div className={styles.inputGroup}>
            <label>Linkedin:</label>
            <input name="linkedin" type="text" />
          </div>
          <div className={styles.inputGroup}>
            <label>Endereço atual:</label>
            <textarea name="endereco" cols="10" rows="5"></textarea>
          </div>
          <div className={styles.inputGroup}>
            <label>Formação</label>
            <select name="formacao">
              <option>Ensino Médio Completo</option>
              <option>Ensino Médio Incompleto</option>
              <option>Graduado</option>
              <option>Pós-Graduado</option>
              <option>Mestrado</option>
            </select>
          </div>
          <h5>Cargo desejado</h5>
          <div className={styles.inputGroup}>
            <select name="cargo">
              <option>Auxiliar de Negociação</option>
              <option>Auxiliar de Escritório</option>
              <option>Auxiliar de secretaria</option>
              <option>Auxiliar de Marketing/Mídia Social</option>
              <option>Auxiliar de Contabilidade - RH - DP</option>
              <option>Auxiliar de Depto Financeiro</option>
              <option>Auxiliar de Dpto Jurídico</option>
              <option>Auxiliar de Supervisão de Ensino</option>
              <option>Auxiliar Depto Pedagógico (administrativo)</option>
              <option>Auxiliar Depto Pedagógico (Tutor - Professor)</option>
              <option>Serviços Gerais</option>
              <option>Designer</option>
              <option>Designer Instrucional/Tutor</option>
              <option>VideoMaker/Editor de video</option>
              <option>Diagramador</option>
              <option>Revisor Ortográfico</option>
              <option>Roteirista</option>
              <option>Gerente de Marketing</option>
              <option>Gerente de Conteúdo</option>
              <option>Gestor de Tráfego</option>
              <option>Vendedor por E-commerce</option>
              <option>Contínuo/Office-boy</option>
              <option>Vendedor externo</option>
              <option>Desenvolvimento / Programação </option>
              <option>Tecnologia da Informação - TI </option>
              <option>Training </option>
              <option>Publicitário </option>
              <option>Operador de Telemarketing</option>
              <option>Supervisão/Gerência</option>
              <option>Representante Educacional Externo</option>
              <option>Outras funções a disposição</option>
            </select>
          </div>
          <h5>Anexe seu currículo ou foto:</h5>
          <div className={styles.inputGroup}>
            <input name="anexo" type="file" />
          </div>
          <h5>Informações Adicionais:</h5>
          <div className={styles.inputGroup}>
            <textarea name="informacoes" cols="30" rows="5"></textarea>
          </div>
          <hr />
          <input type="hidden" name="url" value={url} />
          <button>Enviar</button>
        </form>
      </div>
    </section>
  );
}
export default BancoView;
