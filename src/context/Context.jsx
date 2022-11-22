import { createContext, useState, useEffect } from 'react'
import { BrowserRouter, useNavigate } from 'react-router-dom'

export const Context = createContext()


export function ContextProvider(props) {

    //Estado para almacenar los datos de inicio de sesion
    const [usuarioSesion, setUsuarioSesion] = useState(null)

    //Verificamos si un usuario esta loggeado, si es asi le asignamos la informacion al estado
    useEffect(() => {
        const userLogged = window.localStorage.getItem('LoggedGobUser')
        if (userLogged && userLogged!="undefined") {
            const user = JSON.parse(userLogged)
            setUsuarioSesion(user)
        }
    }, [])

    const handleLogout = () => {
        setUsuarioSesion(null)
        window.localStorage.removeItem('LoggedGobUser')
        navigate('/login')
    }

    return (
        <Context.Provider value={{
            usuarioSesion,
            setUsuarioSesion,
            handleLogout,

        }}>
            {props.children}
        </Context.Provider>
    )
}

export default Context