import './App.css';
import Navigation from './components/navigation/navigation';
import 'tachyons';
import Logo from './components/logo/logo.jsx';
import ImageLinkForm from './components/imageLinkForm/imageLinkForm'
import Signin from './components/Signin/Signin'
import Rank from './components/rank/rank.jsx';
import ParticleBackground from './components/particles/particleBack';
import Register from './components/Register/Register';
import FaceRecognition from './components/faceRecognition/faceRecognition';
import { useState } from 'react';



    const setupCalarifai = (imageURL) => {
      const PAT = '13abc5b62f9a45f1a7cdc5defca0460b';
      const USER_ID = 'owais17';       
      const APP_ID = 'test'; 
      const IMAGE_URL = imageURL;

      const raw = JSON.stringify({
        "user_app_id": {
            "user_id": USER_ID,
            "app_id": APP_ID
        },
        "inputs": [
            {
                "data": {
                    "image": {
                        "url": IMAGE_URL
                    }
                }
            }
        ]
    });

    const requestOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Key ' + PAT
        },
        body: raw
    };
    return requestOptions;
    }

function App() {
  const [input, setInput] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [route, setRoute] = useState("signin");
  const [isSignedIn, setIsSignedIn] = useState(false);
  
  const [Box , setBox] = useState('');

  const calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    console.log(data);
    const image = document.getElementById('inputImage');
    const height = Number(image.height);
    const width = Number(image.width);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  const displayFacebox = (Box) => {
    setBox(Box);
  }
  const onInputChange = (event) => {
    setInput(event.target.value);
  }
  const onrouteChange = (route) => {
    if(route === "signout"){
      setIsSignedIn(false);
    }else if(route === "home"){
      setIsSignedIn(true);
    }
    setRoute(route);
  }
  const onButtonSubmit = () => {
    setImageUrl(input);
    fetch(`https://api.clarifai.com/v2/models/face-detection/versions/6dc7e46bc9124c5c8824be4822abe105/outputs`, setupCalarifai(input))
        .then(response => response.json())
        .then(data=> displayFacebox(calculateFaceLocation(data)))
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
        
  }
  return (
    <div className="App">
      
      <ParticleBackground/>      
      <Navigation isSignedin={isSignedIn} onrouteChange={onrouteChange} />
      {route === "home" ?     
      <div>
      <Logo/>
      <Rank/>
      <ImageLinkForm onInputChange={onInputChange} onButtonSubmit={onButtonSubmit} />
      {imageUrl && <FaceRecognition Box={Box} imageUrl={imageUrl} />}
    </div>
      :(
       route === "signin" ?
       <Signin  onrouteChange={onrouteChange}/>
       :
       <Register onrouteChange={onrouteChange}/>
       )
       }
    </div>
  );
}

export default App;


