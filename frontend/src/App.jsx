import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import CreateAccount from "./pages/CreateAccount.jsx";
function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/create-account" element={<CreateAccount />}></Route>
      </Routes>
    </>
  );
}
export default App;
