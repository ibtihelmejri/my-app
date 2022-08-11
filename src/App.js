import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./modules/Home";
import { User } from "./modules/User";
import { SideNav } from "./modules/SideNav";

function App() {
  return (
    <>
      <SideNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<User />} />
      </Routes>
    </>
  );
}

export default App;
