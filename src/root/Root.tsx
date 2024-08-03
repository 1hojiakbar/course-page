import React from "react";
import CoursePage from "../components/Course";
import Navbar from "../components/Navbar/Navbar";
import Endexel from "../components/Endexel/Endexel";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

const Root: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="endexel" element={<Endexel />} />
        </Route>
        <Route path="/" element={<CoursePage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
