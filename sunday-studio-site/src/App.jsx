import { Routes, Route } from "react-router-dom"
import "./App.css"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import UsFiveForever from "./pages/UsFiveForever"
import Apply from "./pages/Apply"
import ScrollToTop from "./components/ScrollToTop"

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/us-five-forever" element={<UsFiveForever />} />
        <Route path="/about" element={<About />} />
        <Route path="/apply" element={<Apply />} />
      </Routes>
    </div>
  )
}
