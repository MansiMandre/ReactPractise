// // import logo from './logo.svg';
// import { useState } from "react";
// import "./App.css";
// import Demo from "./Demo";

// function App() {
//   // const[text,setText]=useState("Hello React 😍")
//   // const[text,setText]=useState("")
//   const[userName,setUserName]=useState('')
//   return (
//     // <div>
//     //   <h1>Hello ,React</h1>
//     //   <p>Mera pehla react app chal rha hai</p>
//     // </div>
//     // <>
//     //   <h1>hello world</h1>
//     //   <h1>hello world</h1>
//     //   <Demo/>
//     // </>
//     // <div>
//     //   <h1>{text}</h1>
//     //  <button onClick={()=>
//     //   setText('React OP 😊')}>Click Me</button>
    
//     // </div>
//     <div>
//     <h1>Welcome, {userName ? setUserName : "Guest"}! 👋</h1>
//     <input
//       type="text"
//       placeholder="Apna naam likho..."
//       value={userName}
//       onChange={(e) => setUserName(e.target.value)}
//     />
//     <button onClick={() => setUserName("")}>Clear</button>
//     <Demo/>
//   </div>
  
// );
// }
  
  

// export default App;

////////////////////////////////////////////////////////////////////
// import { useState } from "react";
// import "./App.css";
// import Demo from "./Demo";


// function App() {
//   const [userName, setUserName] = useState("");

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
//       <h1 className="text-3xl font-bold text-blue-600">
//         Welcome, {userName ? userName : "Guest"}! 👋
//       </h1>
//       <input
//         type="text"
//         className="border-2 border-gray-300 rounded-lg p-2 mt-4"
//         placeholder="Apna naam likho..."
//         value={userName}
//         onChange={(e) => setUserName(e.target.value)}
//       />
//       <button
//         className="bg-red-500 text-white px-4 py-2 rounded-lg mt-2 hover:bg-red-700"
//         onClick={() => setUserName("")}
//       >
//         Clear
//       </button>
//       <Demo />

//     </div>
//   );
// }

// export default App;
// import Navbar from "./Navbar";
// import "./App.css";
// import Features from "./Feature";
// import Hero from "./Hero";
// import Testimonials from "./Testimonial";
// import Contact from "./Contact";
// import Footer from "./Footer";
// import DarkModeToggle from "./DarkModeToggle";

// function App(){
//   return(
//     <div>
//       <Navbar/> 
//       <Hero/>
//       <Features/>
//       <Testimonials/>
//       <Contact/>
//       <Footer/> 
//       <DarkModeToggle/>   
//     </div>
//   )
// }
///////////////////////////////////////////////////////////////////////////////////
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./Navbar";
// import Home from "./Home";
// import Testimonials from "./Testimonials";
// import Contact from "./Contact";
// import Footer from "./Footer";

// function App() {
//   return (
//     <Router>
//       <div className="dark:bg-gray-900 dark:text-white min-h-screen">
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/testimonials" element={<Testimonials />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//         <Footer />

//       </div>
//     </Router>
//   );
// }
// import { useState, useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import './App.css'

// function App() {
//   const [darkMode, setDarkMode] = useState(false);

//   useEffect(() => {
//     if (darkMode) {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//   }, [darkMode]);

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-white text-black dark:bg-gray-900 dark:text-white">
//       <h1 className="text-4xl font-bold">Light/Dark Mode in React</h1>
//       <button
//         onClick={() => setDarkMode(!darkMode)}
//         className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md dark:bg-yellow-400 dark:text-black"
//       >
//         {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
//       </button>
//     </div>
//   );
// }


import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar"; // ✅ Navbar import
import Footer from "./Components/Footer"; // ✅ Footer import
import Home from "./Components/Home"; // ✅ Pages import
import Testimonials from "./Components/Testimonials";
import Features from "./Components/Features";
import About from "./Components/AboutUs";
import Contact from "./Components/Contact";
import Dashboard from "./Components/Dashboard";
import Explore from "./Components/Explore";
import "./App.css"; // ✅ Tailwind import



function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme === "true") {
      setDarkMode(true);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <Router>
      <div className="dark:bg-gray-900 dark:text-white min-h-screen">
        {/* ✅ Navbar ko Dark Mode ka state bhej rahe hain */}
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/features" element={<Features />} />
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/Explore" element={<Explore />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}





export default App;





