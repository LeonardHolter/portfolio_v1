import Lottie from 'react-lottie';
import animationData from '../assets/ScrollAnimation.json';


export default function ScrollAnimation() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
        }
      };
    
    return (
      <div className="gif">
        <Lottie 
          options={defaultOptions}
          
        />
      </div>
    );
  }