import React, { useRef, useState, useEffect } from 'react';
import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs';
import logo from "./ecart.jpg";
import axios from "axios";
const TensorFlow = ({file}) => {
  const imageRef = useRef(null);
  //const [prediction, setPrediction] = useState('');
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    const extractFeatures = async () => {
      if (file) {
        const model = await tf.loadLayersModel('https://storage.googleapis.com/tfjs-models/tfjs/mobilenet_v1_0.25_224/model.json');
        const tfImg = tf.browser.fromPixels(await fileToImage(file)).toFloat();
        const resizedImg = tf.image.resizeBilinear(tfImg, [224, 224]).toFloat();
        const offset = tf.scalar(127.5);
        const normalized = resizedImg.sub(offset).div(offset).expandDims();
        const layerName = 'conv_pw_13_relu';
        const intermediateLayerModel = tf.model({
          inputs: model.input,
          outputs: model.getLayer(layerName).output,
        });
        const intermediateFeatures = intermediateLayerModel.predict(normalized);
        const featuresArray = intermediateFeatures.arraySync();
        console.log('Extracted features:', featuresArray);
      }
    };

    extractFeatures();
  }, [file]);

 const fileToImage = (file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (e) => {
       const img = new Image();
       img.src = e.target.result;
       
        img.onload = () => resolve(img);
      };
     reader.readAsDataURL(file);
   });
  };
  //console.log(URL.createObjectURL(file))
  //console.log(file)
  // const [outcomeData, setData] = useState(null);
  // const [error, setError] = useState("");
  // const handleSubmit = (e) => {
  //     e.preventDefault();
  //     var urlim = file?URL.createObjectURL(file):'';
  //     console.log(urlim)
  //     axios({
  //       method: "POST",
  //       url: `http://localhost:5000/`,
  //       headers: {
  //         "Content-Type": "application/json",
  //         "Access-Control-Allow-Origin": "*",
  //         "Access-Control-Allow-Methods": "*",
  //         "x-requested-with": "XMLHttpRequest",
  //       },
  //       data:urlim ,
  //     })
  //       .then((res) => {
  //         if (res.data.error) {
  //           setError(res.data.error);
  //           setData(null);
  //         } else {
  //           setData(res.data);
  //           //console.log(res.data);
  //           setError("");
  //         }
  //       })
  //       .catch((e) => {
  //         alert(e);
  //       });
  //   };
 
//         // Make predictions
//         const predictions = model.predict(normalized);
//         const topPrediction = predictions.argMax(1).dataSync()[0];
//         setPrediction(`Predicted class: ${topPrediction}`);
//       };
//     };

//     loadModel();
//   }, []);

  return (
    <div>
     
      <img
        ref={imageRef}
        src={file?URL.createObjectURL(file):''}
        alt="Your Image"
      //  style={{ display: 'none'}}
      />
  
    </div>
  );
};

export default TensorFlow;
