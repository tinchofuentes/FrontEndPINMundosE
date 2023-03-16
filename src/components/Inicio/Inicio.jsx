import React from 'react'
import { Link } from 'react-scroll';
import imagen1 from '../../assets/images/1.jpg'
import imagen2 from '../../assets/images/2.jpg'
import imagen3 from '../../assets/images/3.jpg'
import './inicio.scss'

const Inicio = () => {
    return (
        <div className='inicio-content' id='inicio'>
            <div id="carouselExampleCaptionsOne" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptionsOne" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptionsOne" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptionsOne" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={imagen1} className="imagen-carousel" alt="img1" />
                        <div className="carousel-caption">
                            <h1 className='caption-h1'>Somos una empresa que brinda las soluciones que estas buscando</h1>
                            <p className='caption-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus minima, repellat debitis at autem eum!</p>
                            <Link className='btn btn-warning' activeClass='active' to='nosotros' spy={true} smooth={true} offset={-30} duration={500} >Conocé más!</Link>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={imagen2} className="imagen-carousel" alt="img2" />
                        <div className="carousel-caption">
                            <h1 className='caption-h1'>Diseñamos los productos que necesitas con materia prima de primera calidad</h1>
                            <p className='caption-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam similique laborum ab inventore magnam id.</p>
                            <Link className='btn btn-warning' activeClass='active' to='productos' spy={true} smooth={true} offset={-30} duration={500} >Ir a la tienda</Link>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={imagen3} className="imagen-carousel" alt="img3" />
                        <div className="carousel-caption">
                            <h1 className='caption-h1'>Estamos para hacer realidad tus ideas</h1>
                            <p className='caption-text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate ut et porro maxime necessitatibus ratione laboriosam quaerat, doloribus eos quis!</p>
                            <Link className='btn btn-warning' activeClass='active' to='servicios' spy={true} smooth={true} offset={-30} duration={500} >Descubrilo!</Link>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptionsOne" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptionsOne" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div >
    )
}

export default Inicio