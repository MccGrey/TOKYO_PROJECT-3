import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Roles from "./pages/positions/Roles";
import List3 from "./pages/link3/List3";
import List4 from "./pages/list4/List4";
import List5 from "./pages/list5/List5";
import List6 from "./pages/list6/List6";
import List7 from "./pages/list7/List7";
import List8 from "./pages/list8/List8";
import List9 from "./pages/list9/List9";
import List10 from "./pages/list10/List10";
import List11 from "./pages/list11/List11";
import List12 from "./pages/list12/List12";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stacks" element={<List />} />
        <Route path="/stacks/:id" element={<Roles />} />
        <Route path="/stacks1" element={<List3 />} />
        <Route path="/stacks2" element={<List4 />} />
        <Route path="/stacks3" element={<List5 />} />
        <Route path="/stacks4" element={<List6 />} />
        <Route path="/stacks5" element={<List7 />} />
        <Route path="/stacks6" element={<List8 />} />
        <Route path="/stacks7" element={<List9 />} />
        <Route path="/stacks8" element={<List10 />} />
        <Route path="/stacks9" element={<List11 />} />
        <Route path="/stacks10" element={<List12 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
