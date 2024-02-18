import React from 'react'
import { useSpeech } from 'react-text-to-speech';

export const AudioFile = (props) => {
    const { Text, speechStatus, start, pause, stop } = useSpeech({ text: props.text});

    return (
        <div style={{ display: "flex", flexDirection: "column", rowGap: "1rem" }}>
            <Text />
            <div style={{ display: "flex", columnGap: "0.5rem" }}>
                {speechStatus !== "started" ? <button onClick={start}>Start</button> : <button onClick={pause}>Pause</button>}
                <button onClick={stop}>Stop</button>
            </div>
        </div>
    )
}