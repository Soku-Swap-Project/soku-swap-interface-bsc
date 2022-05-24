import React from 'react';
import "./TabButton.css";

export type TabButtonProps = {
  data: string[];
  active: string;
  setActive: (v: string) => void;
};

const TabButton = ({
  data,
  active,
  setActive,
}: TabButtonProps) => (
  <div className='tab-button' >
    {data.map((name: string) => (
      <button type="button" key={name} onClick={() => setActive(name)}>
        <p
          className={`tab-button__text ${active === name ? 'tab-button__text--active' : ""}`}
        >
          {name}
        </p>
        {active === name && (
          <div className="tab-button__slider" />
        )}
      </button>
    ))}
  </div>
);

export default TabButton;
