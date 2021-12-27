import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Post from "./components/Post";
import Project from "./components/Project";
import SinglePost from "./components/SinglePost";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route element={<Home />} exact path="/" />
        <Route element={<About />} exact path="/about" />
        <Route element={<SinglePost />} exact path="/post/:slug" />
        <Route element={<Post />} exact path="/post" />
        <Route element={<Project />} exact path="/project" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
