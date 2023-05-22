import React from 'react';
import './Howto.css';
import { useState } from 'react';

import { images } from '../../assets/index.js';

const Howto = () => {
  const [addStyle, setAddStyle] = useState(1);

  return (
    <section id='howto'>
      <div className='howto_container'>
        <h1 className='howto_text'>วิธีการใช้งาน</h1>

        <div className='howto_content'>
          <div className='howto_content_left'>
            <div
              className={`howto_content_item ${addStyle === 1 ? 'active' : ''}`}
              onClick={() => setAddStyle(1)}
            >
              <div className='howto_content_head'>
                <h3 className={`${addStyle === 1 ? 'active' : ''}`}>1</h3>
              </div>
              <div className='howto_content_info'>
                <h2>เขียนสิ่งที่อยู่ในหัวของคุณ</h2>
                <p>
                  เครปเลกเชอร์โอเพ่น
                  ลอร์ดโฮสเตสนู้ดออกแบบราเม็งบ๋อยบุ๋นเฟรชลามะกัมมันตะ
                </p>
              </div>
            </div>
            <div
              className={`howto_content_item ${addStyle === 2 ? 'active' : ''}`}
              onClick={() => setAddStyle(2)}
            >
              <div className='howto_content_head'>
                <h3 className={`${addStyle === 2 ? 'active' : ''}`}>2</h3>
              </div>
              <div className='howto_content_info'>
                <h2>เลือก Style ของรูปภาพ</h2>
                <p>
                  เครปเลกเชอร์โอเพ่น
                  ลอร์ดโฮสเตสนู้ดออกแบบราเม็งบ๋อยบุ๋นเฟรชลามะกัมมันตะ
                </p>
              </div>
            </div>
            <div
              className={`howto_content_item ${addStyle === 3 ? 'active' : ''}`}
              onClick={() => setAddStyle(3)}
            >
              <div className='howto_content_head'>
                <h3 className={`${addStyle === 3 ? 'active' : ''}`}>3</h3>
              </div>
              <div className='howto_content_info'>
                <h2>กด Generate</h2>
                <p>
                  เครปเลกเชอร์โอเพ่น
                  ลอร์ดโฮสเตสนู้ดออกแบบราเม็งบ๋อยบุ๋นเฟรชลามะกัมมันตะ
                </p>
              </div>
            </div>
          </div>
          <div className='howto_content_right'>
            <div className='howto_content_photo'>
              <img src={images.section_1}></img>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Howto;
