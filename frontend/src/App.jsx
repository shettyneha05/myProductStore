// App.jsx
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import "./index.css"; // If you have custom CSS styles // Import your pages
import { Routes, Route } from "react-router-dom";
import CreatePage from "./pages/CreatePage";
import HomePage from "./pages/HomePage";


function App() {
  // State to toggle theme
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Apply "light" or "dark" class to <body>
  useEffect(() => {
    document.body.className = isDarkMode ? "dark" : "light";
  }, [isDarkMode]);

  return (
    <>
      {/* Navigation Bar with theme toggle */}
       <Navbar isDarkMode={isDarkMode} toggleTheme={() => setIsDarkMode((prev) => !prev)} /> 


       
      {/*<CreatePage /> */}
      {/* Main Content (you can style and build this later) */}
      <Routes>
        <Route path='/create' element={<CreatePage isDarkMode={isDarkMode} toggleTheme={() => setIsDarkMode(prev => !prev)} />}></Route>
        <Route path='/' element={<HomePage />}></Route>
      </Routes>
      
    </>
  );
}


export default App;









