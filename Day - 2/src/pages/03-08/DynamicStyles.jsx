import React, { useState } from 'react';
import "./DynamicStyle.css"


// Reusable Button component
const Button = ({ children }) => {
  return <button>{children}</button>;
};

const DynamicStyles = () => {
  const [toggleClass, setToggleClass] = useState(false);

  const buttonStyles = toggleClass ? "active-btn" : "inactive-btn";

  const handleClick = () => {
    setToggleClass(!toggleClass);
  };

  return (
    <div>
      <button className={buttonStyles} onClick={handleClick}>
        {toggleClass ? "Active" : "Inactive"}
      </button>

      {toggleClass && "True"}

      <Button>Click here.</Button>
    </div>
  );
};

export default DynamicStyles;

