import React from 'react';
import imgfooter from '../imagenes/homeIcon.png';



function Footer() {
    return (
        <footer className="page-footers white">
            <div className="center-align section">
                <a href="/"><img className="responsive-img" width="5%" src={imgfooter} alt="logo" /></a>
            </div>
            <div className="footer-copyright-grey-lighten-5">
                <div className="container grey-text">
                    © 2019 Copyright
                </div>
            </div>
        </footer>
    );
}
export default Footer