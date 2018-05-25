import React from 'react';
import Modal from 'react-modal';

// const OptionModal = () => (
//     <div>
//         Something!
//     </div>
// );

const OptionModal = (props) => (
    <Modal
      isOpen={!!props.selectedOption}
      contentLabel="Selected Option"
      closeTimeMS={4000}
      className="modal"
    >
        <h3 className="modal__title">Selected Option</h3>
        {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
        <button className="button" onClick={props.clearModal}>Just Do It!</button>
    </Modal>
);

export default OptionModal;