import ReactDOM from 'react-dom/client'
import App from './App';
import Login from './components/Login';
import './css/index.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import GestionEmpleados from './components/GestionEmpleados'
import ModalForm from './components/ModalForm';
import ProtectedRoute from './routes/ProtectedRoute'
import VerifyLogin from './routes/VerifyLogin';
import { ContextProvider, Context } from './context/Context'
import UpdateEmpleado from './components/UpdateEmpleado';



ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextProvider>

    <BrowserRouter>
    
      <Routes>
        <Route path="/react-gob/" element={<App />} />
        <Route path="/" element={<App />} />
        <Route path="/react-gob/empleados/" element={<ProtectedRoute redirectTo='/empleados'> <GestionEmpleados /></ProtectedRoute>} />
        <Route path="/react-gob/login/" element={<VerifyLogin><Login /></VerifyLogin>} />
        <Route path='/react-gob/updateEmpleado/:id' element={<ProtectedRoute><UpdateEmpleado></UpdateEmpleado></ProtectedRoute>}></Route>
      </Routes>
      <Navbar></Navbar>
      <Footer></Footer>
    </BrowserRouter>

  </ContextProvider>
)
