import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./Components/Body";
import Login from "./Components/Login";
import { Provider } from "react-redux";
import appStore from "./utils/AppStore";
function App() {
  return (
  <Provider store={appStore}>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Body />}>
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<div>signup</div>} />
          <Route path="/login" element={<div>login</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
     </Provider>
  );
}

export default App;
