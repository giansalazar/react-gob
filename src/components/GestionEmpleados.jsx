import React from 'react'
import EmpleadosList from '../services/EmpleadosList'
import ModalForm from './ModalForm'
import ReactHTMLTableToExcel from 'react-html-table-to-excel_xlsx';


function GestionEmpleados() {

    return (
        <>
            <div className="container container-empleados">
                <h2>Gestión de Empleados del GOB-SLP</h2><hr />
                <div className="row">
                    <div id='btns-tb' className="col-md-12 offset-8">
                        <button className='btn-add-user' data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="bi bi-person-add"></i> Agregar Usuario</button>
                        <ReactHTMLTableToExcel
                            id="test-table-xls-button"
                            className="btn-export-excel"
                            table="empleados"
                            filename="empleados"
                            filetype="xlsx"
                            sheet="tablexls"
                            buttonText="Exportar a Excel"
                        />
                    </div>
                </div>
                <EmpleadosList />
                <ModalForm />
            </div>

        </>
    )
}

export default GestionEmpleados