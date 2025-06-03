
import Header from '../components/Header';
import Hero from '../components/Hero';
import Menu from '../components/Menu';
import Gallery from '../components/Gallery';
import Reviews from '../components/Reviews';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Menu />
      <Gallery />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Index;
