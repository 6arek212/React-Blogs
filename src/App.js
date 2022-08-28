import Navbar from './components/Navbar';
import Home from './Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateBlog from './CreateBlog';
import BolgDetails from './BlogDetail';
import NotFound from './components/NotFound';

export default function App() {


  return (
    <Router>
      <div className="App">

        <Navbar />

        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-blog" element={<CreateBlog />} />
            <Route path="/blogs/:id" element={<BolgDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>


      </div>
    </Router>
  );
}

