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
import ProtectedRoute from './routes/ProtectedRoute'
import VerifyLogin from './routes/VerifyLogin';
import { ContextProvider, Context } from './context/Context'



ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextProvider>

    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/empleados" element={<ProtectedRoute redirectTo='/empleados'> <GestionEmpleados /></ProtectedRoute>} />
        <Route path="/login" element={<VerifyLogin><Login /></VerifyLogin>} />
      </Routes>
      <Navbar></Navbar>
      <Footer></Footer>
    </BrowserRouter>

  </ContextProvider>
)
