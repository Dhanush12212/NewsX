import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  // State for progress
  const [progress, setProgress] = useState(0);

  // Function to update progress
  const handleSetProgress = (progress) => {
    setProgress(progress);
  };

  return (
    <>
      <Router>
        <div style={{ overflowX: "hidden" }}>
          <Navbar />
          <LoadingBar color="#f11946" height={3} progress={progress} />
          <Routes>
            <Route exact path="/" element={<News setProgress={handleSetProgress} key="general" pageSize={8} country="us" category="general"/> } />
            <Route exact path="/business" element={<News setProgress={handleSetProgress}key="business" pageSize={8} country="us" category="business"/>}/>
            <Route exact path="/entertainment" element={<News setProgress={handleSetProgress} key="entertainment" pageSize={8} country="us" category="entertainment"/>}/>
            <Route exact path="/general" element={<News setProgress={handleSetProgress} key="general" pageSize={8} country="us" category="general"/>}/>
            <Route exact path="/health" element={<News setProgress={handleSetProgress} key="health" pageSize={8} country="us" category="health"/>}/>
            <Route exact path="/science" element={<News setProgress={handleSetProgress} key="science" pageSize={8} country="us" category="science"/>}/>
            <Route exact path="/sports" element={<News setProgress={handleSetProgress} key="sports" pageSize={8} country="us" category="sports"/>}/>
            <Route exact path="/technology" element={<News setProgress={handleSetProgress} key="technology" pageSize={8} country="us" category="technology"/>}/>
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
