import axios from 'axios';
import url from './secrets';

const instance = axios.create({
    baseURL: url
});

export default instance;