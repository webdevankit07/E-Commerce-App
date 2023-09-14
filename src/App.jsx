import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import ErrorPage from './pages/ErrorPage';
import Header from './components/header/Header';
import { GlobalStyle } from './GlobalStyle';
import Footer from './components/Footer';

const App = () => {
    return (
        <Router>
            <GlobalStyle />
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/products' element={<Products />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/single-product/:id' element={<SingleProduct />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='*' element={<ErrorPage />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
