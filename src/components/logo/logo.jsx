import { Tilt } from 'react-tilt'
import './logo.css';
import mind from './brain.png';


const Logo = () => {
    return (
        <div>
            <Tilt className="Tilt br2 shadow-5 ma3 ml4 " options={{max:55}} style={{ height: 130, width: 130 }}>
              <div><img src={mind} alt='mind' style={{paddingTop: "20px"}}/></div>
            </Tilt>
        </div>
    )
}
export default Logo;