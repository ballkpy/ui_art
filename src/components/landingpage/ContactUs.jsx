import React from 'react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import './ContactUs.css';
// import { ToastContainer, toast } from 'react-toastify';

// import 'react-toastify/dist/ReactToastify.css';

export const ContactUs = () => {
  const [user_name, setName] = useState('');
  const [user_email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    let data = {
      user_name: user_name,
      user_email: user_email,
      message: message,
    };

    emailjs
      .send('service_72az9c9', 'template_6eh32og', data, 'Qz59Dlzn_iIGLd_Qm')
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    // toast('🦄 Wow so easy!', {
    //   position: 'top-right',
    //   autoClose: 5000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    //   theme: 'light',
    // });

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className='contactus' id='contact'>
      <div className='form_container'>
        <form className='form_form' onSubmit={sendEmail}>
          <h1 className='form_text'>ติดต่อเรา 🙌</h1>
          <div className='form_grid'>
            <div className='form_item'>
              <label>ชื่อ</label>
              <input
                value={user_name}
                type='text'
                placeholder='พิโถ่ ลิ้มเจริญรัตน์'
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>

            <div className='form_item'>
              <label>อีเมล</label>
              <input
                value={user_email}
                type='email'
                placeholder='drawphap@hotmail.com'
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>

            <div className='form_item'>
              <label>ข้อความ</label>
              <textarea
                value={message}
                placeholder='เขียนข้อความของคุณ.....'
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              />
            </div>
          </div>

          <button type='submit' value='Send' className='form_btn'>
            ส่งข้อความ
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
