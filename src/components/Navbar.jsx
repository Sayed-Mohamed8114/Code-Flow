import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const closeMenu = () => {
    setIsClosing(true);   
    setTimeout(() => {
      setMobileMenuIsOpen(false); 
      setIsClosing(false);
    }, 700); 
  };

  return (
    <nav className="fixed bg-slate-950/20 backdrop-blur-sm top-0 z-50 w-full transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-14 sm:h-16 md:h-20">
          <div className="flex items-center space-x-1.5 group cursor-pointer">
            <div>
              <img
                src="/logo.png"
                alt="Code-flow"
                className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 my-2"
              />
            </div>
            {/*we use span because it is come without any padding or margin and can edit in it without any problem*/}
            <span className="text-lg sm:text-xl md:text-2xl font-medium">
              <span className="text-white">Code</span>
              <span className="text-blue-400">Flow</span>
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a href="#features" className="text-gray-400 font-bold hover:text-white text-sm lg:text-base">Features</a>
            <a href="#pricing" className="text-gray-400 font-bold hover:text-white text-sm lg:text-base">Pricing</a>
            <a href="#testimonials" className="text-gray-400 font-bold hover:text-white text-sm lg:text-base">Cients-Rate</a>
          </div>

          <button
            onClick={() => {
              if (mobileMenuIsOpen) {
                closeMenu(); 
              } else {
                setMobileMenuIsOpen(true);   
              }
            }}
            className="flex md:hidden text-gray-400 p-2 hover:text-white cursor-pointer items-center"
          >
            {mobileMenuIsOpen ? (
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            ) : (
              <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuIsOpen && (
        <div className={`md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-slate-800 animate-in duration-700 ${
          isClosing ? "slide-out-to-top" : "slide-in-from-top"
        }`}>
          <div className="px-4 py-4 sm:py-6 space-y-3 sm:space-y-4">
            <a href="#features" onClick={closeMenu} className="block text-gray-400 font-bold hover:text-white text-sm lg:text-base">Features</a>
            <a href="#pricing" onClick={closeMenu} className="block text-gray-400 font-bold hover:text-white text-sm lg:text-base">Pricing</a>
            <a href="#testimonials" onClick={closeMenu} className="block text-gray-400 font-bold hover:text-white text-sm lg:text-base">Cients-Rate</a>
          </div>
        </div>
      )}
    </nav>
  );
}