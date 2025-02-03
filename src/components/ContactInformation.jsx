const ContactInformation = () => {
  return (
    <div className="max-w-full h-auto relative px-4 sm:px-8 mx-auto top-24 flex flex-col items-center gap-0 mt-8 md:mt-4 lg:mt-12 lg:w-[80%] 2xl:w-[80%]">
      <h1 className="text-center text-white text-base font-light font-['Inter'] tracking-wide">Contact Information</h1>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <div className="p-4 flex flex-col items-center">
          <div className="text-center text-[#b3b3b3] text-sm font-normal font-['Inter'] tracking-wide mt-0">
            Business<br />Road<br />town<br />borough<br />county<br />postcode<br /><a href="tel:#" className="text-gray-300 hover:text-gray-500">telephone</a><br />email address
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInformation;