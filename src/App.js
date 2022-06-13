import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Footer from './Shared/Footer';
import Navbar from './Shared/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar>
        <Routes>
          <Route path='/' element={<HomePage></HomePage>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/signUp' element={<SignUp></SignUp>}></Route>
        </Routes>
        <Footer></Footer>
      </Navbar>
    </div>
  );
}

export default App;
