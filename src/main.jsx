import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage.jsx";
import PostListPage from "./pages/PostListPage.jsx";
import Write from "./pages/Write.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import Register from "./pages/Register.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import SPAPage from "./pages/SPAPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/posts" element={<PostListPage />} />
          <Route path="/:slug" element={<SPAPage />} />
          <Route path="/write" element={<Write />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </Router>
  </StrictMode>
);
