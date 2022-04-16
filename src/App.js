
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Register from './Components/Register/Register';
import Orders from './Components/Orders/Orders';
import PrivateRoutes from './Components/PrivateRoutes/PrivateRoutes';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path = "/" element = {<Home></Home>}></Route>
        <Route path = "/login" element = {<Login></Login>}></Route>
        <Route path = "/register" element = {<Register></Register>}></Route>
        <Route path = "/orders" element = {
          <PrivateRoutes>
            <Orders></Orders>
          </PrivateRoutes>
        }></Route>
      </Routes>
    </div>
  );
}

export default App;
