import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage';
import Navbar from './Shared/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar>
        <Routes>
          <Route path='/' element={<HomePage></HomePage>}></Route>
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
