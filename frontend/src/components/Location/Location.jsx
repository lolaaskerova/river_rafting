import React from "react";
import "./location.scss";
const Location = (props) => {
  const { height } = props;
  return (
    <div className="location">
      <div className="tours-contact ">
        <h4>Company Co.</h4>
        <h6>1366 Main Street Vancouver Canada V8V 3K6</h6>
        <p>Monday to Friday: 10am - 6pm</p>
        <p>Saturday: 11am - 4pm</p>
        <p>Sunday: Closed</p>
        <div className="contact-link">
          <a href="">CALL US</a>
          <a href="">EMAIL US</a>
        </div>
      </div>
      <iframe
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d65085.10765602988!2d-123.17118227206986!3d49.265106526261754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548673f143a94fb3%3A0xbb9196ea9b81f38b!2sVancouver%2C%20BC%2C%20Canada!5e0!3m2!1sen!2s!4v1675949822582!5m2!1sen!2s"
        style={{ width: "100%", height: height, border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Location;
