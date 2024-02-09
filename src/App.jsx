import React from "react";
import { useState } from "react";

export const App = () => {

  const list = [
    "Manzana",
    "Kiwi",
    "Melocotón",
    "Mango",
    "Piña",
    "Uvas"
  ];

  const [filterList, setFilterList] = useState(list);

  const onBuscar = (event) => {

    if (event.target.value === "") {
      setFilterList(list);
      return;
    }
    const filteredValues = list.filter(
      (item) =>
        item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
    );
    setFilterList(filteredValues);
  };
  return (
    <div className="buscadorApp">
      <div>
        Buscar: <input name="query" type="text" onChange={onBuscar} />
      </div>
      <ul className="lista">
        {filterList &&
          filterList.map((item, index) => (
            <li key={index}>{item}</li> //Display each item
          ))}
      </ul>
    </div>
  );
          }

