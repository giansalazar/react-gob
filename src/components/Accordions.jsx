import React from 'react'

function Accordions() {
    return (
        <div id='contenido'>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Enlace a la API REST
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <p>Para acceder a la API REST y poder visualizar la información debes contar con el enlace de la api y las credenciales para poder
                                visualizar la información.</p>

                            <p><strong>Enlace:</strong></p>
                            <a target="_blank" href="https://slpgob-api.onrender.com/">API REST</a>

                            <p className='mt-4'><strong>Credenciales:</strong></p>
                            <ul>
                                <li>Usuario: rommel</li>
                                <li>Password: co18mu20*</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Credenciales de Inicio de Sesión en esta página
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <p className='mt-4'><strong>Credenciales:</strong></p>
                            <ul>
                                <li>Usuario: rommel</li>
                                <li>Password: co18mu20*</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Funcionalidad
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <p>En esta página podra gestionar (registrar, editar, eliminar) la información de los empleados del gobierno de SLP.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Accordions