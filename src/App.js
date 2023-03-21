import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import BasicForm from './Component/Form/basicform'
function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<BasicForm/>}>
    </Route>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
