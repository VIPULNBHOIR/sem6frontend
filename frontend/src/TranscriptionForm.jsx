import React, { useState } from 'react';
import axios from 'axios';

const TranscriptionComponent = () => {
  const [transcription, setTranscription] = useState('');
  const [error, setError] = useState(null);

  const transcribeUrl = async () => {
    const deepgramApiKey = "b2ebf1a234fc22399ac765f38eaa046aa44c5c47";
    const url = "./ytaudio.mp4";

    try {
      const response = await axios.post('http://localhost:3000/transcribe', {
        deepgramApiKey,
        url,
        options: {
          summarize: true,
          smart_format: true,
          punctuate: true,
          utterances: true,
          detect_language: true,
        }
      });

      setTranscription(response.data.transcription);
    } catch (error) {
      setError('Error occurred during transcription');
      console.error('Error:', error);
    }
  };

  const handleTranscription = () => {
    transcribeUrl();
  };

  return (
    <div>
      <button onClick={handleTranscription}>Transcribe Audio</button>
      {transcription && <div>Transcription: {transcription}</div>}
      {error && <div>Error: {error}</div>}
    </div>
  );
};

export default TranscriptionComponent;
