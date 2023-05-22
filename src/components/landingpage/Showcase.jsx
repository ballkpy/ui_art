import React from 'react';
import { useState } from 'react';
import './Showcase.css';
import { showCase } from '../../assets/index.js';
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

const Showcase = () => {
  const [visible, setVisible] = useState(10);

  const countVisible = () => {
    setVisible(visible + 10);
  };

  Fancybox.bind('[data-fancybox]', {
    contentClick: 'iterateZoom',
    Images: {
      Panzoom: {
        maxScale: 1,
      },
    },
  });

  return (
    <div id='showCase'>
      <div className='showCase_container'>
        <h1 className='showcase_text'>ผลงานรูปภาพจากเอไอ</h1>
        <div className='showcase_grid'>
          {showCase.slice(0, visible).map((el, index) => (
            <div className='showcase_item'>
              <a href={el.image} data-fancybox>
                <img src={el.image} width='100%' />
              </a>
            </div>
          ))}
        </div>
        <a
          className={`showcase_btn ${visible === 20 ? 'hide' : ''}`}
          onClick={countVisible}
        >
          ดูเพิ่มเติม
        </a>
      </div>
    </div>
  );
};

export default Showcase;
