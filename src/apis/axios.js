import axios from "axios";

/**
 *Создаие экземпляра Axios с базовым URL и заголовками.
 *@function
 *@returns {AxiosInstance} - Экземпляр Axios.
 */

export default axios.create({
  baseURL: "https://5ebbb8e5f2cfeb001697d05c.mockapi.io/users",
  headers: { "Content-Type": "application/json", Accept: "application/json" },
});
