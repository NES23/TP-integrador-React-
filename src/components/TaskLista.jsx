import React from 'react'
import CheckBoton from './checkboton'

const TaskLista = props => {
  // (C)
  const { list, setList } = props;

  const onChangeStatus = e => {
    const { name, checked } = e.target;

    // (E)
    const updateList = list.map(item => ({
      ...item,
      done: item.id === name ? checked : item.done
    }));
    setList(updateList);
  };

  // (D)
  const onClickRemoveItem = e => {
    const updateList = list.filter(item => !item.done);
    setList(updateList);
};

const chk = list.map(item => (
    <CheckBoton key={item.id} data={item} onChange={onChangeStatus} />
  ));
  return (
    <div className="todo-list">
      {}
      {list.length ? chk : "Sin Tareas...anda a dormir"}
      {}
      {list.length ? (
        <p>
          <button className="button blue" onClick={onClickRemoveItem}>
            Borrar las tareas
          </button>
              </p>
              
      ) : null}
</div>
  )}



export default TaskLista