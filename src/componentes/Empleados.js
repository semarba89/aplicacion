
import React, { Component } from 'react';

import Luke from '../imagenes/Lukephoto.png'
import Martin from '../imagenes/Martin copy.png'
import Sabrina from '../imagenes/Sabrina copy.png'
import Sai from '../imagenes/Sai.png'
import Anikaphoto from '../imagenes/Anikaphoto.png'
import Linkedin from '../imagenes/likedin.png'


 
class DemoCarousel extends Component {
    render() {
        return (
            <div className='container'>
                <div className='row'>
                <div className='col s12'>       
                    <div class="card">
                        <div class="card-image waves-effect waves-block waves-light">
                        <img class="empleado" src={Anikaphoto}/>
                        </div>
                        <div class="card-content">
                        <span class="card-title activator grey-text text-darken-4">Anika Ban De Verg<i class="material-icons right">more_vert</i></span>
                        <p><a href="#"><img class="linkedin" src={Linkedin}/></a></p>
                        </div>
                        <div class="card-reveal">
                        <span class="card-title grey-text text-darken-4">Founder & Ceo<i class="material-icons right">close</i></span>
                        <p>Representandonos a nivel pais desde el 2008.</p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-image waves-effect waves-block waves-light">
                        <img class="empleado" src={Luke}/>
                        </div>
                        <div class="card-content">
                        <span class="card-title activator grey-text text-darken-4">Luke Williams<i class="material-icons right">more_vert</i></span>
                        <p><a href="#"><img class="linkedin" src={Linkedin}/></a></p>
                        </div>
                        <div class="card-reveal">
                        <span class="card-title grey-text text-darken-4">Agile and Lean Methodology Ninja<i class="material-icons right">close</i></span>
                        <p>Experto en metodologias agiles desde 2012 Representandonos.</p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-image waves-effect waves-block waves-light">
                        <img class="empleado" src={Martin}/>
                        </div>
                        <div class="card-content">
                        <span class="card-title activator grey-text text-darken-4">Martin Wrigte<i class="material-icons right">more_vert</i></span>
                        <p><a href="#"><img class="linkedin" src={Linkedin}/></a></p>
                        </div>
                        <div class="card-reveal">
                        <span class="card-title grey-text text-darken-4">Tecnical Development Team Lead<i class="material-icons right">close</i></span>
                        <p>Desarrollados Web full stack el 2012.</p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-image waves-effect waves-block waves-light">
                        <img class="empleado" src={Sabrina}/>
                        </div>
                        <div class="card-content">
                        <span class="card-title activator grey-text text-darken-4">Sabrina Miller<i class="material-icons right">more_vert</i></span>
                        <p><a href="#"><img class="linkedin" src={Linkedin}/></a></p>
                        </div>
                        <div class="card-reveal">
                        <span class="card-title grey-text text-darken-4">Digital Product Owner<i class="material-icons right">close</i></span>
                        <p>Experta en desarrollo de productos digitales con nosotros desde 2013.</p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-image waves-effect waves-block waves-light">
                        <img class="empleado" src={Sai}/>
                        </div>
                        <div class="card-content">
                        <span class="card-title activator grey-text text-darken-4">Sai Patel<i class="material-icons right">more_vert</i></span>
                        <p><a href="#"><img class="linkedin" src={Linkedin}/></a></p>
                        </div>
                        <div class="card-reveal">
                        <span class="card-title grey-text text-darken-4">UX Designer<i class="material-icons right">close</i></span>
                        <p>Generando grandes experiencias de usario a nuestros clientes desde 2015.</p>
                        </div>
                    </div>
               
               
            </div>
            </div>
            </div>
        );
    }
};
 
export default DemoCarousel




