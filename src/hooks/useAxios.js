import { useState, useEffect } from "react";

/**
 * Пользовательский хук, который выполняет HTTP-запрос с использованием предоставленного экземпляра axios и возвращает данные ответа.
 * @param {Object} axiosInstance - Экземпляр axios, который будет использоваться для запроса.
 * @param {string} method - HTTP-метод, используемый для запроса.
 * @param {string} url - URL-адрес для отправки запроса.
 * @returns {[Object, Function]} - Массив, содержащий данные ответа и функцию для их обновления.
 */

const useAxios = ({ axiosInstance, method, url = "/" }) => {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    const fetchData = async () => {
      try {
        const res = await axiosInstance[method.toLowerCase()](url, {
          signal: controller.signal,
        });
        setResponse(res.data);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchData();
    return () => {
      isMounted = false;
      isMounted && controller.abort();
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return [response, setResponse];
};
export default useAxios;
