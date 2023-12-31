import React from 'react';
import Modal from 'react-modal';

const ConfirmationModal = ({ isOpen, onClose, onConfirm, message }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Confirmation Modal"
    >
      <div className='flex items-center justify-center w-full h-full  '>
        <div className='flex flex-col justify-center items-center h-[200px] m-5 p-5 w-[400px] rounded-lg shadow-xl'>

          <p className='font-serif text-center font-semibold text-lg'>{message}</p>
          <div className='flex '>
            <button onClick={onConfirm} className='mt-8 font-semibold m-2 p-3 font-serif text-lg rounded-lg bg-[#FA782F] text-white'>Delete</button>
            <button onClick={onClose} className='mt-8 font-semibold m-2 p-3 font-serif text-lg rounded-lg bg-[#FA782F] text-white'>Cancel</button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmationModal;