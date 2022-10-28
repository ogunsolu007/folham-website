import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/navbar/Layout";
import { Home, Service } from "./Container";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {/* <Route path="about" element={<About />} /> */}
        <Route path="service" element={<Service />} />
        {/* <Route path="*" element={<NoMatch />} /> */}
      </Route>
    
    </Routes>
  );
};

export default App;
