import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App container-xxl">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
