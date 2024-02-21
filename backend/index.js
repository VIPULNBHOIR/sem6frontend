const express = require('express');
const { createClient } = require("@deepgram/sdk");

const app = express();
const port = 3000;

app.use(express.json());

app.post('/transcribe', async (req, res) => {
  const deepgramApiKey = "b2ebf1a234fc22399ac765f38eaa046aa44c5c47";
  const url = req.body.url;
  const deepgram = createClient(deepgramApiKey);

  try {
    console.log("Requesting transcript...");
    console.log("Your file may take up to a couple of minutes to process.");
    console.log("While you wait, did you know that Deepgram accepts over 40 audio file formats? Even MP4s.");
    console.log("To learn more about customizing your transcripts check out developers.deepgram.com.");

    const { result, error } = await deepgram.listen.prerecorded.transcribeUrl(
      { url },
      {
        summarize: true,
        smart_format: true,
        punctuate: true,
        utterances: true,
        detect_language: true
      },
    );

    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json({ transcript: result.results.channels[0].alternatives[0].summaries });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
