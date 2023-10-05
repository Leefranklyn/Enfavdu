import React, { useContext, useEffect, useState } from "react";
import LoginContext from "../../../context/LoginContext";
import Header from "./Header";

const Edit = () => {
  // const [questionTopic, setQuestionTopic] = useState("");
  // const [questions, setQuestions] = useState([]);
  const [questionText, setQuestionText] = useState([]);
  const [questionIds, setQuestionIds] = useState([]);
  // const [options, setOptions] = useState([]);
  const { userId } = useContext(LoginContext);
  const jwt = localStorage.getItem("jwt");

  useEffect(() => {
    async function fetchData() {
      const headers = {
        Authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json", // Add any other headers you need
      };

      const options = {
        headers: headers,
      };

      try {
        const response = await fetch(
          `https://testmanagement2.onrender.com/api/admin/institution/test/${userId}`,
          options
        );
        if (!response.ok) {
          throw new Error("Failed to fetch TEST");
        }
        const data = await response.json();
        // setQuestions(questions);
        // console.log(questions)
        const arr = data.data.questions;
        setQuestionText(data.data.questions);
        console.log(questionText);
        const fetchedQuestionIds = arr.map((question) => question._id);
        console.log(fetchedQuestionIds)
        setQuestionIds(fetchedQuestionIds);
      } catch (error) {
        // Handle the error
      }
    }

    fetchData();
  }, []);

  const handleQuestionTopicChange = (event) => {
    setQuestionTopic(event.target.value);
  };

  const handleQuestionTextChange = (questionId, event) => {
    const updatedQuestionTexts = questionText.map((text) => {
      if (text._id === questionId) {
        return {
          ...text,
          questionText: event.target.value, // Update the specific questionText
        };
      }
      return text;
    });
    setQuestionText(updatedQuestionTexts);
  };


  const handleSubmit = (event) => {
    event.preventDefault();

    const updatedTest = { ...test, questions };

    // Send the updated test data to the server
    fetch("https://your-api-endpoint", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedTest),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Test updated successfully:", data);
      })
      .catch((error) => {
        console.error("Error updating test:", error);
      });
  };

  // if (!test) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div>
      <Header />
      <form onSubmit={handleSubmit}>
      {questionText.map((text) => (
        <div key={text._id}>
          <input
            type="text"
            value={text.questionText}
            onChange={(event) => handleQuestionTextChange(text._id, event)}
          />
        </div>
      ))}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Edit;
