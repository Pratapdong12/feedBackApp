import React from "react";
import Header from "./components/Header";
import { FeedbackData } from "./data/FeedbackData";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { v4 as uuidv4 } from "uuid";

function App() {
  const [feedback, setFeedback] = React.useState(FeedbackData);

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([...feedback, newFeedback]);
  };

  return (
    <Router>
      <Header />
      <div className="container">
        <Route
          path="/"
          element={
            <>
              <FeedbackForm handleAdd={addFeedback} />
              <FeedbackStats feedback={feedback} />
              <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
            </>
          }
        ></Route>
      </div>
    </Router>
  );
}

export default App;
