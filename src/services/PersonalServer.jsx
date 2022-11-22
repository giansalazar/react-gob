//urls de las apis del personal
const PersonasAPI = "http://127.0.0.1:8000/api/personas/";
const JefaturasAPI = "http://127.0.0.1:8000/api/jefaturas/";
const PuestosAPI = "http://127.0.0.1:8000/api/puestos/";
const EmpleadosAPI = "http://127.0.0.1:8000/api/empleados/";
const EmpleadosListadoAPI = "http://127.0.0.1:8000/api/empleadosListado/";
const EntidadesAPI = "http://127.0.0.1:8000/api/entidades/";
const DireccionesAPI = "http://127.0.0.1:8000/api/direcciones/";
const DirectorioAPI = "http://127.0.0.1:8000/api/directorio/";
const LoginAPI = "http://127.0.0.1:8000/login/"


//Listar el contenido de las apis

export const listaPersonas = async () => {
    return await fetch(PersonasAPI)
}

export const listaJefaturas = async () => {
    return await fetch(JefaturasAPI)
}

export const listaPuestos = async () => {
    return await fetch(PuestosAPI)
}

export const listaEmpleados = async () => {
    return await fetch(EmpleadosListadoAPI)
}

export const listaEntidades = async () => {
    return await fetch(EntidadesAPI)
}

export const listaDirecciones = async () => {
    return await fetch(DireccionesAPI)
}

export const listaDirectorio = async () => {
    return await fetch(DirectorioAPI)
}

//Login

export const Login = async(userCredentials) => {
    return await fetch(LoginAPI, {
        method : 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "username": String(userCredentials.username).trim(),
            "password": String(userCredentials.password).trim(),
        })
    })
}

export const createPersona = async(empleado) => {
    return await fetch(PersonasAPI, {
        method : 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "nombre": String(empleado.nombre).trim(),
            "apep": String(empleado.apep).trim(),
            "apem": String(empleado.apem).trim(),
            "edad": parseInt(empleado.edad),
            "genero": String(empleado.genero).trim(),
        })
    })
}

export const createDireccion = async(empleado) => {
    return await fetch(DireccionesAPI, {
        method : 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "calle": String(empleado.calle).trim(),
            "num_ext": String(empleado.num_ext).trim(),
            "num_int": parseInt(empleado.num_int),
            "codigo_postal": parseInt(empleado.cp),
            "localidad": String(empleado.localidad).trim(),
            "municipio": String(empleado.municipio),
            "entidad": parseInt(empleado.entidad),
        })
    })
}

export const createEmpleado = async(empleado, id_persona, id_direccion) => {
    return await fetch(EmpleadosAPI, {
        method : 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "persona": parseInt(id_persona),
            "puesto": parseInt(empleado.puesto),
            "jefatura": parseInt(empleado.jefatura),
            "carrera": String(empleado.carrera).trim(),
            "grado_estudios": String(empleado.grado_estudios).trim(),
            "direccion": parseInt(id_direccion),

        })
    })
}

export const deleteEmpleado = async(persona_id) => {
    return await fetch(`${PersonasAPI}${persona_id}`, {
        method: 'DELETE'
    })
}