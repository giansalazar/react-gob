import React from 'react'
import MuseoMascara from '../assets/museo_de_la_mascara.webp'
import PalacioGob from '../assets/palacio_gobierno.webp'
import PlazaSLP from '../assets/iglesia_slp.webp'
import TeatroPaz from '../assets/teatro_de_la_paz.webp'

function Carousel() {
    return (
        <>
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="5000">
                        <img src={MuseoMascara} className="d-block w-100" alt="..."></img>
                    </div>
                    <div className="carousel-item" data-bs-interval="5000">
                        <img src={PalacioGob} className="d-block w-100" alt="..."></img>
                    </div>
                    <div className="carousel-item" data-bs-interval="5000">
                        <img src={PlazaSLP} className="d-block w-100" alt="..."></img>
                    </div>
                    <div className="carousel-item" data-bs-interval="5000">
                        <img src={TeatroPaz} className="d-block w-100" alt="..."></img>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default Carousel