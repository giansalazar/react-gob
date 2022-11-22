import { useState, useEffect, useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Context from '../context/Context'
import * as PersonalServer from '../services/PersonalServer'


function UpdateEmpleado() {

    const navigate = useNavigate()

    const params = useParams()

    const { empleado, setEmpleado, puestos, jefaturas, entidades, handleInputChange, handleSelectChange, listaEntidades, listaPuestos, listaJefaturas } = useContext(Context)

    useEffect(() => {
        listaJefaturas()
        listaPuestos()
        listaEntidades()
    }, [])

    const GetEmpleado = async (empleado_id) => {
        try {
            const res = await PersonalServer.getEmpleado(empleado_id)
            const data = await res.json()

            console.log(data)
            setEmpleado({id_persona:data.empleado.persona.id, id_empleado:data.empleado.id, nombre: data.empleado.persona.nombre, apep: data.empleado.persona.apep, apem: data.empleado.persona.apem, edad: data.empleado.persona.edad, genero: data.empleado.persona.genero, puesto: data.empleado.puesto.id, jefatura: data.empleado.jefatura.id, grado_estudios: data.empleado.grado_estudios, carrera: data.empleado.carrera, id_tel:data.id, extension: data.extension, telefono: data.telefono, tipo: data.tipo, id_direccion:data.empleado.direccion.id, calle: data.empleado.direccion.calle, num_ext: data.empleado.direccion.num_ext, municipio: data.empleado.direccion.municipio, num_int: data.empleado.direccion.num_int, cp: data.empleado.direccion.codigo_postal, localidad: data.empleado.direccion.localidad })

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (params.id) {
            GetEmpleado(params.id)
        }

    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        document.getElementById('btn-submit-user').disabled = true;
        try {
            let res;
            res = await PersonalServer.updatePersona(empleado)
            const person = await res.json()

            let resDir;
            resDir = await PersonalServer.updateDireccion(empleado)
            const dir = await resDir.json()

            let resEmp;
            resEmp = await PersonalServer.updateEmpleado(empleado, person.id, dir.id)
            const emp = await resEmp.json()

            let resTel;
            resTel = await PersonalServer.updateTelefono(empleado)
            const tel = await resTel.json()


            if (emp) {
                navigate('/empleados')
                window.location.reload();
                alert("Se actualizó el empleado correctamente")
            }

            else {
                setEmpleado(initialState)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='container mt-7'>
            <h2>Editar Empleado</h2><hr />
            <h6>Información Personal</h6><hr />
            <form id='form-edit-user' onSubmit={handleSubmit}>
                <div className="row">
                    <div className="mb-3 col-md-4">
                        <div className="form-group">
                            <label for="exampleInputEmail1" className="form-label">Nombre</label>
                            <input type="text" className="form-control" id="nombre" name='nombre' value={empleado.nombre} onChange={handleInputChange} aria-describedby="emailHelp" placeholder='Nombre' required />
                        </div>
                    </div>

                    <div className="mb-3 col-md-4">
                        <div className="form-group">
                            <label for="exampleInputEmail1" className="form-label">Apellido Paterno</label>
                            <input type="text" className="form-control" id="apep" name='apep' value={empleado.apep} onChange={handleInputChange} aria-describedby="emailHelp" placeholder='Apellido Paterno' required />
                        </div>
                    </div>

                    <div className="mb-3 col-md-4">
                        <div className="form-group">
                            <label for="exampleInputEmail1" className="form-label">Apellido Materno</label>
                            <input type="text" className="form-control" id="apem" name='apem' value={empleado.apem} onChange={handleInputChange} aria-describedby="emailHelp" placeholder='Apellido Materno' required />
                        </div>
                    </div>

                    <div className="mb-3 col-md-4">
                        <div className="form-group">
                            <label for="exampleInputEmail1" className="form-label">Genero</label>
                            <select className='form-select' name="genero" id="genero" value={empleado.genero} onChange={handleSelectChange} required>
                                <option value="">Seleccione un genero</option>
                                <option value="Masculino">Masculino</option>
                                <option value="Femenino">Femenino</option>
                                <option value="Otro">Otro</option>
                            </select>
                        </div>
                    </div>

                    <div className="mb-3 col-md-4">
                        <div className="form-group">
                            <label for="exampleInputEmail1" className="form-label">Edad</label>
                            <input type="number" className="form-control" id="edad" name='edad' value={empleado.edad} onChange={handleInputChange} aria-describedby="emailHelp" placeholder='Edad' min={1} required />
                        </div>
                    </div>


                </div><hr />

                <h6>Información del Empleo</h6><hr />

                <div className="row">
                    <div className="mb-3 col-md-4">
                        <div className="form-group">
                            <label for="exampleInputEmail1" className="form-label">Puesto</label>
                            <select className='form-select' name="puesto" id="puesto" value={empleado.puesto} onChange={handleSelectChange} required>
                                <option value="">Seleccione un puesto para el empleado</option>
                                {puestos.map((puesto) => (
                                    <option value={puesto.id}>{puesto.nombre}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="mb-3 col-md-4">
                        <div className="form-group">
                            <label for="exampleInputEmail1" className="form-label">Jefatura</label>
                            <select className='form-select' name="jefatura" id="jefatura" value={empleado.jefatura} onChange={handleSelectChange} required>
                                <option value="">Seleccione una jefatura</option>
                                {jefaturas.map((jefatura) => (
                                    <option value={jefatura.id}>{jefatura.nombre}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="mb-3 col-md-4">
                        <div className="form-group">
                            <label for="exampleInputEmail1" className="form-label">Grado de Estudios</label>
                            <select className='form-select' name="grado_estudios" id="grado_estudios" value={empleado.grado_estudios} onChange={handleSelectChange} required>
                                <option value="">Seleccione el grado de estudios</option>
                                <option value="Pasante">Pasante</option>
                                <option value="Licenciatura">Licenciatura</option>
                                <option value="Maestría">Maestría</option>
                                <option value="Doctorado">Doctorado</option>
                            </select>
                        </div>
                    </div>

                    <div className="mb-3 col-md-4">
                        <div className="form-group">
                            <label for="exampleInputEmail1" className="form-label">Carrera</label>
                            <input type="text" className="form-control" id="carrera" name='carrera' value={empleado.carrera} onChange={handleInputChange} aria-describedby="emailHelp" placeholder='Carrera' required />
                        </div>
                    </div>


                </div><hr />
                <h6>Información del domicilio</h6><hr />
                <div className="row">
                    <div className="mb-3 col-md-4">
                        <div className="form-group">
                            <label for="exampleInputEmail1" className="form-label">Calle</label>
                            <input type="text" className="form-control" id="calle" name='calle' value={empleado.calle} onChange={handleInputChange} aria-describedby="emailHelp" placeholder='Calle' required />
                        </div>
                    </div>

                    <div className="mb-3 col-md-4">
                        <div className="form-group">
                            <label for="exampleInputEmail1" className="form-label">Num. Ext.</label>
                            <input type="number" className="form-control" id="num_ext" name='num_ext' value={empleado.num_ext} onChange={handleInputChange} aria-describedby="emailHelp" placeholder='Numero Exterior' min={1} required />
                        </div>
                    </div>

                    <div className="mb-3 col-md-4">
                        <div className="form-group">
                            <label for="exampleInputEmail1" className="form-label">Num. Int.</label>
                            <input type="number" className="form-control" id="num_int" name='num_int' value={empleado.num_int} onChange={handleInputChange} aria-describedby="emailHelp" placeholder='Numero Interior' />
                        </div>
                    </div>

                    <div className="mb-3 col-md-4">
                        <div className="form-group">
                            <label for="exampleInputEmail1" className="form-label">Codigo Postal</label>
                            <input type="number" className="form-control" id="cp" name='cp' value={empleado.cp} onChange={handleInputChange} aria-describedby="emailHelp" placeholder='Codigo Postal' minLength={5} maxLength={5} required />
                        </div>
                    </div>

                    <div className="mb-3 col-md-4">
                        <div className="form-group">
                            <label for="exampleInputEmail1" className="form-label">Localidad</label>
                            <input type="text" className="form-control" id="localidad" name='localidad' value={empleado.localidad} onChange={handleInputChange} aria-describedby="emailHelp" placeholder='Localidad' required />
                        </div>
                    </div>

                    <div className="mb-3 col-md-4">
                        <div className="form-group">
                            <label for="exampleInputEmail1" className="form-label">Municipio</label>
                            <input type="text" className="form-control" id="municipio" name='municipio' value={empleado.municipio} onChange={handleInputChange} aria-describedby="emailHelp" placeholder='Municipio' required />
                        </div>
                    </div>

                    <div className="mb-3 col-md-4">
                        <div className="form-group">
                            <label for="exampleInputEmail1" className="form-label">Entidad</label>
                            <select className='form-select' name="entidad" id="entidad" value={empleado.entidad} onChange={handleSelectChange}>
                                <option value="">Seleccione una entidad federativa</option>
                                {entidades.map((entidad) => (
                                    <option value={entidad.id}>{entidad.nombre}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                </div><hr />

                <h6>Información Telefónica</h6><hr />

                <div className="row">
                    <div className="mb-3 col-md-4">
                        <div className="form-group">
                            <label for="exampleInputEmail1" className="form-label">Extensión</label>
                            <select className='form-select' name="puesto" id="puesto" required>
                                <option value="">Seleccione una extensión</option>
                                <option value="52">+52 México</option>
                                <option value="1">+1 Estados Unidos</option>
                            </select>
                        </div>
                    </div>

                    <div className="mb-3 col-md-4">
                        <div className="form-group">
                            <label for="exampleInputEmail1" className="form-label">Tipo</label>
                            <select className='form-select' name="tipo" id="tipo" value={empleado.tipo} onChange={handleSelectChange} required>
                                <option value="">Seleccione un tipo de línea</option>
                                <option value="Movil">Movil</option>
                                <option value="Fija">Fija</option>
                            </select>
                        </div>
                    </div>


                    <div className="mb-3 col-md-4">
                        <div className="form-group">
                            <label for="exampleInputEmail1" className="form-label">Telefono</label>
                            <input type="number" className="form-control" id="telefono" name='telefono' value={empleado.telefono} onChange={handleInputChange} aria-describedby="emailHelp" placeholder='Telefono' minLength={10} min={1} required />
                        </div>
                    </div>
                </div>

            </form><hr />
            <div className="row">
                <div className="col-md-4 offset-8 mt-4">
                    <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={() => empleado.nombre && navigate('/empleados')}>Cancelar</button>
                    <button id='btn-submit-user' type="submit" form='form-edit-user' className="btn btn-primary">Modificar</button>
                </div>
            </div>
        </div>
    )
}

export default UpdateEmpleado