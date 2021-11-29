import logo from './logo.svg'
import soundEffect from './assets/sounds/select.mp3'
import useSound from 'use-sound'
import './App.css'

function App() {
  const [play] = useSound(soundEffect)

  return (
    <div className="App">
      <section className="App-content">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="App-link">Horse Betting</p>
        <p className="App-link">COMMING SOON</p>
      </section>
    </div>
  )
}

export default App
