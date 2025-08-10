import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProfilePage from './pages/profilePage';
import DetailsPage from './pages/detailsPage';

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/" element={<DetailsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
