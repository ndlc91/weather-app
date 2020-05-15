import React from 'react';

const ToggleScale = ({ toggleTempScale }) => {
  return (
    <div style={styles.buttonContainer}>
      <button type='button' onClick={() => toggleTempScale(true)}>
        F°
      </button>
      <button type='button' onClick={() => toggleTempScale(false)}>
        C°
      </button>
    </div>
  );
};

const styles = {
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: '20px',
  },
};

export default ToggleScale;
