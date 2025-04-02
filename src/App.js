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
import { useState } from "react";
import "./App.css";
import Demo from "./Demo";

function App() {
  const [userName, setUserName] = useState("");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold text-blue-600">
        Welcome, {userName ? userName : "Guest"}! 👋
      </h1>
      <input
        type="text"
        className="border-2 border-gray-300 rounded-lg p-2 mt-4"
        placeholder="Apna naam likho..."
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button
        className="bg-red-500 text-white px-4 py-2 rounded-lg mt-2 hover:bg-red-700"
        onClick={() => setUserName("")}
      >
        Clear
      </button>
      <Demo />
    </div>
  );
}

export default App;

