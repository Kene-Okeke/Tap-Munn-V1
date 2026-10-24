import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import CreateAccount from "./pages/CreateAccount.jsx";
import Landing from "./pages/Landing.jsx";
function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/create-account" element={<CreateAccount />}></Route>
        <Route path="/" element={<Landing />}></Route>
      </Routes>
    </>
  );
}
export default App;
