import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import { GlobalStyle } from './GlobalStyle';
import HeroSection from './Components/HeroSection';
import Product from './Components/Products';
import { productData, productData1 } from './Components/Products/data';
import Feature from './Components/Feature';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <HeroSection/>
      <Product heading="Choose your favourite" data={productData}/>
      <Feature/>
      <Product heading="Sweet Treats for you" data={productData1}/>
      <Footer/>
    </Router>
  );
}

export default App;
