import React from 'react';
import './Backtotop.css';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';

const Backtotop = () => {
  const [showBacktotop, setShowbacktotop] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setShowbacktotop(true);
    } else if (scrolled <= 300) {
      setShowbacktotop(false);
    }
  };

  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <div
      className={`backtotop ${showBacktotop ? 'active' : ''}`}
      onClick={goTop}
    >
      <FontAwesomeIcon icon={faRocket} className='backtotop_icon' />
    </div>
  );
};

export default Backtotop;
