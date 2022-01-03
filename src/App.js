import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Navicon from './components/Navicon';
import Team from './components/Team';
import Footer from './components/Footer';
import Timeline from './components/Timeline';
import './Timeline.css'
function App() {
  return (
    <div className="App">
    <Header />
    <Navicon />
    <Team />
    <Footer />
     <Timeline />
    </div>
  );
}

export default App;
