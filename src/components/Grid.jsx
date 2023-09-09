import React from 'react';
import Luis from '../assets/luis.png'
import Mission from '../assets/mission.svg'
import Vision from '../assets/vision.svg'
import Heart from '../assets/heart.svg'

const Grid = () => {

    return (
        <>
        <div className="grid">
            <div className="div1">
                <div className="content">
                <div className="left-pic">
                    <img className='pic' src={Luis} alt="" />
                </div>
                <div className="right-content">
                    <div className="quote">
                        
                        <p> <span style={{fontWeight:'600'}}>"</span> <span style={{fontWeight:'600'}}>Comprometidos</span> con la excelencia en limpieza e higiene, creamos espacios impecables y saludables para nuestros clientes <span style={{fontWeight:'600'}}>"</span></p>
                        
                    </div>
                    <div className="footer">
                        <p className='name'>Luis Díaz Arias</p>
                        <p className='subtitle'>Gerente General</p>
                    </div>
                </div>
                </div>
 
            </div>
            <div className="div2">
                <div className="right-content">
                    <p className="title">Nuestra <span style={{fontWeight:'600'}}>Misión</span></p>
                    <p className='description'>Promover espacios saludables a través de soluciones de higiene y desinfección confiables y efectivas</p>
                </div>
                <div className="right-icon">
                    <img src={Mission} alt="" />
                </div>
            </div>
            <div className="div3">
            <div className="right-content">
                    <p className="title">Nuestra <span style={{fontWeight:'600'}}>Visión</span></p>
                    <p className='description'>Consolidarnos como una institución de servicios de higiene y mantencion de prestigio, reconocida y valorada por la calidad de su servicio.</p>
                </div>
                <div className="right-icon">
                    <img src={Vision} alt="" />
                </div>
            </div>
            <div className="div4">
                <div className="upper-icon">
                    <img src={Heart} alt="" />
                </div>
                <div className="bottom-content">
                    <p className="title">La edad <span style={{fontWeight:'600'}}>no es un límite</span></p>
                    <p className="description">
                    Somos una empresa comprometida con la comunidad y por esta razón creemos en la inclusión e igualdad de oportunidades para todas las personas, sin importar la edad o tipo de capacidades.
                    </p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Grid