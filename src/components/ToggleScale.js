import React from 'react';

const ToggleScale = ({ toggleTempScale }) => {
  return (
    <div>
      <button type='button' onClick={() => toggleTempScale(true)}>
        F°
      </button>
      <button type='button' onClick={() => toggleTempScale(false)}>
        C°
      </button>
    </div>
  );
};

export default ToggleScale;
