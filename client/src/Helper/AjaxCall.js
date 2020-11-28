import axios from 'axios';

export const ajaxGetCall = async (url) => {
    return await axios
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

export const ajaxGetCallbyId = async(url) => {
    return await axios
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

export const ajaxPostCall = (url, data) => {
    return axios
        .post(url,data)
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

export const ajaxPutCall = (url, data) => {
    return axios
    .put(url, data,)
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

export const ajaxDeleteCall = (url) => {
    return axios
        .delete(url)
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