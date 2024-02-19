const{ createClient } =require("@deepgram/sdk");

const transcribe = async () => {
  const deepgramApiKey = 'e352957878f99d8ab5ac401043d6c0e367c782e2';
  const url = 'https://static.deepgram.com/examples/Bueller-Life-moves-pretty-fast.wav';
  const deepgram = createClient(deepgramApiKey);

  const { result, error } = await deepgram.listen.prerecorded.transcribeUrl(
    { url },
    {
      model: "nova-2",
    detect_language: true,
      summarize: "v2",
      smart_format: true,
      punctuate: true,
      utterances: true,
    },
  );

  if (error) {
    console.error(error);
  } else {
    console.dir(result.results.summary, {depth: null});
  }
}

transcribe();