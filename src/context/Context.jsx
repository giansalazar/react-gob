import { createContext, useState, useEffect } from 'react'
import { BrowserRouter, useNavigate } from 'react-router-dom'
import * as PersonalServer from '../services/PersonalServer'

export const Context = createContext()


export function ContextProvider(props) {


    //GESTION DE SESIONES

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


    //USE STATE & USE EFECT GLOBALES
    const empleadoState = { nombre: "", apep: "", apem: "", edad: "", genero: "", puesto: "", jefatura: "", grado_estudios: "", carrera: "", calle: "", num_ext: "", municipio: "", entidad:"", num_int: 0, cp: "", localidad: "", extension:"", telefono:"", tipo:"" }
    const [empleado, setEmpleado] = useState(empleadoState)

    const [jefaturas, setJefaturas] = useState([])
    const [puestos, setPuestos] = useState([])
    const [entidades, setEntidades] = useState([])


    //HANDLERS

    const handleInputChange = (e) => {
        setEmpleado({ ...empleado, [e.target.name]: e.target.value })
    }

    const handleSelectChange = (e) => {
        console.log(e.target.name)
        setEmpleado({ ...empleado, [e.target.name]: e.target.value })
        console.log(e.target.value)

    }

    //LISTAS
    const listaJefaturas = async () => {
        try {
            const res = await PersonalServer.listaJefaturas()
            const data = await res.json()
            setJefaturas(data)
        } catch (error) {
            console.log(error)
        }
    }

    const listaPuestos = async () => {
        try {
            const res = await PersonalServer.listaPuestos()
            const data = await res.json()
            setPuestos(data)
        } catch (error) {
            console.log(error)
        }
    }

    const listaEntidades = async () => {
        try {
            const res = await PersonalServer.listaEntidades()
            const data = await res.json()
            setEntidades(data)
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <Context.Provider value={{
            usuarioSesion,
            setUsuarioSesion,
            handleLogout,
            empleado,
            setEmpleado,
            handleInputChange,
            handleSelectChange,
            listaJefaturas,
            listaPuestos,
            listaEntidades,
            jefaturas,
            setJefaturas,
            puestos,
            setPuestos,
            entidades,
            setEntidades


        }}>
            {props.children}
        </Context.Provider>
    )
}

export default Context