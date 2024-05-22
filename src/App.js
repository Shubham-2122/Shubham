
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./wesite/Pages/Home";
import About from "./wesite/Pages/About";
import Contact from "./wesite/Pages/Contact";
import Service from "./wesite/Pages/Service";
import Project from "./wesite/Pages/Project";
import Pno1 from "./wesite/Pages/Pno1";
import Adashboard from "./admin/Pages/Adashboard";
import AddService from "./admin/Pages/AddService";
import Manageservice from "./admin/Pages/Manageservice";
import Alogin from "./admin/Pages/Alogin";



function App() {
  return (
    <div className="App">
      {/* <h1>hello react</h1> */}
      {/* <Home /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<><Home/></>} />
          <Route path="/about" element={<><About /> </>} /> 
          <Route path="/contact" element={<><Contact/></>} />
          <Route path="/service" element={<><Service/></>} />  
          <Route path="/project" element={<><Project /></>} />
          <Route path="*" element={<><Pno1/></>} /> 


          {/* Dashboard side */}
          
          <Route path="/Dashboard" element={<><Adashboard/></>} />
          <Route path="/addservice" element={<><AddService/></>} />
          <Route path="/manageservice" element={<><Manageservice/></>} />
          <Route path="/alogin" element={<><Alogin/></>} />
          
        </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
