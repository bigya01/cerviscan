import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { LandingContent } from './components/LandingContent';
import { Classify } from './components/Classify';
import { ContactUs } from './components/ContactUs';
import { Result } from './components/Result';

function App() {
  return (
    <Router> {}
      <Navbar />
      <Routes>
        <Route exact path="/" element={<LandingContent />} /> { }
        <Route path="/classify" element={<Classify />} /> {}
        <Route path="/contactus" element={<ContactUs />} /> {}
        <Route path="/result" element={<Result />} /> {}
      </Routes>
    </Router>
  );
}

export default App;
