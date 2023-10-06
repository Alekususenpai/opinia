import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';
import Navbar from './components/layout/Navbar';
import './styles/buttons.css';

const Suggestions = lazy(() => import("./pages/Suggestions"));
const Roadmap = lazy(() => import("./pages/Roadmap"));
const FeedbackDetail = lazy(() => import("./pages/FeedbackDetail"));
const FeedbackAdd = lazy(() => import("./pages/FeedbackAdd"));
const FeedbackEdit = lazy(() => import("./pages/FeedbackEdit"));

function App() {
  return (
    <Router>
      <Navbar/>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          {/* Entry page for application - the home page */}
          <Route path="/" element={<Suggestions />} />

          {/* Roadmap page */}
          <Route path="/roadmap" element={<Roadmap />} />

          {/* Feedback detail page */}
          <Route
            path="/feedback/detail/:feedbackID"
            element={<FeedbackDetail />}
          />

          {/* Edit feedback page */}
          <Route path="/feedback/edit/:feedbackID" element={<FeedbackEdit />} />

          {/* Add new feedback page */}
          <Route path="/feedback/add" element={<FeedbackAdd />} />

          {/* 404 page not found route ( any routes not matching go back to home page ) */}
          <Route path="*" element={<Suggestions />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
