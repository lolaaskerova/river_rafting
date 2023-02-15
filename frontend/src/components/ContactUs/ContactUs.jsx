import React from "react";
import "./contactUs.scss";
import phone from "../../assets/images/phone.png";
import letter from "../../assets/images/letter.png";
import locate from "../../assets/images/locate.png";
import ContactUsInputs from "./ContactUsInputs/ContactUsInputs";
const ContactUs = () => {
  return (
    <div className="container contact-us">
      <div className="contact-us-title">
        <h1>CONTACT US</h1>
        <p>
          Etiam cursus sapien quis ligula rhoncus, quis sollicitudin dolor
          ultricies.
        </p>
      </div>
      <div className="row contact-us-about">
        <div className="col-lg-6 col-md-12 contact-us-icons">
          <div className="contact">
            <div className="logo">
              <img src={phone} alt="logo" />
            </div>
            <div className="contact-us-content">
              <h4>Give us a call</h4>
              <p>
                Vestibulum id ligula porta felis euismod semper. Nullam eget
                urna mollis ornare vel eu vistos un mollis.
              </p>
            </div>
          </div>
          <div className="contact">
            <div className="logo">
              <img src={letter} alt="logo" />
            </div>
            <div className="contact-us-content">
              <h4>Send us an email</h4>
              <p>
                Lorem id ligula porta felis euismod semper. Nullam quis risus
                eget urna mollis ornare vel eu vistos un surlace leo.
              </p>
            </div>
          </div>
          <div className="contact">
            <div className="logo">
              <img src={locate} alt="logo" />
            </div>
            <div className="contact-us-content">
              <h4>Drop by and talk</h4>
              <p>
                Etiam cursus sapien quis ligula rhoncus, quis sollicitudin dolor
                ultricies. Cras tempus aliquet quam.
              </p>
            </div>
          </div>
        </div>
        <ContactUsInputs />
      </div>
    </div>
  );
};

export default ContactUs;
