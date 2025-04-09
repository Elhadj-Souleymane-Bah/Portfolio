import axios from "axios";
import store from "../../stores";

//Creer une instance avec l'url
// console.log("test url", process.env.SERVER_URL)
const http = axios.create({
    baseURL: process.env.SERVER_URL
})

// //Injecter le token de l'authentification

http.interceptors.request.use(config => {
    //Recuperer le token depuis le store
    const { token } = store.getState().auth

    //Ajouter le token a la requete
    config.headers = {
        'Authorization': token ? `Bearer ${token}` : '',
    }

    return config
})

export default http