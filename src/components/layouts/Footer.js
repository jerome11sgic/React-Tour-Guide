import React from 'react';
import styled from 'styled-components';

 function Footer() {
    return (
        <FooterContainer>
            <div className="footer-middle">
            <div className="container">
                <div className="row">
                    {/* Coulmn 1 */}
                    <div className="col-md-3 col-sm-6">
                        <h4>Lorem ippsum</h4>
                        <ul className="list-unstyled">
                            <li>lorem</li>
                            <li>lorem</li>
                            <li>lorem</li>
                            <li>lorem</li>
                        </ul>
                    </div>
                    {/* Coulmn 2 */}
                    <div className="col-md-3 col-sm-6">
                        <h4>Lorem ippsum</h4>
                        <ul className="list-unstyled">
                        <li><a href="/">lorem</a></li>
                            <li><a href="/">lorem</a></li>
                            <li><a href="/">lorem</a></li>
                            <li><a href="/">lorem</a></li>
                        </ul>
                    </div>
                    {/* Coulmn 3 */}
                    <div className="col-md-3 col-sm-6">
                        <h4>Lorem ippsum</h4>
                        <ul className="list-unstyled">
                        <li><a href="/">lorem</a></li>
                            <li><a href="/">lorem</a></li>
                            <li><a href="/">lorem</a></li>
                            <li><a href="/">lorem</a></li>
                        </ul>
                    </div>
                    {/* Coulmn 3 */}
                    <div className="col-md-3 col-sm-6">
                        <h4>Lorem ippsum</h4>
                        <ul className="list-unstyled">
                            <li><a href="/">lorem</a></li>
                            <li><a href="/">lorem</a></li>
                            <li><a href="/">lorem</a></li>
                            <li><a href="/">lorem</a></li>
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <p className="text-xs-center">
                        &copy;{new Date().getFullYear()} City Guide App -All right reserved 
                    </p>
                </div>
            </div>
            </div>
        </FooterContainer>
    )
}

export default Footer;

const FooterContainer=styled.footer`
    .footer-middle {
        background: var(--mainDark);
        padding-top: 3rem;
        color: var(--mainWhite);
     
    }

    .footer-bottom {
        padding-top:3rem;
        padding-bottom:2rem;
    }

    ul li a {
        color: var(--mainGrey);
    
    }

    ul li a:hover {
        color: var(--mainLightGrey);
    }
`;