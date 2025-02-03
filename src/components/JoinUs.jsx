import PropTypes from 'prop-types';

const JoinUs = ({ handleMailtoClick }) => {
  return (
    <div className="max-w-full h-auto relative px-4 sm:px-8 mx-auto top-24 flex flex-col items-center gap-0 mt-8 md:mt-4 lg:mt-12 lg:w-[80%] 2xl:w-[80%]">
      <h1 className="text-start text-white text-base xl:text-xl font-light font-['Inter'] tracking-wide mt-4">Header</h1>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <div className="p-4 flex flex-col items-center">
          <div className="text-[#b3b3b3] text-[0.9em] md:text-xl font-light font-open-sans mt-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
        </div>
      </div>
      <button 
        id="contact-us-join" 
        className="bg-slate-600 hover:bg-slate-800 rounded shadow border border-[#b9b9b9] p-2 text-center text-white text-sm font-normal font-['Inter'] tracking-tight mb-4" 
        onClick={handleMailtoClick}
      >
        Contact Us
      </button>
      <hr className="w-full border-t border-gray-500 my-4 md:border-t-slate-700" />
    </div>
  );
};

JoinUs.propTypes = {
  handleMailtoClick: PropTypes.func.isRequired,
};

export default JoinUs;