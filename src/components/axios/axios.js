import axios from "axios";

const instance = axios.create({
    baseURL: 'https://us-central1-eco-app-b9aee.cloudfunctions.net/api' /// The API URL
});

export default instance;