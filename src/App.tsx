import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import MainPage from "./components/mainpage/MainPage";
import AboutPage from "./components/aboutpage/AboutPage";

export default function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
