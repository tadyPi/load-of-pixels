import PropTypes from 'prop-types';

const ContactButton = ({ handleMailtoClick }) => {
  return (
    <button 
      id="contact-us-main" 
      className="bg-slate-600 hover:bg-slate-800 rounded shadow border border-[#b9b9b9] p-2 text-center text-white text-sm font-normal font-['Inter'] tracking-tight mb-4" 
      onClick={handleMailtoClick}
    >
      Contact Us
    </button>
  );
};

ContactButton.propTypes = {
  handleMailtoClick: PropTypes.func.isRequired,
};

export default ContactButton;