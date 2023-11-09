import styles from '../styles/Diploma.module.css';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import BoxGraduate from './utils/BoxGraduate';
import { pesquisaDiploma } from '../services/helpers';
import {useState } from 'react';

function DiplomaView() {
    const [result, setResult] = useState('');
    const [search, setSearch] = useState('');
    const [diplomas, setDiplomas] = useState([]);
    const [isLoad, setLoad] = useState(false);
    async function loadData() {
        try {
            setLoad(true);
            setDiplomas(await pesquisaDiploma(search));
        } catch (error) {
            console.error(error);
        } finally {
            setLoad(false);
        }
    }

    function searchForm(e) {
        e.preventDefault();
        loadData();
        if (diplomas.length === 0) {
            setResult('Nenhum resultado encontrado');
        }
    }
    return (
        <>
            <div className={styles.introBox}>
                <hgroup>
                    <h1>Validação de Diplomas</h1>
                    <h2>IBRA</h2>
                </hgroup>
            </div>
            <div className={styles.container}>
                <h3>Consulta:</h3>
            </div>

            <div className={styles.boxSearch}>
                <h2>Faça sua pesquisa:</h2>
                <form onSubmit={searchForm}>
                    <input type='search' placeholder='Pesquise pelo nome' name='search' value={search} onChange={e => setSearch(e.target.value)} />
                    <button>
                        <PersonSearchIcon fontSize='small' />
                        Pesquisar
                    </button>
                </form>
            </div>

            {
                diplomas.length > 0 ? (
                    isLoad
                        ? 'Carregando' :
                        diplomas.map((el) => {
                            return (
                                <BoxGraduate key={el.id} diplomado={el.diplomado} curso={el.curso} titulo={el.titulo} dtColacao={el.data_colacao} livro={el.livro} folha={el.folha} registro={el.registro} processo={el.processo} nDiploma={el.n_diploma} dtRegistro={el.data_registro} />
                            )
                        })
                ) : <h3 className={styles.result}>{result}</h3>
            }




        </>
    )
}

export default DiplomaView;
