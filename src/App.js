import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import AboutPage from "./components/pages/AboutPage";
import FeedbackForm from "./components/FeedbackForm";
import AboutIconLink from "./components/AboutIconLink";
import FeedbackStats from "./components/FeedbackStats";
import { FeedbackProvider } from "./context/FeedbackContext";

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header text="Feedback UI APP" colour={"white"} />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <FeedbackForm /> 
                  <FeedbackStats /> 
                  <FeedbackList />
                  <AboutIconLink />
                </>
              }
            ></Route>
          </Routes>
        </div>

        <Routes>
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
