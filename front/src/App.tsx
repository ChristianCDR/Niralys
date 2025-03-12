
import Homepage from "./pages/Homepage"
import Contact from "./pages/Contact"
import DynamicTitle from "./components/DynamicTitle"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>   
      <Router>
        <DynamicTitle />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
