import './App.css';
import React,{useState} from 'react';
import { AudioFile } from './components/AudioFile';
import { Captions } from './components/Captions';
import TranscriptionForm from './components/TranscriptionForm';
import { TranslateNow } from './components/translate';
import {Route,BrowserRouter,Routes} from 'react-router-dom'

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
          {/* <Route path='/' element={<Fun />} /> */}
          <Route path='/captions' element={<Captions />} />
          <Route path='/audio' element={<AudioFile text={text} />} />
          <Route path='/translate' element={<TranslateNow text={text} />} />
          <Route path='/transcribe' element={<TranscriptionForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;