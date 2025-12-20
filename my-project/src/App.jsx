import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import EntryForm from "./pages/EntryForm";
import Footer from "./components/Footer";
import Admin from "./pages/Admin";

function App() {
  return (
    <BrowserRouter>
      <div className="app-layout">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/EntryForm" element={<EntryForm />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

