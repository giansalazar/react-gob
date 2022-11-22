//urls de las apis del personal
const PersonasAPI = "https://slpgob-api.onrender.com/api/personas/";
const JefaturasAPI = "https://slpgob-api.onrender.com/api/jefaturas/";
const PuestosAPI = "https://slpgob-api.onrender.com/api/puestos/";
const EmpleadosAPI = "https://slpgob-api.onrender.com/api/empleados/";
const EmpleadosListadoAPI = "https://slpgob-api.onrender.com/api/empleadosListado/";
const EntidadesAPI = "https://slpgob-api.onrender.com/api/entidades/";
const DireccionesAPI = "https://slpgob-api.onrender.com/api/direcciones/";
const DirectorioAPI = "https://slpgob-api.onrender.com/api/directorio/";
const DirectorioBasicAPI = "https://slpgob-api.onrender.com/api/directorio_basic/";
const LoginAPI = "https://slpgob-api.onrender.com/login/"


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
    return await fetch(DirectorioAPI)
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

export const createTelefono = async(empleado) => {
    return await fetch(DirectorioBasicAPI, {
        method : 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "telefono": parseInt(empleado.telefono),
            "tipo": String(empleado.tipo).trim(),
            "extension": parseInt(empleado.extension),
            "empleado": parseInt(empleado.id),
        })
    })
}

export const getEmpleado = async(empleado_id) =>{
    return await fetch(`${DirectorioAPI}${empleado_id}`)
}


export const deleteEmpleado = async(persona_id) => {
    return await fetch(`${PersonasAPI}${persona_id}`, {
        method: 'DELETE'
    })
}

export const updatePersona = async(empleado) => {
    return await fetch(`${PersonasAPI}${empleado.id_persona}/`, {
        method : 'PUT',
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

export const updateDireccion = async(empleado) => {
    return await fetch(`${DireccionesAPI}${empleado.id_direccion}/`, {
        method : 'PUT',
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

export const updateEmpleado = async(empleado, id_persona, id_direccion) => {
    return await fetch(`${EmpleadosAPI}${empleado.id_empleado}/`, {
        method : 'PUT',
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

export const updateTelefono = async(empleado) => {
    return await fetch(`${DirectorioBasicAPI}${empleado.id_tel}/`, {
        method : 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "telefono": parseInt(empleado.telefono),
            "tipo": String(empleado.tipo).trim(),
            "extension": parseInt(empleado.extension),
            "empleado": parseInt(empleado.id),
        })
    })
}