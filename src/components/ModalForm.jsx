import React, { useState, useEffect } from 'react'
import * as PersonalServer from '../services/PersonalServer'
import { useNavigate } from 'react-router-dom'

function ModalForm() {
    const [jefaturas, setJefaturas] = useState([])
    const [puestos, setPuestos] = useState([])
    const [entidades, setEntidades] = useState([])

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

    useEffect(() => {
        listaJefaturas()
        listaPuestos()
        listaEntidades()
    }, [])

    const empleadoState = { nombre: "", apep: "", apem: "", edad: "", genero: "", puesto: "", jefatura: "", grado_estudios: "", carrera: "", calle: "", num_ext: "", municipio: "", entidad:"", num_int: 0, cp: "", localidad: "" }
    const [empleado, setEmpleado] = useState(empleadoState)

    const handleInputChange = (e) => {
        setEmpleado({ ...empleado, [e.target.name]: e.target.value })
    }

    const handleSelectChange = (e) => {
        console.log(e.target.name)
        setEmpleado({ ...empleado, [e.target.name]: e.target.value })
        console.log(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        document.getElementById('btn-submit-user').disabled=true;
        try {
            let res;
            res = await PersonalServer.createPersona(empleado)
            const person = await res.json()


            let resDir;
            resDir = await PersonalServer.createDireccion(empleado)
            const dir = await resDir.json()
            console.log(dir.id, person.id)

            let resEmp;
            resEmp = await PersonalServer.createEmpleado(empleado, person.id, dir.id)
            const emp = await resEmp.json()


            if (emp) {
                window.location.reload();
            }

            else {
                setEmpleado(initialState)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <div className="modal modal-xl fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Agregar usuario</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <h6>Información Personal</h6><hr />
                            <form id='form-add-user' onSubmit={handleSubmit}>
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
                                            <select className='form-select' name="entidad" id="entidad"  value={empleado.entidad} onChange={handleSelectChange}>
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
                                            <select className='form-select' name="puesto" id="puesto">
                                                <option value="">Seleccione una extensión</option>
                                                <option value="52">+52 México</option>
                                                <option value="1">+1 Estados Unidos</option>
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

                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
                            <button id='btn-submit-user' type="submit" form='form-add-user' className="btn btn-primary">Agregar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalForm