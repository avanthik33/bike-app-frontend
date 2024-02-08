import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddBike from './components/AddBike';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddBike/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
