// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Menu, X } from 'lucide-react'; // Menu icons

// export default function Header() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <header className="shadow bg-white">
//       <div className="container mx-auto px-4 py-4 flex items-center justify-between">
//         {/* Logo */}
//         <Link
//           to="/"
//           className="font-bold text-xl text-nm-700 flex items-center gap-3"
//         >
//           <img src="/images/logo.png" alt="logo" className="h-10 w-10" />
//           NexMindMatrix
//         </Link>

//         {/* Desktop Nav */}
//         <nav className="hidden md:flex items-center space-x-6">
//           <Link to="/services" className="hover:underline">
//             Services
//           </Link>
//           <Link to="/responsibilities" className="hover:underline">
//             Responsibilities
//           </Link>
//           <Link to="/careers" className="hover:underline">
//             Careers
//           </Link>
//           <Link
//             to="/contact"
//             className="px-3 py-2 border rounded hover:bg-gray-100"
//           >
//             Contact
//           </Link>
//         </nav>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden p-2 rounded hover:bg-gray-100"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           {isOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </div>

//       {/* Mobile Nav */}
//       {isOpen && (
//         <div className="md:hidden bg-white border-t">
//           <nav className="flex flex-col space-y-3 px-4 py-3">
//             <Link to="/services" className="hover:underline" onClick={() => setIsOpen(false)}>
//               Services
//             </Link>
//             <Link to="/responsibilities" className="hover:underline" onClick={() => setIsOpen(false)}>
//               Responsibilities
//             </Link>
//             <Link to="/careers" className="hover:underline" onClick={() => setIsOpen(false)}>
//               Careers
//             </Link>
//             <Link
//               to="/contact"
//               className="px-3 py-2 border rounded hover:bg-gray-100 text-center"
//               onClick={() => setIsOpen(false)}
//             >
//               Contact
//             </Link>
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// }

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="shadow bg-nm-900">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="font-bold text-xl text-nm-600 flex items-center gap-3"
        >
          <img src="/images/logo.png" alt="logo" className="h-10 w-10" />
          NexMindMatrix
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {[
            { to: "/services", label: "Services" },
            { to: "/responsibilities", label: "Responsibilities" },
            { to: "/careers", label: "Careers" },
          ].map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="text-nm-600 hover:text-nm-600/80 focus:outline-none focus:ring-2 focus:ring-nm-600 transition"
            >
              {label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="px-4 py-2 border border-nm-600 rounded text-nm-600 hover:bg-nm-800 transition"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="md:hidden p-2 rounded hover:bg-nm-800 text-nm-600 transition"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="md:hidden bg-nm-900 border-t border-nm-800">
          <div className="flex flex-col px-6 py-4 space-y-3">
            {[
              { to: "/services", label: "Services" },
              { to: "/responsibilities", label: "Responsibilities" },
              { to: "/careers", label: "Careers" },
            ].map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setIsOpen(false)}
                className="text-nm-600 hover:text-nm-600/80 focus:outline-none focus:ring-2 focus:ring-nm-600 transition"
              >
                {label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 border border-nm-600 rounded text-center text-nm-600 hover:bg-nm-800 transition"
            >
              Contact
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
