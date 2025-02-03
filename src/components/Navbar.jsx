const Navbar = () => {
  return (
    <div className="w-full h-[70px] left-0 top-0 relative bg-[#1c1c1c] md:bg-zinc-800 border-b border-zinc-200/40 flex justify-between items-center md:px-2 md:gap-2 lg:px-8 xl:px-8 px-4 sm:px-8 custom-px">
      <div className="w-[249.62px] h-[55px] ml-0 mt-3 relative justify-between items-center">
        <img src="/group-133.svg" className="w-6 h-6 left-56 top-2 mt-[0.025rem] absolute" alt="logo" />
        <h1 className="left-0 top-0 absolute text-right text-indigo-400 text-4xl font-normal font-['Poppins'] custom-header flex items-center gap-2">Load of pixel</h1>
        <div className="left-36 top-8 ml-2 mt-[0.15rem] absolute text-white text-[7px] font-semibold font-['Open Sans'] leading-[8.15px]">cloud and web development</div>
      </div>
      <ul className="hidden md:flex items-center flex-grow justify-center md:gap-4 md:mb-1 lg:gap-8 xl:gap-16 2xl:gap-16 gap-4">
        <li><a href="#home" className="text-zinc-300 text-sm xl:text-base font-normal font-['Open Sans']">NavLink</a></li>
        <li><a href="#team-dynamite" className="text-zinc-300 text-sm xl:text-base font-normal font-['Open Sans']">NavLink</a></li>
        <li><a href="#jiu-jitsu" className="text-zinc-300 text-sm xl:text-base font-normal font-['Open Sans']">NavLink</a></li>
        <li><a href="#instructors" className="text-zinc-300 text-sm xl:text-base font-normal font-['Open Sans']">NavLink</a></li>
        <li><a href="#contact-us" className="text-zinc-300 text-sm xl:text-base font-normal font-['Open Sans']">NavLink</a></li>
      </ul>
      <div>
        <img src="/menu-icon-vector.svg" className="w-6 h-6 relative left-[5.5rem] top-[-0.3rem] lg:hidden" alt="menu" />
        <div className="flex items-center gap-2 relative top-[0.2rem] follow-us">
          <h3 className="text-white text-[0.6em] font-normal font-open-sans hover: ">Follow us</h3>
          <div className="flex items-center gap-2 icons-px">
            <a href="https://#" target="_blank" rel="noopener noreferrer">
              <img src='/linkedin.svg' className="w-4 h-4 sm:w-4 sm:h-4 md:w-4 md:h-4" alt="Alt text here" />
            </a>
            <a href="https://#" target="_blank" rel="noopener noreferrer">
              <img src='/microsoft.svg' className="w-4 h-4 sm:w-4 sm:h-4 md:w-4 md:h-4" alt="Alt text here" />
            </a>
            <a href="https://#" target="_blank" rel="noopener noreferrer">
              <img src='/github.svg' className="w-4 h-4 sm:w-4 sm:h-4 md:w-4 md:h-4" alt="Alt text here" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;