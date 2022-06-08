import { configure } from "axios-hooks";
import Axios from "axios";
import appJson from "../../app.json";
import store from "../reducers/index";
import CheckInternetConnection from "../helpers/CheckInternetConnection";
import { addRequest, removeRequest } from "../reducers/loading-reducer";

export const ConfigureAxios = () => {
    const axios = Axios.create({
        baseURL: appJson.apiUrl,
    });

    axios.interceptors.request.use(
        async config => {
            config.baseURL = appJson.apiUrl;
            console.log(`${config.baseURL}${config.url}`);
            store.dispatch(addRequest());
            var isConnected = await CheckInternetConnection();
            if (isConnected) {
                return config;
            } else {
                store.dispatch(removeRequest());
                var message = "Internet Connection Problem";
                throw new Axios.Cancel(message);
            }
        },
        error => {
            store.dispatch(removeRequest());
            Promise.reject(error);
        }
    );

    // Response interceptor for API calls
    axios.interceptors.response.use(
        response => {
            store.dispatch(removeRequest());
            return response;
        },
        async error => {
            store.dispatch(removeRequest());
            const originalRequest = error.config;
            if (error.response) {
                console.warn(error.response.status);
            }
            if (error && error.response && error.response.status === 403 && !originalRequest._retry) {
                originalRequest._retry = true;
            }
            return Promise.reject(error);
        }
    );

    configure({ axios });
};

export default ConfigureAxios;
