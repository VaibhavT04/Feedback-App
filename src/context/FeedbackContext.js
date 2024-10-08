import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  
  const [ feedback, setFeedback ] = useState([
    {
      id: 1,
      text: "This is Feedback 1",
      rating: 10,
    },
    {
      id: 2,
      text: "This is Feedback 2",
      rating: 6,
    },
    {
      id: 3,
      text: "This is Feedback 3",
      rating: 6,
    },
  ]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item:{},
    edit: false
  })

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete feedback?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };


  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  const editFeedback = (item) =>{
    setFeedbackEdit({
      item,
      edit: true
    })
  }

  const updateFeedback = (id, updatedItem) => {
    setFeedback( feedback.map( (item) => item.id === id ? {...updatedItem} : item ));
    
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext
