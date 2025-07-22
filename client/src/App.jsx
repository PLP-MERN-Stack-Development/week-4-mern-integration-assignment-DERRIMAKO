import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PostsList from './pages/PostsList';
import CategoriesList from './pages/CategoriesList';

export default function App() {
  return (
    <Router>
      <div>
        <h1>MERN Blog Client</h1>
        <nav>
          <Link to="/">Posts</Link> | <Link to="/categories">Categories</Link>
        </nav>
        <Routes>
          <Route path="/" element={<PostsList />} />
          <Route path="/categories" element={<CategoriesList />} />
        </Routes>
      </div>
    </Router>
  );
}
