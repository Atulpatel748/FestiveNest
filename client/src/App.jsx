import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection'

function App() {

  return (
    <div>
      <Navbar />
      <main className="container">
        <HeroSection />
      </main>
    </div>
  );
}

export default App
