import "./App.css";
import { Routes, Route } from "react-router-dom";
// import { Home } from "./modules/Home";
// import { User } from "./modules/User";
import {Layout} from './modules/Layout'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
        {/* <Route path="/users" element={<User />} /> */}
      </Routes>
    </>
  );
}

export default App;
