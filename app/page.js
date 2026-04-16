import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';
import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import TrustBar from './components/TrustBar';
import About from './components/About';
import Numbers from './components/Numbers';
import Services from './components/Services';
import Process from './components/Process';
import Lookbook from './components/Lookbook';
import Products from './components/Products';
import Washes from './components/Washes';
import Capabilities from './components/Capabilities';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <Hero />
      <Marquee />
      <TrustBar />
      <About />
      <Numbers />
      <Services />
      <Process />
      <Lookbook />
      <Products />
      <Washes />
      <Capabilities />
      <WhyUs />
      <Testimonials />
      <FAQ />
      <CTA />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
