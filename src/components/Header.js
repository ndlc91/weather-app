import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      <div>
        <i className='fas fa-umbrella' style={styles.icon} />{' '}
      </div>
      <h1 style={styles.text}>Check Your Weather</h1>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: 'rgba(20, 20, 20, .4)',
    display: 'flex',
    borderBottom: '1px solid black',
  },
  icon: {
    paddingTop: '32px',
    paddingLeft: '15px',
    paddingRight: '18px',
    color: '#fff',
  },
  text: {
    color: '#fff',
  },
};
export default Header;
