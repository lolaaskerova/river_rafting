import React from "react";
import ModalImage from "react-modal-image";
import "./secondGrid.scss";
const SecondGridModal = (props) => {
  const { image } = props;
  return (
    <div className="col-lg-6 col-md-4">
      <ModalImage className="modal-img" small={image} large={image} alt="" />
    </div>
  );
};

export default SecondGridModal;
