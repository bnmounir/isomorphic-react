import axios from 'axios';

const externalServerAPI = 'https://react-ssr-api.herokuapp.com/users';

export const FETCH_USERS = 'fetch_users';
export const fetchUsers = () => async dispatch => {
    const res = await axios.get(externalServerAPI);
    dispatch({ type: FETCH_USERS, payload: res.data });
};
