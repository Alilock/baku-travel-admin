import { axiosInstance } from "./axiosInstance"


export const baseNetwork = {

    getAll: async (url) => {
        let responseData = [];
        await axiosInstance.get(url)
            .then(res => {
                responseData = res.data;
            })
            .catch(err => {
                throw err;
            })

        return responseData;
    },
    add: async (url, data) => {
        let responseData = {};

        await axiosInstance.post(url, data)
            .then(res => {
                responseData = res.data;
            })
            .catch(err => {
                throw err
            })

        return responseData;

    },
    remove: async (url, id) => {

        let responseData = {};
        await axiosInstance.delete(url + "/" + id)
            .then(res => {
                responseData = res.data;
            })
            .catch(err => {
                throw err;
            })

        return responseData;

    },
    getById: async (url,id) => {

        let responseData = {};
        await axiosInstance.get(url + "/" + id)
            .then(res => {
                responseData = res.data;
            })
            .catch(err => {
                throw err;
            })

        return responseData;

    }

}