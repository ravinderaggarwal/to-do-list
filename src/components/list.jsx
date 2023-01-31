import React from "react";
function List(prop) {
  return (
    <li
      onClick={() => {
        prop.fun(prop.id);
      }}
    >
      {prop.name}
    </li>
  );
}
export default List;
