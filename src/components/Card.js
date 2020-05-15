import React from 'react';

const Card = (props) => {
  return <div style={styles.card}>{props.children}</div>;
};

const styles = {
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '100px',
    padding: '100px',
    borderWidth: '1px',
    borderStyle: 'solid',
  },
};

export default Card;
