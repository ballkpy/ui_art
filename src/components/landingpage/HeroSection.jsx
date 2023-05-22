import React from 'react';
import { images } from '../../assets/index';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section>
      <div className='hero_container'>
        <h1 className='hero_text'>
          สร้างสรรค์รูปภาพจากเอไอ <br></br>
          ด้วยจินตนาการของคุณ
        </h1>
        <div className='hero_grid'>
          <div className='hero_item'>
            <img src={images.section_1}></img>
          </div>
          <div className='hero_item'>
            <img src={images.section_2}></img>
          </div>
          <div className='hero_item'>
            <img src={images.section_3}></img>
          </div>
          <div className='hero_item'>
            <img src={images.section_4}></img>
          </div>
          <div className='hero_item'>
            <img src={images.section_5}></img>
          </div>
        </div>

        <a href='/test' className='hero_button'>
          เริ่มต้นใช้งาน
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
