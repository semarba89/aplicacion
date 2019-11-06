import React from 'react';
import Slider from "react-slick"
import Paris from '../imagenes/Paris.jpg'
import Pekin from '../imagenes/Pekin.jpg'
import NewYork from '../imagenes/newyork.jpg'
import Londres from '../imagenes/Londres-UK.jpg'
import HongKong from '../imagenes/Hong-Kong.jpg'
import Bangkok from '../imagenes/Bangkok.jpg'
import Bruselas from '../imagenes/Bruselas.jpg'
import Chicago from '../imagenes/Chicago.jpg'
import Atenas from '../imagenes/Atenas.jpg'
import LosAngeles from '../imagenes/Los-Angeles-1.jpg'
import Singapur from '../imagenes/Singapur-1.jpg'
import Tokio from '../imagenes/Tokio.jpg'



export default class MultipleRows extends React.Component {
    render() {
      const settings = {
        className: "slider variable-width",
        centerMode: true,
        infinite: true,
        centerPadding: "30px",
        slidesToShow: 1,
        speed: 500,
        rows: 2,
        slidesPerRow: 2
      };
      return (
        <div>
        <h2 className='titulos'>Destinos</h2>
        <Slider {...settings}>
          <div>
            <img src={Paris}  alt="logo"/>
              <div>
                <h3 className='subtitulos'>Paris</h3>
              </div>
          </div>
          <div>
          <img src={Pekin}  alt="logo"/>
          <div>
                <h3 className='subtitulos'>Pekin</h3>
              </div>
              </div>
              <div>
            <img src={Londres}  alt="logo"/>
              <div>
                <h3 className='subtitulos'>Londres</h3>
              </div>
          </div>
          <div>
          <img src={NewYork}  alt="logo"/>
          <div>
                <h3 className='subtitulos'>New York</h3>
              </div>
              </div>
              <div>
            <img src={HongKong}  alt="logo"/>
              <div>
                <h3 className='subtitulos'>Hong Kong</h3>
              </div>
          </div>
          <div>
          <img src={Bruselas}  alt="logo"/>
          <div>
                <h3 className='subtitulos'>Bruselas</h3>
              </div>
              </div>
              <div>
            <img src={Bangkok}  alt="logo"/>
              <div>
                <h3 className='subtitulos'>Bangkok</h3>
              </div>
          </div>
          <div>
          <img src={Chicago}  alt="logo"/>
          <div>
                <h3 className='subtitulos'>Chicago</h3>
              </div>
              </div>
              <div>
            <img src={Atenas}  alt="logo"/>
              <div>
                <h3 className='subtitulos'>Atenas</h3>
              </div>
          </div>
          <div>
          <img src={LosAngeles}  alt="logo"/>
          <div>
                <h3 className='subtitulos'>Los Angeles</h3>
              </div>
              </div>
              <div>
            <img src={Singapur}  alt="logo"/>
              <div>
                <h3 className='subtitulos'>Singapur</h3>
              </div>
          </div>
          <div>
          <img src={Tokio}  alt="logo"/>
          <div>
                <h3 className='subtitulos'>Tokio</h3>
              </div>
              </div>
        </Slider>
      </div>
    );
  }
}


