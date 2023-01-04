import axios from "axios";

export default {
  backendUrl: process.env.VUE_APP_BACKEND_URL,
  getURI: async function (uri, config = null) {
    try {
      config = Object.assign({}, config, {
        baseURL: this.backendUrl,
        timeout: 5000
      });
      
      const response = await axios.get(uri, config);
      return response.data;
    } 
    catch(error) {
      if (error.response) {
        // si la réponse est en erreur
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // si une erreur est survenue lors de l'envoi de la requête
        console.log(error.request);
      } else {
        // si une erreur est survenue lors de l'initialisation de la requête
        console.log('Error', error.message);
      }
      console.log(error.config);
      console.log(error.toJSON());
      return Promise.reject(new Error("Erreur de connexion à la source de donnée !"));
    }
  },
  deleteURI: async function (uri, config = null) {
    try {     
      config = Object.assign({}, config, {
        baseURL: this.backendUrl,
        timeout: 5000
      });
      
      const response = await axios.delete(uri,config);
      return response.data;
    } 
    catch(error) {
      if (error.response) {
        // si la réponse est en erreur
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // si une erreur est survenue lors de l'envoi de la requête
        console.log(error.request);
      } else {
        // si une erreur est survenue lors de l'initialisation de la requête
        console.log('Error', error.message);
      }
      console.log(error.config);
      console.log(error.toJSON());
      return Promise.reject(new Error("Erreur de connexion à la source de donnée !"));
    }
  },
  postURI: async function (uri,data =null ,config = null) {
    try {
      data = Object.assign({}, data)
      config = Object.assign({}, config, {
        baseURL: this.backendUrl,
        timeout: 5000
      });
     console.log("data",data )
      const response = await axios.post(uri,data, config);
      return response.data;
    } 
    catch(error) {
      if (error.response) {
        // si la réponse est en erreur
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // si une erreur est survenue lors de l'envoi de la requête
        console.log(error.request);
      } else {
        // si une erreur est survenue lors de l'initialisation de la requête
        console.log('Error', error.message);
      }
      console.log(error.config);
      console.log(error.toJSON());
      return Promise.reject(new Error("Erreur de connexion à la source de donnée !"));
    }
  },
}