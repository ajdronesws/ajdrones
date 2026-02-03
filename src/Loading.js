import MouseEffects from './components/MouseEffects';
import './Loading.css';

// Replace with your drone logo
// import droneLogo from '../assets/drone.png';

function Loading() {
  return (
    <div className="loading-container">
      
      {/* Background Mouse Effect */}
      <MouseEffects />

      {/* Center Content */}
      <div className="loading-content">
        <img src="/assets/logo.png" alt="Drone Loading" className="loading-image" />
        <p className="loading-text">"Preparing for Takeoff..."
</p>
      </div>

    </div>
  );
}

export default Loading;
