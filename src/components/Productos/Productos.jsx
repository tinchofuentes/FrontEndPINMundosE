import React from 'react'
import imagen6 from '../../assets/images/sillon.jpg'
import imagen7 from '../../assets/images/sillones.jpg'
import './productos.scss'

const Productos = () => {
    return (
        <div className='productos-content' id='productos'>
            <div className="fondo-dos-colores">
                <div id="carouselExampleCaptionsTwo" className="carousel slide">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptionsTwo" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptionsTwo" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="carousel-item-image">
                                <img id='img6' src={imagen6} className="imagen-carousel-dos" alt="img6" />
                            </div>
                            <div className="carousel-item-caption">
                                <div className="carousel-caption">
                                    <h6 className='caption-h6-prod'>Corporis ipsa fuga aliquid.</h6>
                                    <h1 className='caption-h1-prod'>Necessitatibus repellendus</h1>
                                    <p className='caption-text-prod'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus minima, repellat debitis at autem eum!</p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="carousel-item-image">
                                <img id='img7' src={imagen7} className="imagen-carousel-dos" alt="img7" />
                            </div>
                            <div className="carousel-item-caption">
                                <div className="carousel-caption">
                                    <h6 className='caption-h6-prod'>Consectetur adipisicing elit.</h6>
                                    <h1 className='caption-h1-prod'>Repellendus hic </h1>
                                    <p className='caption-text-prod'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam similique laborum ab inventore magnam id.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Productos

