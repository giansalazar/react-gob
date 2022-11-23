import { Navigate } from "react-router-dom"

const ProtectedRoute = ({children, redirectTo }) => {
    const userLogged = window.localStorage.getItem('LoggedGobUser')
    
    if(userLogged){
        if(redirectTo==="/react-gob/login"){
            return <Navigate to="/" /> 
        }else{
            return children
        }
        
    }else{
        return <Navigate to="/react-gob/login" />
    }
    
}

export default ProtectedRoute