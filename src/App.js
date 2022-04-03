import Home from './Home';
import Navbar from './Navbar';
import Services from './Services'
import Contact from './Contact'
import Blog from './Blog'
import SignIn from './SignIn'
import SignUp from './SignUp'
import Footer from './Footer'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function App() {
 
  return (
    <Router>
      <div>
        <Navbar />
        <div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/services' element={<Services />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/login' element={<SignIn />} />
            <Route path='/register' element={<SignUp />} />
          </Routes>
        </div>
        <Footer />
      </div> 
    </Router>

  );
}

export default App;
