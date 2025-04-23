import {useState,useEffect} from 'react';
import Page from './Questions.jsx'
import './App.css'
import Start from './ComponentStart.jsx'


function App() {
  const [questionNo,setQuestionNo]=useState(1);
  const [timer,setTimer]=useState(false);
  const [answer,setAnswer]=useState(null);
  const [stop,setStop]=useState(false);
  const [earned,setEarned]=useState("$ 0");
  const [user,setUser]=useState(null);
  
  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        { text: "Phone", correct: false },
        { text: "Watches", correct: true },
        { text: "Food", correct: false },
        { text: "Cosmetic", correct: false },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        { text: "2004", correct: true },
        { text: "2005", correct: false },
        { text: "2006", correct: false },
        { text: "2007", correct: false },
      ],
    },
    {
      id: 3,
      question: "Who played the character of Harry Potter in the movie?",
      answers: [
        { text: "Johnny Depp", correct: false },
        { text: "Leonardo DiCaprio", correct: false },
        { text: "Denzel Washington", correct: false },
        { text: "Daniel Radcliffe", correct: true },
      ],
    },
    {
      id: 4,
      question: "Which planet is known as the Red Planet?",
      answers: [
        { text: "Earth", correct: false },
        { text: "Mars", correct: true },
        { text: "Jupiter", correct: false },
        { text: "Saturn", correct: false },
      ],
    },
    {
      id: 5,
      question: "What is the capital of France?",
      answers: [
        { text: "Madrid", correct: false },
        { text: "Paris", correct: true },
        { text: "Berlin", correct: false },
        { text: "Rome", correct: false },
      ],
    },
    {
      id: 6,
      question: "Which gas do plants absorb from the atmosphere?",
      answers: [
        { text: "Oxygen", correct: false },
        { text: "Carbon Dioxide", correct: true },
        { text: "Nitrogen", correct: false },
        { text: "Helium", correct: false },
      ],
    },
    {
      id: 7,
      question: "Which is the largest mammal in the world?",
      answers: [
        { text: "Elephant", correct: false },
        { text: "Blue Whale", correct: true },
        { text: "Giraffe", correct: false },
        { text: "Great White Shark", correct: false },
      ],
    },
    {
      id: 8,
      question: "Which language is the most spoken in the world?",
      answers: [
        { text: "English", correct: false },
        { text: "Mandarin Chinese", correct: true },
        { text: "Spanish", correct: false },
        { text: "Hindi", correct: false },
      ],
    },
    {
      id: 9,
      question: "What is the currency of Japan?",
      answers: [
        { text: "Won", correct: false },
        { text: "Yen", correct: true },
        { text: "Dollar", correct: false },
        { text: "Euro", correct: false },
      ],
    },
    {
      id: 10,
      question: "Who painted the Mona Lisa?",
      answers: [
        { text: "Vincent Van Gogh", correct: false },
        { text: "Leonardo da Vinci", correct: true },
        { text: "Pablo Picasso", correct: false },
        { text: "Claude Monet", correct: false },
      ],
    },
    {
      id: 11,
      question: "Which element has the chemical symbol 'O'?",
      answers: [
        { text: "Osmium", correct: false },
        { text: "Oxygen", correct: true },
        { text: "Gold", correct: false },
        { text: "Iron", correct: false },
      ],
    },
    {
      id: 12,
      question: "What is the hardest natural substance on Earth?",
      answers: [
        { text: "Gold", correct: false },
        { text: "Iron", correct: false },
        { text: "Diamond", correct: true },
        { text: "Quartz", correct: false },
      ],
    },
    {
      id: 13,
      question: "Which country is known as the Land of the Rising Sun?",
      answers: [
        { text: "China", correct: false },
        { text: "Japan", correct: true },
        { text: "Thailand", correct: false },
        { text: "India", correct: false },
      ],
    },
    {
      id: 14,
      question: "How many continents are there in the world?",
      answers: [
        { text: "5", correct: false },
        { text: "6", correct: false },
        { text: "7", correct: true },
        { text: "8", correct: false },
      ],
    },
    {
      id: 15,
      question: "What is the boiling point of water at sea level?",
      answers: [
        { text: "90°C", correct: false },
        { text: "95°C", correct: false },
        { text: "100°C", correct: true },
        { text: "110°C", correct: false },
      ],
    },
  ];
  
  const moneypyramid=[{id:1,amount:"$ 100"},
              {id:2,amount:"$ 200"},
              {id:3,amount:"$ 300"},
              {id:4,amount:"$ 500"},
              {id:5,amount:"$ 1000"},
              {id:6,amount:"$ 2000"},
              {id:7,amount:"$ 4000"},
              {id:8,amount:"$ 8000"},
              {id:9,amount:"$ 16000"},
              {id:10,amount:"$ 32000"},
              {id:11,amount:"$ 64000"},
              {id:12,amount:"$ 125000"},
              {id:13,amount:"$ 250000"},
              {id:14,amount:"$ 500000"},
              {id:15,amount:"$ 1000000"}
  ].reverse();
  useEffect(()=>{
    if(questionNo>1){
      setEarned(moneypyramid.find((m)=> m.id=== questionNo-1).amount);
    }
  },[questionNo])
  
  return (
    <div className="app">
      {user? (
        <>
          <div className='container'>
            {stop? <h1>You earned: {earned}</h1>:(
              <>
                <div className='section_left'>
        
                  <Page data={data}
                        setQuestionNo={setQuestionNo}
                        questionNo={questionNo}
                        setTimer={setTimer}
                        setStop={setStop}
                  />
                </div>
                <div className='section_right'>
                  <ul className='money_list'>{moneypyramid.map((money) =>
                    <li className={questionNo===money.id? "money_list_item active": "money_list_item"}>
                      <span className='money_id'>{money.id}</span>
                      <span className='money_amount'>{money.amount}</span>
                    </li>)}
                  </ul>
    
                </div>
              </>)}
          </div>
        </>
      ): <Start setUser={setUser}/>}
    
    </div>
  
    

  );
}

export default App


