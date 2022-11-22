import React from 'react'
import * as PersonalServer from '../services/PersonalServer'

function EmpleadosTable({ empleados, listaEmpleados }) {

    const handleDelete = async (empleado_id) => {
        await PersonalServer.deleteEmpleado(empleado_id)
        listaEmpleados()
    }
    return (
        <>
            
            <div className='table-responsive'>
                <table id='empleados' class="table table-stripped">
                    <thead>
                        <tr>
                            <th scope="col">Apellido Paterno</th>
                            <th scope="col">Apellido Materno</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Genero</th>
                            <th scope="col">Edad</th>
                            <th scope="col">Carrera</th>
                            <th scope="col">Grado Estudios</th>
                            <th scope="col">Puesto</th>
                            <th scope="col">Jefatura</th>
                            <th scope="col">Telefonos</th>
                            <th scope='col'>Dirección</th>
                            <th scope='col'>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {empleados.map((empleado) => (
                            <tr>
                                <td>{empleado.persona.apep}</td>
                                <td>{empleado.persona.apem}</td>
                                <td>{empleado.persona.nombre}</td>
                                <td>{empleado.persona.genero}</td>
                                <td>{empleado.persona.edad}</td>
                                <td>{empleado.carrera}</td>
                                <td>{empleado.grado_estudios}</td>
                                <td>{empleado.puesto.nombre}</td>
                                <td>{empleado.jefatura.nombre}</td>
                                <td>{empleado.persona.apep}</td>
                                <td>{empleado.direccion.calle} {empleado.direccion.num_ext}</td>
                                <td><button className='btn-action btn-delete' onClick={() => empleado.persona.id && handleDelete(empleado.persona.id)}><i class="bi bi-trash"></i></button><button className='btn-action btn-edit'><i class="bi bi-pen"></i></button><button className='btn-action btn-export-pdf'><i class="bi bi-filetype-pdf"></i></button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>

        </>
    )
}

export default EmpleadosTable