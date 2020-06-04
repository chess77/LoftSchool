import axios from "axios";
import "babel-polyfill";
let token = localStorage.getItem("token");
if (!token) console.warn("Отсутствует токен");
const requests = axios.create({
    baseURL: "https://webdev-api.loftschool.com",
    headers: {
        Authorization: `Bearer ${token}`,
    },
});
requests.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;
        console.log("token", token )
        if (error.response.status === 401 && token!="") {
            token=""
            try {
                const response = await requests.post("/refreshToken");
                  token = response.data.token;
                console.log("tewtewy", token )
            }catch (e) {
               token=""
            }
            localStorage.setItem("token", token);
            requests.defaults.headers["Authorization"] = `Bearer ${token}`;
            originalRequest.headers["Authorization"] = `Bearer ${token}`;
            return axios(originalRequest);
        }
        return Promise.reject(error);
    },
);
export default requests;
