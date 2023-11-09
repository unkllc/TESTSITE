import Api from '../services/Api';

export const getCursos = async () => {
  try {
    const { data } = await Api.get('/get-cursos');
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const getCurso = (id) => {
  try {
    setTimeout(async () => {
      const { data } = await Api.get('/get-curso/' + id);
      return data;
    }, 3000);
  } catch (error) {
    console.log(error);
  }
};
export const getTestimonials = async () => {
  try {
    const { data } = await Api.get('/get-testimonials');
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const getTestimonialsIbra = async () => {
  try {
    const { data } = await Api.get('/get-testimonials-ibra');
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const getCursosEad = async () => {
  try {
    const { data } = await Api.get('/get-cursos-ead');

    // Adiciona a opção padrão no início da lista
    const defaultOption = { nome: 'SELECIONE O CURSO', id: null };
    data.unshift(defaultOption);

    return data;
  } catch (error) {
    console.log(error);
  }
};
export const getBestCourses = async () => {
  try {
    const { data } = await Api.get('/get-best-courses');
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const getUnities = async () => {
  try {
    const { data } = await Api.get('/get-unities');
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const getAllUnities = async () => {
  try {
    const { data } = await Api.get('/get-all-unities');
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getAreas = async () => {
  try {
    const { data } = await Api.get('/get-areas');
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const getTipos = async () => {
  try {
    const { data } = await Api.get('/get-tipos');
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const filteredCourses = async (filter) => {
  try {
    const { data } = await Api.get('/filtered-courses', {
      params: filter,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const getPromotions = async (filter) => {
  try {
    const { data } = await Api.get('/promotion-courses', {
      params: filter,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const getUnity = async () => {
  try {
    const { data } = await Api.get('/get-unity');
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getVacancy = async (id) => {
  try {
    const { data } = await Api.get('/get-vacancy/' + id);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getVacancyDescription = async (id) => {
  try {
    const { data } = await Api.get('/get-vacancy-description/' + id);
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const getRegulamentos = async () => {
  try {
    const { data } = await Api.get('/get-regulamentos');
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const pesquisaDiploma = async (search) => {
  try {
    const { data } = await Api.get('/pesquisa-diploma?search=' + search);
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const getEvents = async (search) => {
  try {
    const { data } = await Api.get('/get-events', { params: search });
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const findEvent = async (slug) => {
  try {
    const { data } = await Api.get(`/find-event/${slug}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
