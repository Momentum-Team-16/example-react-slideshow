import './App.css'
import * as data from './film-data.json'
import Slideshow from './components/Slideshow'

function App() {
  return (
    <div className="section">
      <Slideshow data={data} />
    </div>
  )
}

export default App
