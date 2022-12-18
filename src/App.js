import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import "./style.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    // <Home />
    // <Register />

    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
