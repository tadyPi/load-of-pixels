import './App.css';
import Navbar from './components/Navbar';
import Mission from './components/Mission';
import Instructors from './components/Instructors';
import Programs from './components/Programs';
import ContactButton from './components/ContactButton';
import WhyChoose from './components/WhyChoose';
import JoinUs from './components/JoinUs';
import ContactInformation from './components/ContactInformation';
import Footer from './components/Footer';

function App() {
  const handleMailtoClick = (e) => {
    e.preventDefault();
    const email = "#";
    const subject = "Contact Us";
    const body = "Email: ";
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="w-[100vw] h-[2247px] flex-1 overflow-scroll relative left-0 top-0 bg-gradient-to-bl from-black to-black">
      <Navbar />

      {/* Main Content */}
      <div className="max-w-full h-auto relative px-4 sm:px-8 mx-auto top-24 xl:top-24 flex flex-col items-center gap-4 mt-4 sm:mt-8 lg:mt-7 lg:w-[80%] 2xl:w-[80%] 2xl:mt-12 2xl:gap-8 main-content">
        <h1 className="text-center text-white text-base lg:text-xl 2xl:text-xl font-light font-poppins tracking-wide">HEADER</h1>
        <div className="text-center text-zinc-100 text-4xl md:text-5xl lg:text-3xl 2xl:text-4xl 2xl:mb-4 font-normal font-inter tracking-widest text-stroke">HEADER</div>
        
        <Mission />
        
        <hr className="w-full border-t border-gray-500 my-4 md:border-t-slate-700" />
        
        <Instructors />
        
        <hr className="w-full border-t border-gray-500 my-4 md:border-t-slate-700" />
        
        <Programs />
        
        <ContactButton handleMailtoClick={handleMailtoClick} />
        
        <hr className="w-full border-t border-gray-500 my-0 md:border-t-slate-700" />
      </div>

      {/* Additional Sections */}
      <WhyChoose handleMailtoClick={handleMailtoClick} />
      <JoinUs handleMailtoClick={handleMailtoClick} />
      <ContactInformation />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;