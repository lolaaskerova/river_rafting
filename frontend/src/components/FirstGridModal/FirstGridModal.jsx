import React from "react";
import ModalImage from "react-modal-image";
import "./firstGridModal.scss";
const FirstGridModal = (props) => {
  const { image } = props;
  return (
    <div className="col-lg-4 col-md-6">
      <ModalImage className="modal-img" small={image} large={image} alt="" />
    </div>
  );
};

export default FirstGridModal;
