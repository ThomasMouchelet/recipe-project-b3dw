import api from './api.service';

const RECIPE_ENDPOINT = `/recipes`;

const getAll = async () => {
    const response = await api.get(RECIPE_ENDPOINT);
    return response.data;
}

const getOne = async (id) => {
    const response = await api.get(`${RECIPE_ENDPOINT}/${id}`);
    return response.data;
}

const create = async (recipe) => {
    const response = await api.post(RECIPE_ENDPOINT, recipe);
    return response.data;
}

const update = async (id, recipe) => {
    const response = await api.put(`${RECIPE_ENDPOINT}/${id}`, recipe);
    return response.data;
}

const remove = async (id) => {
    const response = await api.delete(`${RECIPE_ENDPOINT}/${id}`);
    return response.data;
}

const RecipesService = {
    getAll,
    getOne,
    create,
    update,
    remove
}

export default RecipesService;