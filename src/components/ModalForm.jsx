import React, { useState, useEffect, useContext } from 'react'
import * as PersonalServer from '../services/PersonalServer'
import Context from '../context/Context'


function ModalForm({ show }) {

    const { jefaturas, setJefaturas, puestos, setPuestos, entidades, setEntidades, listaEntidades, listaJefaturas, listaPuestos, empleado, setEmpleado, handleInputChange, handleSelectChange } = useContext(Context)

    useEffect(() => {
        listaJefaturas()
        listaPuestos()
        listaEntidades()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        document.getElementById('btn-submit-user').disabled = true;
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

            let resTel;
            resTel = await PersonalServer.createTelefono(empleado)
            const tel = await resTel.json()


            if (tel) {
                window.location.reload();
                alert("Se creo el empleado correctamente")
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
            <div className="modal modal-xl fade" show={show} id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Agregar usuario</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <h6>Informaci??n Personal</h6><hr />
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

                                <h6>Informaci??n del Empleo</h6><hr />

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
                                                <option value="Maestr??a">Maestr??a</option>
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
                                <h6>Informaci??n del domicilio</h6><hr />
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

                                <h6>Informaci??n Telef??nica</h6><hr />

                                <div className="row">
                                    <div className="mb-3 col-md-4">
                                        <div className="form-group">
                                            <label for="exampleInputEmail1" className="form-label">Extensi??n</label>
                                            <select className='form-select' name="extension" id="extension" value={empleado.extension} onChange={handleSelectChange}>
                                                <option value="">Seleccione una extensi??n</option>
                                                <option value="52">+52 M??xico</option>
                                                <option value="1">+1 Estados Unidos</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="mb-3 col-md-4">
                                        <div className="form-group">
                                            <label for="exampleInputEmail1" className="form-label">Tipo</label>
                                            <select className='form-select' name="tipo" id="tipo" value={empleado.tipo} onChange={handleSelectChange}>
                                                <option value="">Seleccione un tipo de l??nea</option>
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