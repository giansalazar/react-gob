import {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import * as PersonalServer from '../services/PersonalServer'
import ModalForm from './ModalForm';

function EmpleadosTable({ empleados, listaEmpleados }) {

    const handleDelete = async (empleado_id) => {
        await PersonalServer.deleteEmpleado(empleado_id)
        listaEmpleados()

    }

    console.log(empleados)
    const navigate = useNavigate()

    const handleEditEmpleado = (empleado_id) =>{
        navigate(`react-gob/updateEmpleado/${empleado_id}`)
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
                        {empleados.map((emp) => (
                            <tr>
                                <td>{emp.empleado.persona.apep}</td>
                                <td>{emp.empleado.persona.apem}</td>
                                <td>{emp.empleado.persona.nombre}</td>
                                <td>{emp.empleado.persona.genero}</td>
                                <td>{emp.empleado.persona.edad}</td>
                                <td>{emp.empleado.carrera}</td>
                                <td>{emp.empleado.grado_estudios}</td>
                                <td>{emp.empleado.puesto.nombre}</td>
                                <td>{emp.empleado.jefatura.nombre}</td>
                                <td>+{emp.extension} {emp.telefono}</td>
                                <td>{emp.empleado.direccion.calle} {emp.empleado.direccion.num_ext}</td>
                                <td><button className='btn-action btn-delete' onClick={() => emp.empleado.persona.id && handleDelete(emp.empleado.persona.id)}><i class="bi bi-trash"></i></button><button className='btn-action btn-edit'  onClick={() => emp.empleado.persona.id && handleEditEmpleado(emp.id)}><i class="bi bi-pen"></i></button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>

            <ModalForm/>

        </>
    )
}

export default EmpleadosTable