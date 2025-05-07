import React from "react";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import App from "./App.jsx";
import Homepage from "routes/Homepage";
import CreatePage from "routes/CreatePage/Index";
import PostPage from "routes/PostPage/Index";
import AuthPage from "routes/AuthPage/Index";
import ProfilePage from "routes/ProfilePage/Index";
import SearchPage from "routes/SearchPage/Index";
import MainLayout from "routes/layouts/MainLayout";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route
            path='/'
            element={<Homepage />}
          />
          <Route
            path='/create'
            element={<CreatePage />}
          />
          <Route
            path='/pin/:id'
            element={<PostPage />}
          />

          <Route
            path='/:username'
            element={<ProfilePage />}
          />
          <Route
            path='/search'
            element={<SearchPage />}
          />
        </Route>
        <Route
          path='/auth'
          element={<AuthPage />}
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
