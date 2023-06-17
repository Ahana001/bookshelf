import "./Navbar.css";

import { useLocation, Link, useNavigate } from "react-router-dom";

import { BiArrowBack } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { ActionTypes, Filters } from "../../Reducer/types";
import { useContext } from "react";
import { DataContext } from "../../Context/DataContext";

export function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { dispatch, state } = useContext(DataContext);

  if (location.pathname === "/404") {
    return null;
  }
  return (
    <div className="SearchContainer">
      <Link
        className="SearchBox"
        to="/search"
        style={{ display: location.pathname !== "/search" ? "flex" : "none" }}
      >
        <div className="SearchIcon">
          <FaSearch />
        </div>
        <div className="SearchAnimatedContainer">
          <div className="AnimatedSearchText">Search</div>
        </div>
      </Link>
      <div
        className="SearchContainer"
        style={{ display: location.pathname === "/search" ? "block" : "none" }}
      >
        <BiArrowBack onClick={() => navigate(-1)} className="SearchBackArrow" />
        <input
          type="text"
          value={state.filter.search}
          onChange={(event) => {
            dispatch({
              type: ActionTypes.SetFilter,
              payload: {
                filterType: Filters.Search,
                filterValue: event.target.value,
              },
            });
          }}
          onKeyDown={(event) => {
            if (event.key === "Backspace") {
              dispatch({
                type: ActionTypes.SetFilter,
                payload: {
                  filterType: Filters.Search,
                  filterValue: event.target.value.slice(0, -1),
                },
              });
            }
          }}
        />
        <IoMdClose
          className="SearchClose"
          onClick={() => {
            dispatch({
              type: ActionTypes.SetFilter,
              payload: {
                filterType: Filters.Search,
                filterValue: "",
              },
            });
          }}
        />
      </div>
    </div>
  );
}
