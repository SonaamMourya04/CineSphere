import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import MainContainer from "./Components/MainContainer";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/browse" element={<MainContainer />} />
    </Routes>
  );
};
export default App;