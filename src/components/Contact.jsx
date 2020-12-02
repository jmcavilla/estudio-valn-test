import React from 'react'

const Contact = () => {
    return (
        <>
            {/* <!-- ======= Contact Section ======= --> */}
            <section id="contact" className="contact" style={{
                backgroundColor: "#fff",
                paddingTop: "15px",
                paddingBottom: "0px"
            }}>
                <div className="section-title" data-aos="fade-up">
                    <h2>Contacto</h2>
                </div>
                <div className="container">

                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="info-box  mb-4">
                            <i className="bx bx-envelope"></i>
                            <h3>Email Us</h3>
                            <p>contact@example.com</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="info-box  mb-4">
                            <i className="bx bx-phone-call"></i>
                            <h3>Call Us</h3>
                            <p>+1 5589 55488 55</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
