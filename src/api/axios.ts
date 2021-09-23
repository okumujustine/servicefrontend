import axios from "axios";

const AuthServiceInstance = axios.create({
    baseURL: 'http://localhost:4000/just-list/auth/',
    timeout: 10000,
    withCredentials: true,
});

const TodoServiceInstance = axios.create({
    baseURL: 'http://localhost:9000/just-list/listed_items/',
    timeout: 10000,
    withCredentials: true,
});

const NotificationServiceInstance = axios.create({
    baseURL: 'http://localhost:8000/just-list/notification/',
    timeout: 10000,
    withCredentials: true,
});

export { AuthServiceInstance, TodoServiceInstance, NotificationServiceInstance }