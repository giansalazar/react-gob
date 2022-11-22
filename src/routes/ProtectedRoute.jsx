import { Navigate } from "react-router-dom"

const ProtectedRoute = ({children, redirectTo }) => {
    const userLogged = window.localStorage.getItem('LoggedGobUser')
    
    if(userLogged){
        if(redirectTo==="/login"){
            return <Navigate to="/" /> 
        }else{
            return children
        }
        
    }else{
        return <Navigate to="/login" />
    }
    
}

export default ProtectedRoute