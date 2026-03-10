import { useState } from "react";
import axios from "axios";

function App() {

  const [prediction,setPrediction] = useState("");
  const [confidence,setConfidence] = useState(0);

  const detect = async(text)=>{

    if(text.length < 2) return;

    const res = await axios.get(
      "http://127.0.0.1:8000/predict",
      { params:{ text:text } }
    );

    setPrediction(res.data.prediction);
    setConfidence(res.data.confidence);
  };

  return (

    <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center">

      <h1 className="text-5xl font-bold mb-10">
        AI Hate Speech Detector
      </h1>

      <textarea
        className="w-[600px] h-[140px] p-4 rounded-lg text-black"
        placeholder="Type something..."
        onChange={(e)=>detect(e.target.value)}
      />

      {prediction && (

        <div className="mt-10 w-[600px] bg-gray-900 p-6 rounded-lg shadow-lg">

          <h2 className="text-2xl mb-4">

            {prediction} ({confidence}%)

          </h2>

          <div className="w-full bg-gray-700 h-4 rounded">

            <div
              className="h-4 bg-green-500 rounded"
              style={{width: confidence + "%"}}
            ></div>

          </div>

        </div>

      )}

    </div>

  );
}

export default App;