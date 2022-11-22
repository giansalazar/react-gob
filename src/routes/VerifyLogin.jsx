import React from 'react'
import { Navigate } from 'react-router-dom'

const VerifyLogin = ({children }) => {
    const userLogged = window.localStorage.getItem('LoggedGobUser')
    
    if(userLogged){
        
        return <Navigate to="/" /> 
        
    }else{
        return children
    }
    
}

export default VerifyLogin