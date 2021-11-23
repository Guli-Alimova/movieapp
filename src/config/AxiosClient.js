 import axios from 'axios';
 import queryString from 'query-string';

 const AxiosClient = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        'Content-Type': 'application/json'
    },
    params: {
        api_key: '3b62cbd3019cef6ea3bcc5ecce56c01c'
    },
    paramsSerializer: params => queryString.stringify(params)
 });
 
AxiosClient.interceptors.request.use(async (config) => config);

AxiosClient.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data;
    }

    return response;
}, (error) => {
    throw error;
});

export default AxiosClient;