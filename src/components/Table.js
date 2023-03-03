import TableElement from "./TableElement";

/**
 *@component
 *
 *Отображает таблицу пользователей.
 *
 *@param {Object} props - Объект, содержащий реквизиты для компонента.
 *@param {Array} props.data - Список пользователей.
 *@param {Function} props.setModal - Функция, которая изменяет модальное состояние.
 *@param {number} props.page - Номер страницы.
 *@returns {JSX.Element} - Таблица пользователей.
 */

function Table({ data, setModal, page }) {
  return (
    <table className="table">
      <tbody>
        <tr className="table-title">
          <td>Имя пользователя</td>
          <td>E-mail</td>
          <td>Дата регистрации</td>
          <td>Рейтинг</td>
          <td></td>
        </tr>
        {data.length ? (
          data
            .slice(page * 5 - 5, page * 5)
            .map((i) => (
              <TableElement key={i.id} setModal={setModal} info={i} />
            ))
        ) : (
          <TableElement Error={true} />
        )}
      </tbody>
    </table>
  );
}

export default Table;
