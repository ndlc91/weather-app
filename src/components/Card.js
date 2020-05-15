import React from 'react';

const Card = (props) => {
  return (
    <div style={styles.cardContainer}>
      <div style={styles.card}>{props.children}</div>
    </div>
  );
};

const styles = {
  cardContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '100px',
  },
  card: {
    backgroundColor: 'rgba(230, 230, 230, .3)',
    padding: '100px',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderRadius: '10px',
  },
};

export default Card;
