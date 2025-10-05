import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./Components/Body";
import Login from "./Components/Login";
function App() {
  return (
    //  <NavBar/>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Body />}>
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<div>signup</div>} />
          <Route path="/login" element={<div>login</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
