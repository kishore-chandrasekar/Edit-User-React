import logo from './logo.svg';
import './App.css';
import Topbar from './Topbar';
import Sidebar from './Sidebar';
import Createuser from './Createuser';
import Userlist from './Userlist';
import Edituser from './Edituser';
import {
  BrowserRouter,
  Routes,
  Route,
  Router
} from "react-router-dom";


function App() {
  return (
    <div id="wrapper">
      <BrowserRouter>
        <Sidebar />
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content" >
            <Topbar />
            <div class="container-fluid">
              <Routes>
                <Route path="/createuser" element={<Createuser/>}></Route>
                <Route path="/userlist" element={<Userlist/>}></Route>
                <Route path="/edituser/:id" element={<Edituser/>}></Route>
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
