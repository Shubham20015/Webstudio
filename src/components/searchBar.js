import { Icon } from "@iconify/react";
import React from "react";

export default function SearchBar() {
  return (
    <div className="position-relative">
      <input
        type="text"
        placeholder="search for projects"
        className="searchBar"
      />
      <label>
        <Icon
          icon="bx:search"
          color="#a3a3a3"
          className="fs-3 fw-bold position-absolute searchBtn"
        />
      </label>
    </div>
  );
}
