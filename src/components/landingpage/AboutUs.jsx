import React from 'react';
import './AboutUs.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeadSideVirus,
  faBullseye,
  faReplyAll,
} from '@fortawesome/free-solid-svg-icons';
const AboutUs = () => {
  return (
    <section id='aboutUs' className='aboutus'>
      <div className='about_container'>
        <h1 className='about_text'>เกี่ยวกับเรา</h1>
        <div className='about_grid'>
          <div className='about_item'>
            <FontAwesomeIcon icon={faHeadSideVirus} className='about_icon' />
            <h3>จุดเริ่มต้น</h3>
            <p>
              เครปเลกเชอร์โอเพ่น
              ลอร์ดโฮสเตสนู้ดออกแบบราเม็งบ๋อยบุ๋นเฟรชลามะกัมมันตะ
            </p>
          </div>
          <div className='about_item'>
            <FontAwesomeIcon icon={faBullseye} className='about_icon' />
            <h3>จุดประสงค์</h3>
            <p>
              เครปเลกเชอร์โอเพ่น
              ลอร์ดโฮสเตสนู้ดออกแบบราเม็งบ๋อยบุ๋นเฟรชลามะกัมมันตะ
            </p>
          </div>
          <div className='about_item'>
            <FontAwesomeIcon icon={faReplyAll} className='about_icon' />
            <h3>จุดสรุป</h3>
            <p>
              เครปเลกเชอร์โอเพ่น
              ลอร์ดโฮสเตสนู้ดออกแบบราเม็งบ๋อยบุ๋นเฟรชลามะกัมมันตะ
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
