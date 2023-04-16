import { MouseEvent } from "react";
import { Fragment } from "react";

function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleClick = (event: MouseEvent) => console.log(event);
  // const handleClick = (event: MouseEvent) => console.log(event.clientY);
  return (
    <Fragment>
      <h1>List</h1>
      {items.length === 0 && <p>No Item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li className="list-group-item" key={item} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
