import "./HomePage.css";

import { useContext } from "react";
import { DataContext } from "../../Context/DataContext";
import { ShelfWiseList } from "../../Components/ShelfWiseList/ShelfWiseList";
import { readingStatus } from "../../utils/types";

export function HomePage() {
  const { loader, state } = useContext(DataContext);
  if (loader) {
    return <h2>Loarding...</h2>;
  }
  const filterShelfWiseBooks = state.books.reduce(
    (accumulator, book) => {
      // eslint-disable-next-line default-case
      switch (book.category) {
        case readingStatus["HAVE_READ"]: {
          accumulator["HAVE_READ"].push(book);
          break;
        }
        case readingStatus["READING"]: {
          accumulator["READING"].push(book);
          break;
        }
        case readingStatus["WANT_TO_READ"]: {
          accumulator["WANT_TO_READ"].push(book);
          break;
        }
      }
      return accumulator;
    },
    {
      [readingStatus["HAVE_READ"]]: [],
      [readingStatus["READING"]]: [],
      [readingStatus["WANT_TO_READ"]]: [],
    }
  );

  return (
    <div className="HomePageContainer">
      {["HAVE_READ", "READING", "WANT_TO_READ"].map((status) => {
        return (
          <ShelfWiseList
            key={status}
            heading={status}
            list={filterShelfWiseBooks[status]}
          ></ShelfWiseList>
        );
      })}
    </div>
  );
}
