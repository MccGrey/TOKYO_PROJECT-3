import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Roles from "./pages/positions/Roles";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stacks" element={<List />} />
        <Route path="/stacks/:id" element={<Roles />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
