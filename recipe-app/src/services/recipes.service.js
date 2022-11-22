import axios from 'axios';

const RECIPE_ENDPOINT = `${process.env.REACT_APP_API_URL}/recipes`;

export const getAll = async () => {
    const response = await axios.get(RECIPE_ENDPOINT);
    return response.data;
}

export const getOne = async (id) => {
    const response = await axios.get(`${RECIPE_ENDPOINT}/${id}`);
    return response.data;
}

export const create = async (recipe) => {
    const response = await axios.post(RECIPE_ENDPOINT, recipe);
    return response.data;
}

export const update = async (id, recipe) => {
    const response = await axios.put(`${RECIPE_ENDPOINT}/${id}`, recipe);
    return response.data;
}

export const remove = async (id) => {
    const response = await axios.delete(`${RECIPE_ENDPOINT}/${id}`);
    return response.data;
}