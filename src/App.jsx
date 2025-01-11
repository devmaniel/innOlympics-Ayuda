import React from "react";
import { BrowserRouter } from "react-router-dom";

import { AuthProvider } from "./hooks/authContext";

import AppRoute from "./AppRoute";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppRoute />
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
