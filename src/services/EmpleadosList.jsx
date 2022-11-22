import React, { useState, useEffect } from 'react'
import EmpleadosTable from '../components/EmpleadosTable'
import * as PersonalServer from './PersonalServer'

function EmpleadosList() {
    const [empleados, setEmpleados] = useState([])

    const listaEmpleados = async () => {
        try {
            const res = await PersonalServer.listaEmpleados()
            const data = await res.json()
            setEmpleados(data)
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        listaEmpleados()
    }, [])

    return (
        <div>
            <EmpleadosTable empleados={empleados} listaEmpleados={listaEmpleados} />
        </div>
    )
}

export default EmpleadosList