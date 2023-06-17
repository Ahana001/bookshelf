import { useContext } from "react";
import { DataContext } from "../../Context/DataContext";
import { ShelfWiseList } from "../../Components/ShelfWiseList/ShelfWiseList";

export function SearchPage() {
  const { state } = useContext(DataContext);

  const filteredBooks = state.books.filter((book) => {
    const lowercaseMenuItemName = book.title.toLowerCase();
    return lowercaseMenuItemName.includes(state.filter.search.toLowerCase());
  });
  if (state.filter.search === "") {
  }
  return (
    <div>
      <ShelfWiseList
        commonHeading={`Search Result for ${state.filter.search}`}
        list={filteredBooks}
      ></ShelfWiseList>
    </div>
  );
}
