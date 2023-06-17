import "./ShelfWiseList.css";

import { getHumanReadableShelf } from "../../utils/common";
import { BookCard } from "../BookCard/BookCard";

export function ShelfWiseList({ heading, list, commonHeading }) {
  if (list.length === 0) {
    return (
      <>
        <h2>{commonHeading ?? getHumanReadableShelf(heading)}</h2>
        <h2>Nothing Here</h2>;
      </>
    );
  }
  return (
    <div>
      <h2>{commonHeading ?? getHumanReadableShelf(heading)}</h2>
      <div className="HorizontalLine"></div>
      <ul className="BookListContainer">
        {list.map((book) => {
          return (
            <li key={book.id}>
              <BookCard book={book} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
