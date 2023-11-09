import React, { useState, useEffect } from 'react';
import InputMask from 'react-input-mask';
import styles from './ModalForm.module.css';

function ModalForm({ show }) {
  const [open, setOpen] = useState(false);
  const [userData, setData] = useState({});
  function handleClose() {
    setOpen(!open);
  }
  function handleInputChange(e) {
    const { name, value } = e.target;
    setData({ ...userData, [name]: value });
  }
  useEffect(() => {
    if (show == true) {
      setOpen(true);
    }
  }, [show]);
  return (
    <div className={`${styles.overflow} ${open && styles.show}`}>
      <div className={styles.modal}>
        <div className={styles.close}>
          <button onClick={() => handleClose()}>
            <img src="/svgs/close.svg" alt="CloseButton" />
          </button>
        </div>
        <form
          action="https://compra-segura.conted.tech/template-checkout.php"
          method="POST"
        >
          <div className={`${styles.inputGroup} ${styles.col6}`}>
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              required
              onChange={handleInputChange}
              placeholder="João da silva"
              name="name"
              id="name"
            />
          </div>
          <div className={`${styles.inputGroup}  ${styles.col6}`}>
            <label htmlFor="phone">Telefone</label>
            <InputMask
              mask="+55 99 9 9999-9999"
              required
              onChange={handleInputChange}
              type="text"
              name="phone"
              id="phone"
              placeholder="SOMENTE NÚMEROS"
            />
          </div>
          <div className={`${styles.inputGroup}  ${styles.col6}`}>
            <label htmlFor="email">Email</label>
            <input
              onChange={handleInputChange}
              required
              placeholder="joao@email.com"
              type="email"
              name="email"
              id="email"
            />
          </div>
          <div className={`${styles.inputGroup}  ${styles.col6}`}>
            <label htmlFor="identification_document">CPF</label>
            <InputMask
              type="text"
              onChange={handleInputChange}
              required
              name="identification_document"
              id="identification_document"
              mask="999.999.999-99"
              placeholder="SOMENTE NÚMEROS"
            />
          </div>
          <div className={`${styles.inputGroup}  ${styles.col4}`}>
            <label htmlFor="city">Cidade</label>
            <input
              onChange={handleInputChange}
              type="text"
              value={userData.city || ''}
              name="city"
              id="city"
            />
          </div>
          <div className={`${styles.inputGroup}  ${styles.col4}`}>
            <label htmlFor="state">Estado</label>
            <input
              onChange={handleInputChange}
              required
              type="text"
              value={userData.state || ''}
              name="state"
              id="state"
            />
          </div>
          <div className={`${styles.inputGroup} col-6`}>
            <label htmlFor="grau">Grau de Instrução</label>
            <select required onChange={handleInputChange} name="grau" id="grau">
              <option value="Primeiro grau completo">
                Primeiro grau completo
              </option>
              <option value="Segundo grau completo">
                Segundo grau completo
              </option>
              <option value="Segundo grau incompleto">
                Segundo grau incompleto
              </option>
              <option value="Ensino superior incompleto">
                Ensino superior incompleto
              </option>
              <option value="Ensino superior completo">
                Ensino superior completo
              </option>
              <option value="Pós graduado">Pós graduado</option>
              <option value="Mestre">Mestre</option>
              <option value="Doutor">Doutor</option>
            </select>
          </div>
          <div className={`${styles.btn} col-12`}>
            <button>Realizar pagamento</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalForm;
