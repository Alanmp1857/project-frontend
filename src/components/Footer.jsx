import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <div className="blockcode" style={{ opacity: '0.7', backgroundColor: 'black' }} >
                <footer className="page-footer shadow">
                    <div className="d-flex flex-column mx-auto py-5" style={{ width: "80%" }}>
                        <div className="d-flex flex-wrap justify-content-between">
                            <div>
                                <a href="/#" className="d-flex align-items-center p-0 text-white">
                                    <span className="ms-3 h5 font-weight-bold">NeuraLink</span>
                                </a>
                                <p className="my-3" style={{ width: "250px", color: "white" }}>
                                    Here you can check if you have Brain Tumor or Alzheimer disease☠️
                                </p>
                            </div>
                            <div>
                                <p className="h5 mb-4" style={{ fontWeight: "600", color: "white" }}>Info</p>
                                <ul className="p-0" style={{ listStyle: "none", cursor: "pointer" }}>
                                    <li className="my-2">
                                        <a className="text-white" href="/">About Us</a>
                                    </li>
                                    <li className="my-2">
                                        <a className="text-white" href="/">Contact</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <p className="h5 mb-4" style={{ fontWeight: "600", color: "white" }}>Our Products</p>
                                <ul className="p-0" style={{ listStyle: "none", cursor: "pointer" }}>
                                    <li className="my-2">
                                        <Link to="/Braintumor" className="text-white">Brain Tumor Detection</Link>
                                    </li>
                                    <li className="my-2">
                                        <Link to="/Alzheimer" className="text-white">Alzheimer's Detection</Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <p className="h5 mb-4" style={{ fontWeight: "600", color: "white" }}>Access</p>
                                <ul className="p-0" style={{ listStyle: "none", cursor: "pointer" }}>
                                    <li className="my-2">
                                        <a className="text-white" href="/">Sign Up</a>
                                    </li>
                                    <li className="my-2">
                                        <a className="text-white" href="/">Sign In</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="text-center mt-4">
                            <small style={{ color: "white" }}>&copy; NeuraLink, 2023. All rights reserved.</small>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default Footer;
