import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home/Home";
import Posts from "./pages/Posts/Posts";
import Layout from "./pages/Layout/Layout";
import Todos from "./pages/Todos/Todos";
import UserDetail from "./pages/Home/UserDetail";
import NotFound from "./pages/NotFound/NotFound";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index={true} element={<Home />} />
        <Route path="/user/:id" element={<UserDetail />} />
        <Route path="posts" element={<Posts />} />
        <Route path="todos" element={<Todos />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
