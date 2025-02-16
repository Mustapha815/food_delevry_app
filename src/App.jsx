import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Rootes";// استيراد ملف المسارات العامة

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
