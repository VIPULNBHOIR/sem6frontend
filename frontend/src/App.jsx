import React, { useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { TranslateNow } from './translate';
import { AudioFile } from './AudioFile';
import { Captions } from './Captions';


const Fun = () => {

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      {/* <input type="text" name="text" id="text" value={text} onChange={handleChange} /> */}
      {/* <AudioFile text={text} />
      <TranslateNow text={text} /> */}
    </>
  );
};

const App = () => {
  const [text, setText] = useState('');
  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <input type="text" name="text" id="text" value={text} onChange={handleChange} />
      <br/> 
      <a href="./audio">
        Audio
      </a> 
      <br/>
       <a href="./translate">
        Translate
      </a>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Fun />} />
          <Route path='/captions' element={<Captions />} />
          <Route path='/audio' element={<AudioFile text={text} />} />
          <Route path='/translate' element={<TranslateNow text={text} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
