import './App.css';
import Navigation from './components/navigation/navigation';
import 'tachyons';
import Logo from './components/logo/logo.jsx';
import ImageLinkForm from './components/imageLinkForm/imageLinkForm'
import Rank from './components/rank/rank.jsx';
import ParticleBackground from './components/particles/particleBack';


function App() {
  return (
    <div className="App">
      <ParticleBackground/>      
      <Navigation />
      <Logo/>
      <Rank/>
      <ImageLinkForm/>

    </div>
  );
}

export default App;
