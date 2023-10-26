import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/about";
import Contact from "./pages/contact";
import Arthur from "./pages/arthur";
import Sign from "./pages/sign";
function App() {
return (
  <>
    <BrowserRouter>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="arthur" element={<Arthur/>}/>
      <Route path="sign" element={<Sign/>}/>
    </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
