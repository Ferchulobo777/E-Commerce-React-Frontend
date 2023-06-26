import React from 'react';

const Footer = () => {
  return (
    <section className="footer mt-10">
      <div className="container_footer">
        <h3 className="academlo my_name flex justify-center mt-6">Fernando Rodriguez</h3>
        <p className="text_1">Proyecto Full-Stack React-Node-JS</p>
        <p className="contact">Contactame</p>
        <div className="social_media">
          <div className="container_icons">
            <a
              className="icon"
              href="https://api.whatsapp.com/send?phone=2612060674"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fa-brands fa-whatsapp icon heart rounded-full"></i>
            </a>
          </div>
          <div className="container_icons">
            <a
              className="icon"
              href="https://github.com/Ferchulobo777"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fa-brands fa-github icon heart rounded-full"></i>
            </a>
          </div>
          <div className="container_icons">
            <a
              className="icon"
              href="mailto:ferchulobo2015@gmail.com"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fa-sharp fa-regular fa-envelope icon heart rounded-full"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
