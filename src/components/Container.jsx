
import React, { useState } from "react";
import FormTarea from "./FormTarea";
import TaskLista from "./TaskLista";

const Container = () => {
  const [list, setList] = useState([]); 

  
  const handleAddItem = (addItem) => {
    setList([...list, addItem]); 
  };
  return (
      <>
          <h1>APLICACION DE TAREAS </h1>
          
      {}
      <FormTarea handleAddItem={handleAddItem} />
      {}
      <TaskLista list={list} setList={setList} />
    </>
  );
};

export default Container;
