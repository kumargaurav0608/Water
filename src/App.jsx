import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';
// import Ticket from './Components/Tickets/Ticket';
import Gallery from './Components/Gallery';
import Contact from './Components/Contact';
import Aboutus from './Components/Aboutus';
import Offer from './Components/Offers/Offer';


function App() {
  return (
    <>
    <div className="body min-h-[90vh]">
    <Router>
      <Navbar />
      <Routes >
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<Aboutus/>} />
        <Route path="/kidsride" element={<h1>Our Attractions</h1>} />
        <Route path="/familyride" element={<h1>Our Attractions</h1>} />
        <Route path="/showsandattractions" element={<h1>Our Attractions</h1>} />
        <Route path="/offers" element={<Offer/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/Gallery" element={<Gallery/>} />

      </Routes>
    </Router>
    </div>
    <Footer/>
    </>
  );
}

export default App;
