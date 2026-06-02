import axios from "axios";

export const ApiClient = axios.create({
    baseURL: import.meta.env.PUBLIC_SERVER_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
    timeout: 15_000,
});