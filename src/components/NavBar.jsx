import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import Headroom from "react-headroom";

import Nav from "./Nav";
import NavMobile from "./NavMobile";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const nav = "w-full bg-bgBlack-900 shadow-lg";

  return (
    <Headroom style={{ zIndex: 100 }}>
      <nav className="md:pt-6 w-full bg-bgBlack-900 text-white shadow-md">
        <div className="flex justify-between items-center w-[90%] mx-auto">
          <Nav />
          <div className="block md:hidden py-5">
            <FiMenu onClick={() => setIsMenuOpen(true)} />
            {isMenuOpen && (
              <div className="h-screen w-full flex justify-center items-center fixed top-0 left-0 bottom-0 right-0 overflow-auto scrollbar-hide bg-csBrown-100 dark:text-black z-50 transition-all">
                <NavMobile setIsMenuOpen={setIsMenuOpen} />
              </div>
            )}
          </div>
        </div>
      </nav>
    </Headroom>
  );
}

export default NavBar;
