import logo from './logo.svg';
import soundEffect from './assets/sounds/select.mp3'
import useSound from 'use-sound'
import './App.css';

function App() {
  const [play] = useSound(soundEffect)

  return (
    <div className="App">
      <section className="App-content">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Horse Betting
        </p>
        <ul>
            <li onMouseEnter={play}>
              <a  
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Comenzar
              </a>
            </li>
            <li onMouseEnter={play}>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Opciones
              </a>
            </li>
        </ul>
      </section>
    </div>
  );
}

export default App;
