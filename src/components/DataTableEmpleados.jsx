import { useNavigate } from 'react-router-dom';
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import * as PersonalServer from '../services/PersonalServer'
import ModalForm from './ModalForm';

const columns = [
    {
        name: 'Apellido Paterno',
        selector: row => row.apep,
        sortable: true,
    },
    {
        name: 'Apellido Materno',
        selector: row => row.apem,
        sortable: true,
    },
    {
        name: 'Nombre',
        selector: row => row.nombre,
        sortable: true,
    },
    {
        name: 'Genero',
        selector: row => row.genero,
        sortable: true,
    }, {
        name: 'Edad',
        selector: row => row.edad,
        sortable: true,
        width: "13vh",
    },
    {
        name: 'Carrera',
        selector: row => row.carrera,
        sortable: true,
    }, {
        name: 'Grado de Estudios',
        selector: row => row.grado_estudios,
        sortable: true,
    },
    {
        name: 'Puesto',
        selector: row => row.puesto,
        sortable: true,
    }, {
        name: 'Jefatura',
        selector: row => row.jefatura,
        sortable: true,
    },
    {
        name: 'Telefono',
        selector: row => row.telefono,
        sortable: true,
    }, {
        name: 'Direccion',
        selector: row => row.direccion,
        sortable: true,
    },
    {
        name: '',
        selector: row => row.acciones,
        sortable: false,
        width: "10vh"
    },

    {
        name: '',
        selector: row => row.acciones2,
        sortable: false,
        width: "10vh",
    },

    {
        name: '',
        selector: row => row.acciones3,
        sortable: false,
        width: "10vh",
    },
];


function DataTableEmpleados({ empleados, listaEmpleados }) {
    const handleDelete = async (empleado_id) => {
        await PersonalServer.deleteEmpleado(empleado_id)
        listaEmpleados()

    }

    const navigate = useNavigate()

    const handleEditEmpleado = (empleado_id) => {
        navigate(`/updateEmpleado/${empleado_id}`)
    }


    return (
        <div className='table-responsive'>
            <DataTableExtensions
                columns={columns}
                data={empleados.map((empleado) => (
                    {
                        id: empleado.id,
                        apep: empleado.persona.apep,
                        apem: empleado.persona.apem,
                        nombre: empleado.persona.nombre,
                        genero: empleado.persona.genero,
                        edad: empleado.persona.edad,
                        carrera: empleado.carrera,
                        grado_estudios: empleado.grado_estudios,
                        puesto: empleado.puesto.nombre,
                        jefatura: empleado.jefatura.nombre,
                        telefono: empleado.direccion.calle,
                        direccion: empleado.direccion.calle,
                        acciones: <button className='btn-action btn-delete' onClick={() => empleado.persona.id && handleDelete(empleado.persona.id)}><i class="bi bi-trash"></i></button>,
                        acciones2: <button className='btn-action btn-edit' onClick={() => empleado.persona.id && handleEditEmpleado(empleado.id)}><i class="bi bi-pen"></i></button>,
                        acciones3: <button className='btn-action btn-export-pdf'><i class="bi bi-filetype-pdf"></i></button>,
                    }
                ))
                }
            >
                <DataTable
                    noHeader
                    defaultSortField="id"
                    defaultSortAsc={false}
                    pagination
                    highlightOnHover
                />
            </DataTableExtensions>
            
            <ModalForm />
        </div>
    );
};

export default DataTableEmpleados