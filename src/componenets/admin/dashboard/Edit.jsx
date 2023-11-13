/* eslint-disable react/prop-types */
import { useEffect, useState, useRef } from "react";
import Header from "./Header";
import pencil from '../../../assets/Pencil.png'
import userr from '../../../assets/userr.png'
import photo from '../../../assets/photo.png'

const Edit = () => {
  const [questionText, setQuestionText] = useState([]);
  const [questionIds, setQuestionIds] = useState([]);
  const [test, setTest] = useState([])
  const [questId, setQuestId] = useState('');
  const jwt = localStorage.getItem("jwt");
  const id = localStorage.getItem("id");
  const [cover, setCover] = useState("");
  const [timer, setTimer] = useState('')
  const ref = useRef(null);

  useEffect(() => {
    setTimer(test.timer)
  },[test.timer])

  const handleCoverInput = (e) => {
    e.preventDefault();
    ref.current.click();
  };

  const handleFile = (e) => {
    setCover(e.target.files[0]);
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    formData.append("api_key", "148857165459491");
    formData.append("upload_preset", "p9rngv4l");

    fetch("https://api.cloudinary.com/v1_1/your_cloud_name/image/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        const url = data.url;
        setCover(url);
      })
      .catch((error) => {
        // Handle any errors
      });
  };

  async function updateImage(imgId) {
    const imgData = {
      "questionId": imgId,
      "questionImage": cover
    }

    try {
      const response = await fetch(
        `https://testmanagement2.onrender.com/api/admin/test/questionimage/update/${id}`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${jwt}`,
            "Content-Type": "application/json", // Add any other headers you need
          },
          body: JSON.stringify(imgData),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch TEST");
      }
      const data = await response.json();
      window.location.reload(false)
    } catch (error) {
      // Handle the error
    }
  }


  useEffect(() => {
    async function fetchData() {
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
          `https://testmanagement2.onrender.com/api/admin/institution/test/${id}`,
          options
        );
        if (!response.ok) {
          throw new Error("Failed to fetch TEST");
        }
        const data = await response.json();
        const arr = data.data.questions;
        console.log(data.data)
        setTest(data.data)
        setQuestionText(data.data.questions);
        const fetchedQuestionIds = arr.map((question) => question._id);
        setQuestionIds(fetchedQuestionIds);
      } catch (error) {
        // Handle the error
      }
    }

    fetchData();
  }, [id, jwt]);

  const handleQuestionTopicChange = (questionId, event) => {
    const updatedQuestionTexts = questionText.map((text) => {
      if (text._id === questionId) {
        return {
          ...text,
          questionTopic: event.target.value, // Update the specific questionText
        };
      }
      return text;
    });
    setQuestionText(updatedQuestionTexts);
  };

  const getObj = (obj) => {
    return setQuestId(obj._id)
  }

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

  const editQuestionTextOptions = (optionObject, e) => {
    const questionTextObject = questionText.find((text) => text._id === questId);

    questionTextObject.options = questionTextObject.options.map((option) => {
      if (option._id === optionObject._id) {
        return {
          ...option,
          text: e.target.value
        };
      }
      return option;
    });

    setQuestionText([...questionText]);
  };

  const editQuestionStatusOptions = (optionObject) => {
    const questionTextObject = questionText.find((text) => text._id === questId);

    questionTextObject.options = questionTextObject.options.map((option) => {
      console.log(option._id, optionObject._id)
      if (option._id === optionObject._id) {
        return {
          ...option,
          isCorrect: true
        };
      }
      else if (questId !== optionObject._id) {
        return {
          ...option,
          isCorrect: false,
        };
      }
      return option;
    });

    setQuestionText([...questionText]);
  };

  const handleTimerChange =(e)=> {
  setTimer(e.target.value)
  }



  const handleSubmit = async (event) => {
    event.preventDefault();

    const editData = {
      "testName": test.testName,
      "timer": timer,
      "questions": questionText
    }

    try {
      const response = await fetch(
        `https://testmanagement2.onrender.com/api/admin/test/update/${id}`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${jwt}`,
            "Content-Type": "application/json", // Add any other headers you need
          },
          body: JSON.stringify(editData),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch TEST");
      }
      const data = await response.json();
      window.location.reload(false)
    } catch (error) {
      // Handle the error
    }
  };



  return (
    <div>
      <Header />
      <div className="pt-[35px] px-[65px]">
        <div className='flex items-center gap-3 pb-[70px]'>
          <h1 className="text-[25px] font-500 font-poppins text-grey">Edit Questions</h1>
          <img src={pencil} alt="" />
        </div>
        <div className='flex items-center gap-3 pb-[30px]'>
          <h1 className="text-[22px] font-bold font-poppins text-grey">Quiz Time</h1>
          <div className='flex items-center gap-3'>
            <input
              className="border-none w-[40px] text-[25px] font-500 font-poppins text-grey px-1"
              type="text"
              id={test._id}
              value={timer}
              onChange={(event) => handleTimerChange(event)}
            />
            <label htmlFor={test._id} className="flex justify-center items-center gap-3"><p>Mins</p><img src={pencil} alt="" className='cursor-pointer' /></label>
          </div>
          {/* <img src={pencil} alt="" /> */}
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            {questionText ? questionText?.map((text) => (
              <div key={text._id} className="flex flex-col gap-1 mt-5 bg-white p-[20px]">
                <div className="flex justify-end items-center gap-3 text-grey w-full">
                  <img src={userr} alt="" />
                  <p>user</p>
                </div>
                <div className='test m-10 px-[20px] py-[16px]'>
                  <div className='flex justify-between items-center flex-wrap'>
                    <div className='flex items-center gap-3'>
                      <input
                        className="border-none text-[25px] font-500 font-poppins text-grey px-1"
                        type="text"
                        id={text._id}
                        value={text.questionTopic}
                        onChange={(event) => handleQuestionTopicChange(text._id, event)}
                      />
                      <label htmlFor={text._id}><img src={pencil} alt="" className='cursor-pointer' /></label>
                    </div>

                    {/* <div className='flex items-center gap-3'>
                      <h1 className="text-[22px] font-bold font-poppins text-grey">Timer: 14:09Mins</h1>
                    </div> */}
                  </div>
                  <div className="flex justify-between items-start gap-5 mt-8 ">
                    <div className="w-[50%] h-[200px] bg-gray rounded-[22px] relative">
                      <img src={text.questionImage} className="w-full h-full bg-gray rounded-[22px]" alt="" />
                      <div>
                        <div className="absolute top-[20%] left-[41%]">
                          <button className="text-black bg-white px-2 rounded-md border-[1px] mt-1" onClick={handleCoverInput}>
                            <img src={photo} alt="" />
                          </button>
                        </div>
                        <input
                          type="file"
                          name=""
                          id=""
                          ref={ref}
                          value={''}
                          className="hidden"
                          onChange={handleFile}
                        />
                      </div>
                      <button className='text-black bg-white my-2 px-2 rounded-md border-[1px] text-[11px] absolute top-[50%] left-[42%] disabled:opacity-[0.6]  curor-pointer' onClick={() => updateImage(text._id)} disabled={cover == ''} >Update</button>
                    </div>
                    <div className="w-[50%] h-[100px]">
                      <label htmlFor={text.questionText} className="flex items-center text-[#696F79] text-[16px] font-semibold gap-3 pb-[20px]">Question <img src={pencil} alt="" className='cursor-pointer' /></label>
                      <input
                        className=" w-full text-[13px] h-full text-[#696F79]"
                        type="text"
                        id={text.questionText}
                        value={text.questionText}
                        onChange={(event) => handleQuestionTextChange(text._id, event)}
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 justify-start px-5 items-center pb-5 mt-[18px]" onClick={() => getObj(text)} >
                    <QuestionOptions text={text} editQuestionStatusOptions={editQuestionStatusOptions} editQuestionTextOptions={editQuestionTextOptions} questId={questId} />
                  </div>
                </div>
              </div>
            )) : <p className="flex items-center text-[#696F79] text-[16px] font-semibold gap-3 pb-[20px] text-center">No Questions to edit</p>}
            
            <div className="flex justify-end items-center w-full py-[30px]"><button type="submit" className="bg-[#4A3AFF] rounded-[10px] text-white text-[20px] px-[20px] py-[5px]">Save Changes</button></div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Edit;

export const QuestionOptions = ({ text, editQuestionStatusOptions, editQuestionTextOptions }) => {
  return (
    <div>
      <label className="flex items-center text-[#696F79] text-[16px] font-semibold gap-3 pb-[20px]">Choose Answer <img src={pencil} alt="" className='cursor-pointer' /></label>
      {text?.options.map((answer) => (
         <div key={answer._id}>
           
          <div className="flex flex-wrap justify-center items-center py-3 text-[13px] text-[#696F79]">
              <input
                type="radio"
                value={answer.isCorrect}
                checked={answer.isCorrect}
                onChange={(e) => editQuestionStatusOptions(answer, e)}
                className="px-3"
              />
              <input
                type="text"
                value={answer.text}
                onChange={(e) => editQuestionTextOptions(answer, e)}
                className="px-3"
              />
            </div>
         </div>
      ))}
    </div>
  );
};
