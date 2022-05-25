import React, { useState, useEffect } from 'react';
import MultipleStarIcon from './MultipleStar.icon';
import TabButton from "../TabButton";
import './NewVersionModal.css';


const SOKUSWAP_VERSION_2_URL = process.env.REACT_APP_VERSION_2_URL || "https://alpha-sokuswap.vercel.app/";

const SOKU_VERSIONS_LIST = ['SOKU v1', 'Try SOKU v2'];

const NewVersionModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(true);
  const [activeVersion, setActiveVersion] = useState(SOKU_VERSIONS_LIST[0]);

  useEffect(() => {
    if (activeVersion === SOKU_VERSIONS_LIST[1]) {
      window.location.href = SOKUSWAP_VERSION_2_URL;
    }
  }, [activeVersion]);

  // Prevent opening of modal again and again, on page refresh. 
  // As clicking on nav links may also refresh the page
  const isNewVersionModalClosedByUser = JSON.parse(
    sessionStorage.getItem('isNewVersionModalClosedByUser') as string
  );

  const handleCloseModal = () => {
    sessionStorage.setItem('isNewVersionModalClosedByUser', "true");
    setIsModalVisible(false);
  }
  return (
    <div className={`new-version-modal ${isNewVersionModalClosedByUser ? "new-version-modal--closed" : ""}`}>
      <TabButton
        data={SOKU_VERSIONS_LIST}
        active={activeVersion}
        setActive={setActiveVersion}
      />
      {isModalVisible && !isNewVersionModalClosedByUser && (
        <>
          <div className="new-version-modal__header">
            <MultipleStarIcon />
            <p>New version</p>
          </div>
          <div className="new-version-modal__upcoming-plan">
            We’re switching to V2 of our platform in the coming days. Hold tight.
          </div>
          <div className="new-version-modal__switching-instruction">
            For now, use the above toggle switch to see a taste of V2 by clicking on &quot;Try SOKU v2&quot;
          </div>
          <button
            type="button"
            className="new-version-modal__button"
            onClick={handleCloseModal}
          >
            Got it
          </button>
        </>
      )}
    </div>
  );
};

export default NewVersionModal;
