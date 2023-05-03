import React, { useState } from "react";

const Todo = () => {
  const [val, setVal] = useState<string>("");

  const [item, setItem] = useState<Array<string>>([]);

  const update = () => {
    setItem((olditem: any) => {
      return [...olditem, val];
    });

    setVal("");
  };

  const del = (id:number) => {
    const dup = item.filter((data, index) => index !== id);
    setItem(dup);
  };

  return (
    <>
      <h1> Todo List </h1>
      <input type="text" value={val} onChange={(e) => setVal(e.target.value)} />
      <button onClick={update}> Click Here </button>

      <ol>
        {item.map((itemval , index ) => {
          return (
          
            <li> {itemval}  <button onClick={() => del(index)}> Delete </button></li>
          );
        })}
      </ol>
    </>
  );
};

export default Todo;
