import { useContext } from "react";

import { getHumanReadableShelf } from "../../utils/common";
import { DataContext } from "../../Context/DataContext";
import { ActionTypes } from "../../Reducer/types";

export function BookCard({ book }) {
  const { dispatch } = useContext(DataContext);

  function changeShelfHandler(e) {
    const updatedBook = { ...book, category: e.target.value };
    dispatch({
      type: ActionTypes.SetBook,
      payload: { book: updatedBook },
    });
  }
  return (
    <div>
      <img alt={book.title} src={book.imageLink} />
      <p>{book.title}</p>
      <p>Author : {book.author}</p>
      <select
        className="MenuItemSortByPriceFilter"
        defaultValue={book.category}
        onChange={changeShelfHandler}
      >
        {["HAVE_READ", "READING", "WANT_TO_READ", "NONE"].map((name) => {
          const humanReadableName = getHumanReadableShelf(name);
          return (
            <option key={name} value={name}>
              {humanReadableName}
            </option>
          );
        })}
      </select>
    </div>
  );
}
