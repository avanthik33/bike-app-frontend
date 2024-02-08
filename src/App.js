import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddBike from './components/AddBike';
import ViewBike from './components/ViewBike';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddBike/>} />
        <Route path='/view' element={<ViewBike/>} />

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
