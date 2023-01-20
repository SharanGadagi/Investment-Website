import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import Features from './Components/Features/Features';
import Product from './Components/product/Product';
import Expect from './Components/Expect/Expect';
import Footer from './Components/Footer/Footer';
import MustRead from './Components/MustRead/MustRead';
import Investment from './Components/Investment/Investment'
import Review from './Components/Review/Review';
import Questions from './Components/Questions/Questions';

function App() {
  return (
    <div className="App">
   <BrowserRouter>
   <Navbar/>
   <Header/>
   <Features/>
   <Product/>
   <Expect/>
   <Investment/>
   <Review/>
   <Questions/>
   <MustRead/>
   <Footer/>
   </BrowserRouter>
    </div>
  );
}

export default App;
