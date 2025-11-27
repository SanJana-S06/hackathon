import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SignIn2 } from "./src/components/login";
import HomePage from './src/navigationPages/HomePage';
import LandingPage from './src/navigationPages/LandingPage';
import CreateProject from './src/navigationPages/CreateProject';
import ProjectDashboard from './src/navigationPages/ProjectDashboard';

function App() {
  const [LogedIn, setLogedin] = useState(false);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<SignIn2 />} />
        <Route path="/create-project" element={<CreateProject />} />

        {/* Dynamic project routes */}
        <Route path="/project/:projectId/:Pname/dashboard" element={<ProjectDashboard/>} />
        {/*<Route path="/project/:projectId/settings" element={<ProjectSettings />} />
        <Route path="/project/:projectId/analytics" element={<ProjectAnalytics />} />*/}
      </Routes>
    </Router>
  );
}

export default App;
