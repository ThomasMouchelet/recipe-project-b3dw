import axios from 'axios';

const RECIPE_ENDPOINT = `${process.env.REACT_APP_API_URL}/recipes`;

const getAll = async () => {
    const response = await axios.get(RECIPE_ENDPOINT);
    return response.data;
}

const getOne = async (id) => {
    const response = await axios.get(`${RECIPE_ENDPOINT}/${id}`);
    return response.data;
}

const create = async (recipe) => {
    const token = localStorage.getItem('accessToken');
    const config = {
        headers: { 
            Authorization: `Bearer ${token}`,
            ContentType: "application/json"
        }
    };
    const response = await axios.post(RECIPE_ENDPOINT, recipe, config);
    return response.data;
}

const update = async (id, recipe) => {
    const response = await axios.put(`${RECIPE_ENDPOINT}/${id}`, recipe);
    return response.data;
}

const remove = async (id) => {
    const response = await axios.delete(`${RECIPE_ENDPOINT}/${id}`);
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