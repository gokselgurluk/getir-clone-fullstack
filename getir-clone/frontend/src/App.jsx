import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Getir from '@/pages/Getir';
import GetirYemek from "@/pages/GetirYemek";
import GetirBuyuk from "@/pages/GetirBuyuk";
import GetirSu from "@/pages/GetirSu";
import GetirCarsi from "@/pages/GetirCarsi";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Getir />} />
        <Route path="/yemek" element={<GetirYemek />} />
        <Route path="/buyuk" element={<GetirBuyuk />} />
        <Route path="/su" element={<GetirSu />} />
        <Route path="/carsi" element={<GetirCarsi />} />
      </Routes>
    </Router>
  );
}

export default App;
