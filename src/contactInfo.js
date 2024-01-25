import React from 'react';
import vuori from './vuori.png';

const ContactInfo = () => {
  return (
    <div div style={{ backgroundImage: `url(${vuori})`, backgroundSize: 'cover', height: '100vh' }}>
      <h1>Hello!</h1>
      <p>
  My name is <a href="https://www.linkedin.com/in/svetlana-marchenko-6598b8a9/" target="_blank" rel="noopener noreferrer">Svetlana Marchenko</a> and this is my first web project. And any IT project.
</p>





<p>If you need a Junior full stuck developer or you have practice for me - here is my page on <a href="https://www.linkedin.com/in/svetlana-marchenko-6598b8a9/" target="_blank" rel="noopener noreferrer">LinkedIn:</a> </p>
      <a href="https://www.linkedin.com/in/svetlana-marchenko-6598b8a9/" target="_blank" rel="noopener noreferrer">
        LinkedIn Profile
      </a>
    </div>
  );
};

export default ContactInfo;
