import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import "./sb-admin-2.min.css";
import Dashboard from './Dashboard';
import Userlist from './Userlist';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './Login';
import Portal from './Portal';
import Createuser from './Createuser';
import UserView from './UserView';
import UserEdit from './UserEdit';
import { UserProvider } from './UserContext';

function App() {
  return (

    <BrowserRouter>

      <UserProvider>

        <Routes>

          <Route path='/' element={<Login />} />

          <Route path='/portal' element={<Portal />} >
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='userlist' element={<Userlist />} />
            <Route path='create-user' element={<Createuser />} />
            <Route path='user-view/:id' element={<UserView />} />
            <Route path='user-edit/:id' element={<UserEdit />} />
          </Route>

        </Routes>

      </UserProvider>


    </BrowserRouter>

  );
}

export default App;
