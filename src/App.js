import React, { useState } from 'react';
import './App.css';
import Contact from './Components/Contact'



function App() {
  const [name, setName] = useState('Kastus Vienhura')
  const [status, setStatus] = useState('Online')
  const [avatar, setAvatar] = useState('https://belarusfeed.com/wp-content/uploads/2019/04/kastus-kalinowski.jpg')
  return (
    <div>
      <Contact name={name} status={status} avatar={avatar} setStatus={setStatus} />
    </div>
  );
}

export default App;
