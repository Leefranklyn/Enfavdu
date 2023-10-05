import React, { useState, useEffect, useContext } from "react";
import UserLoginContext from "../../../context/UserLoginContext";
import support from "../../../assets/support2.svg"
import notification from "../../../assets/notification4.svg"
import out from "../../../assets/out2.svg"
import Timer from "./Timer";
import Header from "./Header";
import { useNavigate } from "react-router-dom";


const Test = () => {
  const navigate = useNavigate();
  const { id } = useContext(UserLoginContext);
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestionId, setCurrentQuestionId] = useState(null);
  const [userAnswers, setUserAnswers] = useState([]);

  console.log(questions);
  const handleAnswerChange = (selectedOptionId) => {
    // Update the userAnswers state for the current question, including the question text
    const currentQuestion = questions[currentQuestionIndex];
    const updatedUserAnswers = [
      ...userAnswers,
      {
        question: currentQuestionId,
        selectedOption: selectedOptionId,
      },
    ];
    setUserAnswers(updatedUserAnswers);
  };

  const jwt = localStorage.getItem("userJwt");

  useEffect(() => {
    const fetchData = async () => {
      const headers = {
        Authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json", // Add any other headers you need
      };

      const options = {
        credentials: "include",
        headers: headers,
      };

      try {
        const response = await fetch(
          `https://testmanagement2.onrender.com/api/user/test/${id}`,
          options
        );
        if (!response.ok) {
          throw new Error("Failed to fetch ID");
        }
        const data = await response.json();
        console.log(data);
        const test = await data.data.questions;
        setQuestions(test);
        console.log(test);


        if (test.length > 0) {
          setCurrentQuestionId(test[currentQuestionIndex]._id);
        }
      } catch (error) {
        // Handle the error
      }
    };

    fetchData();
  }, [jwt, id, currentQuestionIndex]);

  const handleSubmit = async () => {
    console.log(JSON.stringify({userAnswers}));
    try {
      const response = await fetch(
        `https://testmanagement2.onrender.com/api/user/submit/${id}`,
        {
          method: "POST",
          credentials: "include",
          headers: {
            Authorization: `Bearer ${jwt}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({"responses" : userAnswers}), // Send user credentials
        }
      );
      const data = await response.json();
      if (response.ok) {
        console.log(data);
        navigate('/user/:path')
        // Successful login, perform necessary actions (e.g., redirect)
      } else {
        // Handle authentication errors (e.g., show error message)
      }
    } catch (error) {
      console.error(error);
      // Handle network errors
    }
  };
  return (
    <div className="md:flex bg-lightGrey md:bg-white text-btngray">
      <div className="hidden md:block md:w-[25%] lg:w-[20%]  py-8 px-10">
       <h3 className="font-bold text-xl">Quiz Time</h3>
       <div className="flex flex-col justify-between h-[90%] py-8 ">
         <ul>
          <li className="flex gap-2 mb-3"><img src={support} alt="" />Support</li>
          <li className="flex gap-2"><img src={notification} alt="" />Notification</li>
          </ul>
          <ul>
          <li className="flex gap-2"><img src={out} alt="" />Log Out</li>
          </ul>
       </div>
      </div>
      <div className="bg-lightGrey w-[100%]  min-h-[100vh]  flex flex-col justify-center items-center">
        {/* <div className="md:w-[80%] lg:w-[85%] hidden md:block"><Header/></div> */}
        <div className="bg-white my-container lg:h-[90%] rounded-lg shadow-lg  my-auto text-btngray ">
          <div className="flex justify-end items-center px-5 pt-5">
            <Timer handleSubmit={handleSubmit}/>
          </div>
          <div className="mt-3">
            <h4 className="text-center mb-3 text-btngray font-bold">Quiz</h4>
            <p className="text-center md:hidden">Answer the question below</p>
          </div>
          <div className="flex flex-col items-center">
            {questions.length > 0 && (
              <div className="">
                <h2 className="text-center md:text-left my-5 font-bold">
                  Question {currentQuestionIndex + 1}
                </h2>
                <p className="text-center md:text-left mb-3 hidden md:block">Answer the question below</p>
                <div className="md:flex md:gap-10">
                  <div className="w-[80%]  md:w-full mx-auto max-w-[400px]">
                    <img
                      className="rounded-lg w-full"
                      src={questions[currentQuestionIndex].questionImage}
                      alt=""
                    />
                  </div>
                    <p>{questions[currentQuestionIndex].questionText}</p>
                </div>
                <div className=" w-[80%] md:w-full mx-auto">
                  <h3 className="text-center md:text-left my-3">Choose answer</h3>
                  <ul className="flex flex-col gap-3">
                    {questions[currentQuestionIndex].options.map(
                      (option, index) => (
                        <li key={index} className="flex gap-2 items-center">
                          <label>
                            <input
                              name={`question_${questions[currentQuestionIndex].id}`}
                              type="radio"
                              value={option._id}
                              checked={userAnswers.some(
                                (ua) =>
                                  ua.question === currentQuestionIndex.text &&
                                  ua.selectedOption === option._id
                              )}
                              onChange={() => handleAnswerChange(option._id)}
                            />
                            <span className="mx-2">{option.text}</span>
                          </label>
                        </li>
                      )
                    )}
                  </ul>
                </div>
                {/* Render options or answer choices here */}
                <div className="flex justify-center md:justify-end mb-3">
                  {currentQuestionIndex === questions.length - 1 ? (
                    <button
                      className="bg-btngray text-white px-14 py-2 rounded-3xl"
                      onClick={handleSubmit}
                    >
                      Submit
                    </button>
                  ) : (
                    <button
                      className="bg-btngray text-white px-14 py-2 rounded-3xl"
                      onClick={() =>
                        setCurrentQuestionIndex(currentQuestionIndex + 1)
                      }
                    >
                      Next
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
