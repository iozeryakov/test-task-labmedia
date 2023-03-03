/**
 *@component
 *
 *Отображает окно поиска с отключением фильтров.
 *
 *@param {Object} props - Объект, содержащий реквизиты для компонента.
 *@param {string} props.search - Cтрока с текстом для фильтрации данных.
 *@param {boolean} props.filter - Логическое значение, указывающее, активен фильтр или нет.
 *@param {Function} props.setSort - Функция для настройки параметров сортировки.
 *@param {Function} props.setSearch - Функция для обновления строки поиска.
 *@returns {JSX.Element} - Окно поиска.
 */

function InputSearch({ search, filter, setSort, setSearch }) {
  return (
    <div className="wrapper-search">
      <input
        type="text"
        className="input-search"
        placeholder="Поиск по имени или e-mail"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {filter && (
        <div
          className="clean"
          onClick={() => {
            setSort({ date: 0, rating: 0 });
            setSearch("");
          }}
        >
          <img src="image/clean.svg" alt="Очистить" className="clean-img"></img>
          <p className="crean-p">Очистить фильтр</p>
        </div>
      )}
    </div>
  );
}

export default InputSearch;
