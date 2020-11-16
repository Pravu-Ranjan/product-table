import axios from 'axios';

export const ajaxGetCall = (url) => {
    return axios
        .get(url)
        .then((response) => {
            if(response.status >= 200 || response.status <= 299){
                return response.data;
            } else {
                throw response.data
            }  
        })
        .catch((err) => {
            throw err
        })
}