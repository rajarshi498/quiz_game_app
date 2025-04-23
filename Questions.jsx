import {useEffect,useState} from 'react'
import Timer from './Time.jsx'

function Page({data,setTimer,setQuestionNo,questionNo,setStop}){
    const [question,setQuestion]=useState(null);
    const [selectedAnswer,setSelectedAnswer]=useState(null);
    const [className,setClassName]=useState("answer");
    useEffect(() => {
        setQuestion(data[questionNo-1]);
    },[data,questionNo]);
    const delay = (duration,callback)=>{
        setTimeout(()=>{
            callback();
        },duration);
    }
    const handleClick = (a)=>{
        setSelectedAnswer(a);
        setClassName("answer active");
        delay(3000,()=>
            setClassName(a.correct ? "answer correct" : "answer wrong")
        );
        delay(6000,()=>{
            if(a.correct){
                setQuestionNo((prev)=>prev+1);
                setSelectedAnswer(null);
            }
            else{
                setStop(true);
            }
        })
    }
    
    return(
        <div className="section_contain">
            <div className="display_timer"><Timer setStop={setStop} questionNo={questionNo}/></div>
            <div className="question_part">{question?.question}</div>
            <div className="answer_part">
                {question?.answers.map((a)=> (
                    <div className={selectedAnswer === a ? className : 'answer'} key={a.id} onClick={()=> handleClick(a)}>{a.text}</div>
                ))}
            </div>

        </div>
    );
}
export default Page