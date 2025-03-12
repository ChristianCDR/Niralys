
import Homepage from "./pages/Homepage"
import Contact from "./pages/Contact"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>   
      <Router>
        <Routes>
        <Route path="/" element={<Homepage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
