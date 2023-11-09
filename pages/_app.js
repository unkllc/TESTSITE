import { useState } from 'react';
import Layout from '../components/Layout';
import FilterContext from '../services/FilterContext';
import { filteredCourses, getPromotions } from '../services/helpers';
import '../styles/globals.css';
import '../styles/slick-carousel.css';

function MyApp({ Component, pageProps }) {
  const [filter, setFilter] = useState({
    open: false,
  });
  const [cursos, setCursos] = useState([]);
  const [allCursos, setAllCursos] = useState([]);
  const [selectedItens, setItens] = useState(12);
  const [promotions, setPromotions] = useState([]);

  async function handleSubmit() {
    try {
      const data = await filteredCourses(filter);
      setAllCursos(data);
      let courses = [];
      for (let i = 0; i < 12; i++) {
        if (data[i]) {
          courses[i] = data[i];
        }
      }
      setCursos(courses);
      setPromotions(await getPromotions(filter));
    } catch (error) {
      console.log(error);
    }
  }
  function seeMore() {
    let courses = cursos;
    let count = selectedItens + 12;
    for (let i = selectedItens; i < count; i++) {
      if (allCursos[i]) {
        courses[i] = allCursos[i];
      }
    }
    setItens(count);
  }

  return (
    <FilterContext.Provider
      value={{
        filter,
        setFilter,
        handleSubmit,
        cursos,
        promotions,
        seeMore,
      }}
    >
      
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-WRXV5ZB"
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        ></iframe>
      </noscript>

      <script type="text/javascript" src="/static/script.js"></script>
      <script
        type="text/javascript"
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-140453308-1"
      ></script>
      <script
        type="text/javascript"
        async
        src="https://d335luupugsy2.cloudfront.net/js/loader-scripts/78b1a1af-93a2-4578-80be-7a2ed67e0e28-loader.js"
      ></script>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </FilterContext.Provider>
  );
}

export default MyApp;
