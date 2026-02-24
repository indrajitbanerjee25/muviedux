import React from 'react';
import '../styles.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='footer'>
      <p className='footer-text'>
        © {currentYear} Moviedux, All right reserved.
        <p className='text-xs bg text-center mt-6'>
          This is a personal learning project created for educational purposes
          only. It is not affiliated with, endorsed by, or any other company or
          service.
        </p>
      </p>
    </footer>
  );
}
