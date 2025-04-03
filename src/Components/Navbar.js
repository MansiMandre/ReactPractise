// import { useState } from "react";

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-red-400 p-4 shadow-lg">
//       <div className="container mx-auto flex justify-between items-center">
//         <h1 className="text-white text-2xl font-bold">MyApp</h1>
        
//         {/* Mobile Menu Button */}
//         <button
//           className="text-white md:hidden"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           ☰
//         </button>

//         {/* Links */}
//         <ul className={`md:flex gap-6 ${isOpen ? "block" : "hidden"} md:block`}>
//           <li><a href="#" className="text-white hover:underline">Home</a></li>
//           <li><a href="#" className="text-white hover:underline">About</a></li>
//           <li><a href="#" className="text-white hover:underline">Contact</a></li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
///////////////////////////////////////////////////////////////////////////
// import { useState } from "react";
// import DarkModeToggle from "./DarkModeToggle"; // ✅ Import Dark Mode Toggle

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-blue-600 p-4 shadow-lg dark:bg-gray-900">
//       <div className="container mx-auto flex justify-between items-center">
//         <h1 className="text-white text-2xl font-bold">MyApp</h1>

//         <div className="flex items-center gap-4">
//           <DarkModeToggle /> {/* ✅ Dark Mode Button */}

//           <button className="text-white md:hidden" onClick={() => setIsOpen(!isOpen)}>
//             ☰
//           </button>
//         </div>

//         <ul className={`md:flex gap-6 ${isOpen ? "block" : "hidden"} md:block`}>
//           <li><a href="#" className="text-white hover:underline">Home</a></li>
//           <li><a href="#" className="text-white hover:underline">About</a></li>
//           <li><a href="#" className="text-white hover:underline">Contact</a></li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
//////////////////////////////////////////////////////////////
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import DarkModeToggle from "./DarkModeToggle";

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-blue-600 p-4 shadow-lg dark:bg-gray-900">
//       <div className="container mx-auto flex justify-between items-center">
//         <h1 className="text-white text-2xl font-bold">MyApp</h1>

//         <div className="flex items-center gap-4">
//           <DarkModeToggle />
//           <button className="text-white md:hidden" onClick={() => setIsOpen(!isOpen)}>
//             ☰
//           </button>
//         </div>

//         <ul className={`md:flex gap-6 ${isOpen ? "block" : "hidden"} md:block`}>
//           <li><Link to="/" className="text-white hover:underline">Home</Link></li>
//           <li><Link to="/testimonials" className="text-white hover:underline">Testimonials</Link></li>
//           <li><Link to="/contact" className="text-white hover:underline">Contact</Link></li>
//         </ul>
//       </div>
//     </nav>
//   );
// }
////////////////////////////////////////////////////////////////////////
import { Link } from "react-router-dom";
import Dashboard from "./Dashboard";

function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="flex justify-between items-center p-4 bg-white dark:bg-gray-800 shadow-md">
      <Link to='/dashboard'>
      <h1 className="text-xl font-bold dark:text-white">My Website</h1></Link>
      <ul className="flex space-x-4">
        <li><Link to="/" className="text-black dark:text-white">Home</Link></li>
        <li><Link to="/testimonials" className="text-black dark:text-white">Testimonials</Link></li>
        <li><Link to="/features" className="text-black dark:text-white">Features</Link></li>
        <li><Link to="/about" className="text-black dark:text-white">About Us</Link></li>
        <li><Link to="/contact" className="text-black dark:text-white">Contact</Link></li>
      </ul>

      {/* ✅ Dark Mode Toggle Button */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="p-2 rounded bg-gray-200 dark:bg-gray-700 dark:text-white"
      >
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
    </nav>
  
  );
}

export default Navbar;





