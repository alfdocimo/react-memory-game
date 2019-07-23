import React, { useEffect } from "react";
import Card from "./components/Card";
import constants from "./constants";
import axios from "axios";

import Cards from "./containers/CardsContainer";

const { API } = constants;
const App = () => {
  return <Cards />;
};

export default App;
