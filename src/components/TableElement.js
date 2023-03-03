/**
 *@component
 *
 *Отображает строку в таблице пользователей.
 *
 *@param {Object} props - Объект, содержащий реквизиты для компонента.
 *@param {Object} props.info - Объект, содержащий информацию для пользователя, отображаемая в этой строке.
 *@param {string} props.info.username - Имя пользователя.
 *@param {string} props.info.email - Email пользователя.
 *@param {string} props.info.registration_date - Дата регистрации пользователя.
 *@param {number} props.info.rating - Рейтинг пользователя.
 *@param {boolean} props.Error - Флаг, указывающий, произошла ли ошибка при извлечении пользовательских данных.
 *@param {Function} props.setModal - Функция, которая изменяет модальное состояние.
 *@returns {JSX.Element} - Строка в таблице пользователей.
 */

function TableElement({ Error, info, setModal }) {
  return (
    <tr className="table-row">
      {Error ? (
        <th colSpan="5">Нет пользователей</th>
      ) : (
        <>
          <td className="table-user">{info.username}</td>
          <td>{info.email}</td>
          <td>{info.registration_date.split("T")[0]}</td>
          <td>{info.rating}</td>
          <td>
            <img
              src="image/cancel.svg"
              alt="удалить"
              className="table-cancel"
              onClick={() => {
                setModal({ id: info.id, isOpen: true });
              }}
            />
          </td>
        </>
      )}
    </tr>
  );
}

export default TableElement;
