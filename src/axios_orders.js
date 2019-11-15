import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burgerbuilder-6e0f0.firebaseio.com/'
});

export default instance;