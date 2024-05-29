
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
import AMangeuser from "./admin/Pages/AMangeuser";
import Ulogin from "./wesite/Pages/Ulogin";
import Uregister from "./wesite/Pages/Uregister";
import Uprofile from "./wesite/Pages/Uprofile";



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
          <Route path="/Ulogin" element={<><Ulogin /></>} />
          <Route path="/Uregister" element={<><Uregister /></>} />
          <Route path="/profile" element={<><Uprofile /></>} />
          <Route path="*" element={<><Pno1/></>} /> 


          {/* Dashboard side */}
          <Route path="/alogin" element={<><Alogin/></>} />

          <Route path="/Dashboard" element={<><Adashboard/></>} />
          <Route path="/addservice" element={<><AddService/></>} />
          <Route path="/manageservice" element={<><Manageservice/></>} />
          <Route path="/User" element={<><AMangeuser/></>} />
          
        </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
