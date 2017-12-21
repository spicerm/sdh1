import React from "react";
import logo from "../images/footer-logo.png";

const Footer = () =>
<footer className="footer">
    <div className="container">
        <div className="row">
        <div className="col-sm-8">
            <div className="row">
            <div className="footer-detail-box col-xs-4">
                <h3>Quick Links</h3>
                <ul>
                <li><a href="#">Terms</a></li>
                <li><a href="#">Licenses</a></li>
                <li><a href="#">Market API</a></li>
                <li><a href="#">Lorem ipsum</a></li>
                <li><a href="#">Sitemap</a></li>
                </ul>
            </div>
            <div className="footer-detail-box col-xs-4">
                <h3>Help</h3>
                <ul>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Licenses</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Conditions</a></li>
                </ul>
            </div>
            <div className="footer-detail-box col-xs-4">
                <h3>Quick Links</h3>
                <ul>
                <li><a href="#">Terms</a></li>
                <li><a href="#">Licenses</a></li>
                <li><a href="#">Market API</a></li>
                <li><a href="#">Lorem ipsum</a></li>
                <li><a href="#">Sitemap</a></li>
                </ul>
            </div>
            </div>
        </div>
        <div className="col-sm-4">
            <a href="#" className="footer-logo">
            <img src={logo} alt=""/>
            </a>
            <div className="house-listed-detail">
            <h4 className="pull-left">
                53,000
                <span>House Listed</span>
            </h4>
            <h4 className="pull-left">
                23,000
                <span>Succcessful Transactions</span>
            </h4>
            <div className="clearfix"></div>
            </div>
            <ul className="footer-social-media">
            <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i> </a></li>
            <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
            <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
            </ul>
        </div>
        </div>
        <div className="row">
        <div className="col-sm-12">
            <p className="copyright-text">&copy; 2017 Secret Dream House. All Rights Reserved</p>
        </div>
        </div>
    </div>
</footer>

export default Footer;