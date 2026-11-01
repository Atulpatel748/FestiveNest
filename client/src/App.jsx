import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection'
import CategorySection from './components/CategorySection';
import CardSection from './components/CardSection';

function App() {

  return (
    <div>
      <Navbar />
      <main className="container">
        <HeroSection />
        <CategorySection />
        <CardSection />
      </main>
    </div>
  );
}

export default App
