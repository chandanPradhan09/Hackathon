import React, { useState } from "react";
import "./style.css";
import dataset from "./Dataset";
import ContactUs from "./ContactUs";

const ChatUi = () => {
  const handelContactUs=()=>{
    if(contactUs==false)
      setContactUs(true);
    else
      setContactUs(false);
  }
  // State variables for user input, search results, and selected answer
  const [input, setInput] = useState();
  const [data, setData] = useState([]);
  const [answer, setAnswer] = useState();
  const [contactUs, setContactUs] = useState(false);

  // Function to handle user input and trigger search
  const handelSubmit = () => {
    let arr = [];
    // Iterate through the dataset to find questions that match the input
    dataset.forEach((e) => {
      if (e.Question.includes(input) === true) {
        arr.push(e.Question);
      }
    });
    // Update the data state with matching questions
    setData(arr);
  };

  // Function to search for the answer when a question is clicked
  const ansSearch = (item) => {
    dataset.forEach((e) => {
      // Find the answer that corresponds to the clicked question
      if (e.Question.includes(item.target.innerText) === true) {
        // Set the answer state with the found answer
        setAnswer(e.Answer);
      }
    });
  };

  return (
    <div className="h-screen w-screen flex gap-5 justify-center items-center bg-[#134D57]">
      <div className="w-[50%] bg-[#FEFFFE] rounded-3xl items-center overflow-hidden max-h-screen flex flex-col">
        <h1 className="block text-6xl font-bold mb-10 underline">CHAT - BOT</h1>
        <div className="searchInput pb-1">
          <input
            type="text"
            name="inputSearch"
            id="search"
            onChange={(e) => setInput(e.target.value)}
            value={input}
            className="w-[90%] rounded-2xl text-4xl"
          />
          <button onClick={handelSubmit}>Search</button>
        </div>
        <div className="overflow-hidden scroll-auto">
        {
          // Render buttons for matching questions
          data?.map((e) => {
            return (
              <button onClick={ansSearch} className="p-2" key={e}>
                {e}
              </button>
            );
          })
        }
        </div>
      </div>
      <div className="w-[40%]">
      <div className="w-[100%] h-[50%] relative p-8 rounded-3xl bg-[#FEFFFE]">
        <h1 className="font-bold text-2xl underline">Answer :</h1>
        <textarea
          name="answer"
          id="answer"
          cols="30"
          rows="10"
          readOnly
          className="w-full outline-none resize-none p-3"
          value={answer}
        ></textarea>
        <div className="absolute bottom-2 right-2">
          <button className="bg-blue-400 p-2 rounded-2xl" onClick={handelContactUs}>Contact Us</button>
        </div>
      </div>
      <br />
      {contactUs && (
        <ContactUs/>
      )}
      </div>
    </div>
  );
};

export default ChatUi;
