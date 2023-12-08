import Films from "../Films/Films.jsx";
import More from "../More/More.jsx";
import Search from "../Search/Search.jsx";
import React, { useState, useEffect } from "react";
import * as MainApi from "../../utils/MainApi.js";

function SectionFilms() {
  return (
    <>
      <Search />
      <Films />
      <More />
    </>
  );
}

export default SectionFilms;
