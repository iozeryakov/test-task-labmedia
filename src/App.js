import "./App.css";
import { useEffect, useState } from "react";
import Modal from "./components/Modal";
import useAxios from "./hooks/useAxios";
import axios from "./apis/axios";
import Table from "./components/Table";
import InputSearch from "./components/InputSearch";

/**
 * @component
 *
 *Основной компонент для отображения списка пользователей и управления фильтрами и сортировкой.
 *
 *@return {JSX.Element}
 */

function App() {
  const [response, setResponse] = useAxios({
    axiosInstance: axios,
    method: "GET",
  });
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [modal, setModal] = useState({ id: undefined, isOpen: false });
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState(false);
  const [sort, setSort] = useState({ date: 0, rating: 0 });

  /**
   * Фильтрация и сортировка списка пользователя.
   */

  useEffect(() => {
    search || sort.date || sort.rating ? setFilter(true) : setFilter(false);
    setData(
      response
        .filter(
          (i) =>
            i.username.toLowerCase().includes(search.toLowerCase()) ||
            i.email.toLowerCase().includes(search.toLowerCase())
        )
        .sort((a, b) => {
          if (sort.rating) {
            if (sort.rating === 1) {
              return a.rating - b.rating;
            } else return b.rating - a.rating;
          } else if (sort.date) {
            if (sort.date === 1) {
              if (a.registration_date > b.registration_date) return -1;
              else if (a.registration_date < b.registration_date) return 1;
              else return 0;
            } else {
              if (a.registration_date > b.registration_date) return 1;
              else if (a.registration_date < b.registration_date) return -1;
              else return 0;
            }
          } else return 0;
        })
    );
    setPage(1);
  }, [response, search, sort]);

  const clickSort = (index) => {
    setSort((prev) => ({
      date: index === 1 ? (prev.date === 1 ? 2 : 1) : 0,
      rating: index === 2 ? (prev.rating === 1 ? 2 : 1) : 0,
    }));
  };

  return (
    <div className="container">
      {modal.isOpen && (
        <Modal setModal={setModal} modal={modal} setResponse={setResponse} />
      )}
      <div className="wrapper">
        <h1 className="h1">Список пользователей</h1>
        <InputSearch
          search={search}
          filter={filter}
          setSort={setSort}
          setSearch={setSearch}
        />
        <div className="sort">
          <p className="m-8px">Сортировка:</p>
          <p
            className={sort.date ? "sort-p active" : "sort-p"}
            onClick={() => clickSort(1)}
          >
            Дата регистрации
          </p>
          <p
            className={sort.rating ? "sort-p active" : "sort-p"}
            onClick={() => clickSort(2)}
          >
            Рейтинг
          </p>
        </div>
        <Table data={data} page={page} setModal={setModal} />
        <div className="pages">
          {page > 1 ? (
            <p className="pages-p" onClick={() => setPage((prev) => prev - 1)}>
              Назад
            </p>
          ) : (
            <div></div>
          )}
          {data.length > 0 && data.length > page * 5 && (
            <p className="pages-p" onClick={() => setPage((prev) => prev + 1)}>
              Вперед
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
