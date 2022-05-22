import React, { useState } from 'react';
import MultipleStarIcon from './MultipleStar.icon';
import './NewVersionModal.css';

const NewVersionModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(true);

  // Prevent opening of modal again and again, on page refresh. 
  // As clicking on nav links may also refresh the page
  const isNewVersionModalClosedByUser = JSON.parse(
    sessionStorage.getItem('isNewVersionModalClosedByUser') as string
  );

  const handleCloseModal= () => {
    sessionStorage.setItem('isNewVersionModalClosedByUser',"true");
    setIsModalVisible(false);
  }
  return (
    <>
    {isModalVisible && !isNewVersionModalClosedByUser && (
      <div  className="new-version-modal">
        <div className="new-version-modal__header">
          <MultipleStarIcon />
          <p>New version</p>
        </div>
        <div className="new-version-modal__upcoming-plan">
          We’re switching to V2 of our platform in the coming days. Hold tight.
        </div>
        <div className="new-version-modal__switching-instruction">
          For now, use the nav links to toggle to see a taste of V2 by clicking
          Swap
        </div>
        <button
          type="button"
          className="new-version-modal__button"
          onClick={handleCloseModal}
        >
          Got it
        </button>
      </div>
    )}
    </>
  );
};

export default NewVersionModal;
