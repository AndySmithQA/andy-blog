import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import CreatePage from './components/CreatePage';
import BlogDetails from './components/BlogDetails';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/create" element={<CreatePage />} />
            <Route path="/blogs/:id" element={<BlogDetails />} />
          </Routes>
        </main>
      </BrowserRouter>
      

    </div>
  );
}

export default App;
