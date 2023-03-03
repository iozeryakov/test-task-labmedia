/**
 * @component
 *
 * Отображает модальное окно с запросом подтверждения удаления пользователя.
 *
 * @param {Object} props - Объект, содержащий реквизиты для компонента.
 * @param {Function} props.setModal - Функция, которая изменяет модальное состояние.
 * @param {Object} props.modal - Объект, содержащий модальное состояние.
 * @param {number|undefined} props.modal.id - Идентификатор пользователя для удаления.
 * @param {boolean} props.modal.isOpen - Логический флаг, указывающий, открыто ли модальное окно.
 * @param {Function} props.setResponse - Функция, которая редактирует список пользователей.
 * @returns {JSX.Element} - Модальное окно, содержащее запрос на подтверждение.
 */
function Modal({ setModal, modal, setResponse }) {
  return (
    <div className="shadow">
      <div
        className="modal-fon"
        onClick={() => setModal({ id: undefined, isOpen: false })}
      ></div>
      <div className="modal">
        <div className="wrapper-modal">
          <p className="question">
            Вы уверены, что хотите удалить пользователя?
          </p>
          <div className="btns">
            <button
              className="btn"
              onClick={() => {
                setResponse((prev) => prev.filter((i) => i.id !== modal.id));
                setModal({ id: undefined, isOpen: false });
              }}
            >
              Да
            </button>
            <button
              className="btn btn_blue"
              onClick={() => {
                setModal({ id: undefined, isOpen: false });
              }}
            >
              Нет
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
