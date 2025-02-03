const Navbar = () => {
  return (
    <div className="w-full h-[60px] left-0 top-0 absolute bg-[#1c1c1c] md:bg-zinc-800 border-b border-zinc-200/40 flex justify-between items-center md:px-2 md:gap-2 lg:px-8 xl:px-8 px-4 sm:px-8 custom-px">
<div className="text-cyan-500 text-[1.1em] sm:text-lg md:text-[0.8em] lg:text-base xl:text-lg md:text-zinc-200 text-sm font-light font-poppins tracking-light custom-header flex items-center gap-2">
  <img src="/NWI_LOGO.svg" alt="Logo" className="w-12 h-12" />
  <h1>Header</h1>
</div>
      <ul className="hidden md:flex items-center flex-grow justify-center md:gap-4 md:mb-1 lg:gap-8 xl:gap-16 2xl:gap-16 gap-4">
        <li><a href="#home" className="text-zinc-300 text-sm xl:text-base font-normal font-['Open Sans']">NavLink</a></li>
        <li><a href="#team-dynamite" className="text-zinc-300 text-sm xl:text-base font-normal font-['Open Sans']">NavLink</a></li>
        <li><a href="#jiu-jitsu" className="text-zinc-300 text-sm xl:text-base font-normal font-['Open Sans']">NavLink</a></li>
        <li><a href="#instructors" className="text-zinc-300 text-sm xl:text-base font-normal font-['Open Sans']">NavLink</a></li>
        <li><a href="#contact-us" className="text-zinc-300 text-sm xl:text-base font-normal font-['Open Sans']">NavLink</a></li>
      </ul>
      <div className="flex items-center gap-2 follow-us">
        <h3 className="text-white text-[0.6em] font-normal font-open-sans hover: ">Socials</h3>
        <div className="flex items-center gap-2 icons-px">
          <a href="https://#" target="_blank" rel="noopener noreferrer">
            <img src='/#' className="w-4 h-4 sm:w-4 sm:h-4 md:w-4 md:h-4" alt="Alt text here" />
          </a>
          <a href="https://#" target="_blank" rel="noopener noreferrer">
            <img src='/#' className="w-4 h-4 sm:w-4 sm:h-4 md:w-4 md:h-4" alt="Alt text here" />
          </a>
          <a href="https://#" target="_blank" rel="noopener noreferrer">
            <img src='/#' className="w-4 h-4 sm:w-4 sm:h-4 md:w-4 md:h-4" alt="Alt text here" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;