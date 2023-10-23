// import logo from './logo.svg';
import './App.css';

import ReactImageMagnify from 'react-image-magnify';

function App() {
  const enterpricesUrl = './images/enterprices.png'
  
  var w = 620;
  var h = 420;
  return (
    <div className="App">
      <div style={{width: w, height:h}}>
        <ReactImageMagnify {...{
        // Imagen que se le puede hacer zoom, que aparece por defecto.
        smallImage: {
            alt: 'Wristwatch by Ted Baker London',
            isFluidWidth: true,
            src: enterpricesUrl,
        },
        largeImage: {
            src: enterpricesUrl,
            width: 1800, // si el w es mayor que h de la imagen, entonces, aqui tambien debe de ser mayor
            height: 1200 // si la h es mayor que w de la imagen, entonces, aqui tambien debe de ser mayor
        },
        isHintEnabled:true
    }} />

    </div>     
    </div>
  );
}

export default App;
