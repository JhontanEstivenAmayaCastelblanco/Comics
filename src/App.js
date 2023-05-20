import './App.css'; 
import NabVar from './components/nabvar';
import { Route, Routes } from 'react-router-dom';
import Slider from './components/slider';
import Content from './components/content'
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div>
    <Routes>
      <Route path='/' element={<NabVar/>} >
      <Route path='a' element={<Slider/>} />
      <Route path='b' element={<Content/>}></Route>
      </Route>
    </Routes>
  </div>
  );
}

export default App;
