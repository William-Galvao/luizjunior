import {Routes, Route} from 'react-router-dom';
import Navbar from "./Navbar";
import Home from "../Pages/Home";
import Planos from '../Pages/Planos';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/planos" element={<Planos/>} />
      </Routes>
    </div>
  );
}

export default App;
