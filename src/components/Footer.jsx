import React from 'react';

const Footer = () => {
    return (
        <div style={{ bottom: 0, width: "100%" }}>
            <footer className="text-center text-lg-start bg-light text-muted footer" style={{ paddingTop: '2px' }} >


                <section className="">
                    <div className="container text-center text-md-start mt-5">

                        <div className="row mt-3">

                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">
                                    <i className="fas fa-gem me-3"></i>NeuraLink
                                </h6>
                                <p>
                                    Here you can check if you have Brain Tumor or Alzheimer disease☠️
                                </p>
                            </div>



                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">
                                    Products
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset">Brain Tumor Detection</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Alzheimer Detection</a>
                                </p>
                            </div>



                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">
                                    Useful links
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset">Pricing</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Settings</a>
                                </p>

                            </div>
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                                <p><i className="fas fa-home me-3"></i> San Pada, Mumbai </p>
                                <p>
                                    <i className="fas fa-envelope me-3"></i>
                                    tumorwala@gmail.com
                                </p>
                            </div>

                        </div>

                    </div>
                </section>
            </footer>

        </div>
    )
}

export default Footer;