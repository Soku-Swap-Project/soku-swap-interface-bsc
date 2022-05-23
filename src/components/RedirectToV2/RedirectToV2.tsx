import React, { useEffect } from 'react';
import './RedirectToV2.css';

const SOKUSWAP_VERSION_2_URL = process.env.REACT_APP_VERSION_2_URL || "https://alpha-sokuswap.vercel.app/";

const RedirectToV2 = () => {
  useEffect(() => {
    window.location.replace(SOKUSWAP_VERSION_2_URL);
  }, []);
  return (
    <div className="redirect-to-v2">
      Redirecting to SokuSwap version 2 . . .
    </div>
  );
};

export default RedirectToV2;
