import { Routes, Route } from "react-router-dom";
import "./styles.css";
import Home from "./pages/home";
import Login from "./pages/login";
export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}
