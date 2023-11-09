import { useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import SearchIcon from '@mui/icons-material/Search';
import CheckClickOutside from './CheckClickOutside';
import styles from '../../styles/ultisCss/Filter.module.css';
import FilterContext from '../../services/FilterContext';
import { getTipos, getAllUnities, getAreas } from '../../services/helpers';

function Filter() {
  const [open, setOpen] = useState(false);
  const { filter, setFilter, handleSubmit } = useContext(FilterContext);
  const [isLoad, setLoad] = useState([]);
  const [tipos, setTipos] = useState([]);
  const [areas, setAreas] = useState([]);
  const [faculdades, setFaculdades] = useState([]);

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFilter({ ...filter, [name]: value });
  }

  const handleClickOpen = () => {
    setOpen(!open);
    setFilter({ ...filter, open: true });
  };

  const handleClose = () => {
    setOpen(false);
  };

  async function getAllTipos() {
    try {
      setLoad(true);
      const item = localStorage.getItem('tipos');
      if (item) {
        setTipos(JSON.parse(item));
        return 0;
      }
      const data = await getTipos();
      localStorage.setItem('tipos', JSON.stringify(data));
      setTipos(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoad(false);
    }
  }
  async function getAllAreas() {
    try {
      setLoad(true);
      const item = localStorage.getItem('areas');
      if (item) {
        setAreas(JSON.parse(item));
        return 0;
      }
      const data = await getAreas();
      localStorage.setItem('areas', JSON.stringify(data));
      setAreas(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoad(false);
    }
  }
  async function getAllFaculdades() {
    try {
      setLoad(true);
      setFaculdades(await getAllUnities());
    } catch (error) {
      console.log(error);
    } finally {
      setLoad(false);
    }
  }
  function handleKeyPress(e) {
    if (e.key == 'Enter') {
      handleSubmit();
      setFilter({ ...filter, open: true });
    }
  }
  useEffect(() => {
    getAllTipos();
    getAllAreas();
    getAllFaculdades();
  }, []);

  return (
    <div className={styles.Filter}>
      <div className={styles.filterHeader}>
        <input
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          className={styles.inputSearch}
          type="text"
          placeholder="Pesquise o nome do curso desejado...."
          name="name"
        />
        <div className={styles.Dropdown}>
          <CheckClickOutside onClickOutside={handleClose}>
            <button onClick={handleClickOpen}>
              <Image src="/icons/filter.svg" width={15} height={15} />
            </button>
            <div className={open ? styles.dropdownShow : styles.dropdownHidden}>
              <div className={styles.dropdownHeader}>
                <span onClick={() => setFilter({ ...filter, open: true })}>
                  Filtros
                </span>
              </div>
              <form action="#">
                <div className={styles.input_group}>
                  <label onClick={handleInputChange}>Nível de Ensino:</label>
                  <select
                    value={filter.tipo_id || ''}
                    onChange={handleInputChange}
                    name="tipo_id"
                  >
                    <option value="">Selecione</option>
                    {isLoad
                      ? ''
                      : tipos.map((tipo) => (
                          <option value={tipo.id} key={tipo.id}>
                            {tipo.nome}
                          </option>
                        ))}
                  </select>
                </div>
                <div className={styles.input_group}>
                  <label>Categoria:</label>
                  <select
                    value={filter.curso_categoria || ''}
                    onChange={handleInputChange}
                    name="curso_categoria"
                  >
                    <option value="">Selecione</option>
                    <option value="1">Essencial</option>
                    <option value="2">Avançado</option>
                    <option value="3">Premium</option>
                  </select>
                </div>
                <div className={styles.input_group}>
                  <label>Área de Ensino:</label>
                  <select
                    value={filter.area_id || ''}
                    onChange={handleInputChange}
                    name="area_id"
                  >
                    <option value="">Selecione</option>
                    {isLoad
                      ? ''
                      : areas.map((area) => (
                          <option value={area.id} key={area.id}>
                            {area.nome}
                          </option>
                        ))}
                  </select>
                </div>
                <div className={styles.input_group}>
                  <label>Carga horária:</label>
                  <select
                    value={filter.carga || ''}
                    onChange={handleInputChange}
                    name="carga"
                  >
                    <option value="">Selecione</option>
                    <option value="60">60 h</option>
                    <option value="120">120 h</option>
                    <option value="180">180 h</option>
                    <option value="240">240 h</option>
                    <option value="360">360 h</option>
                    <option value="480">480 h</option>
                    <option value="520">520 h</option>
                    <option value="580">580 h</option>
                    <option value="620">620 h</option>
                    <option value="680">680 h</option>
                    <option value="720">720 h</option>
                    <option value="840">840 h</option>
                  </select>
                </div>
                <div className={styles.input_group}>
                  <label>Faculdade:</label>
                  <select
                    value={filter.faculdades || ''}
                    onChange={handleInputChange}
                    name="faculdades"
                  >
                    <option value="">Selecione</option>
                    {isLoad
                      ? ''
                      : faculdades.map((faculdade) => (
                          <option value={faculdade.id} key={faculdade.id}>
                            {faculdade.nome}
                          </option>
                        ))}
                  </select>
                </div>
              </form>
            </div>
          </CheckClickOutside>
        </div>
        <div className={styles.Dropdown}>
          <button
            onClick={() => {
              handleSubmit();
              setFilter({ ...filter, open: true });
            }}
          >
            <SearchIcon sx={{ color: '#fff', fontSize: '15px' }} />
          </button>
        </div>
      </div>
    </div>
  );
}
export default Filter;
