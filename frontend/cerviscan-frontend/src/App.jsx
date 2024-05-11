import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { LandingContent } from './components/LandingContent';
import { Classify } from './components/Classify';

function App() {
  return (
    <Router> {}
      <Navbar />
      <Routes>
        <Route exact path="/" element={<LandingContent />} /> { }
        <Route path="/classify" element={<Classify />} /> {}
      </Routes>
    </Router>
  );
}

export default App;
