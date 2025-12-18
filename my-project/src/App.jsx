import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import EntryForm from "./pages/EntryForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/EntryForm" element={<EntryForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
