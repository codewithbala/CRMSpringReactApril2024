import axios from "axios";
import React, { useEffect, useState } from "react";
import "../quizComponent/QuizComponent.css"


export default function QuizComponent(){

    const baseUrl = `http://localhost:8080/api/quiz/`
    const[questionsFromDb, setQuestionsFromDb] = useState([])
    const[questions, setQuestions] = useState([]);
    const[allAnswers, setAllAnswers] = useState([]);
    const[rightAns, setRightAns] = useState([])


    const[questionOnPage, setQuestionOnPage] = useState("")
    const[rightAnsOnPage, setRightAnsOnPage] = useState("");
    const[falseAnsOnPage, setFalseAnsOnPage] = useState([])
    const[ansCount, setAnsCount] = useState(0);
    const[userAns, setUserAns] = useState([])
    const[userAnsArray, setUserAnsArray] = useState([])
    const[checked, setChecked] = useState(false)
    const[rightAnsCount, setRightAnsCount] = useState(0);

    function getQuestionsFromDb(){
        let questions = [];
        axios.get(baseUrl).then(response => {
            setQuestionsFromDb(response.data)
            questions.push(response.data)
            separateQuestionFromAnswers(response.data)
        })

        
    }
    console.log(questionsFromDb)

    function separateQuestionFromAnswers(questionsFromDb){
        
        // console.log(questionsFromDb)
        questionsFromDb.filter((questions) => {
            setQuestions(prev => [...prev, questions.question])
            // console.log(questions.question)
            setAllAnswers(last => [...last, [questions.answer, questions.fake1, questions.fake2, questions.fake3]])
            setRightAns(last => [...last, questions.answer])
        })
    }
    console.log(questions)
    console.log(rightAns)
    console.log(allAnswers)

    function incrementCount(){
        if(ansCount < questions.length){
           setAnsCount(count => count+1) 
        }else{

        }
        
    }
    function goToNextQuestion(){
       
        for(let i = 0; i<questions.length; i++){
            
            setQuestionOnPage(questions[ansCount-1])
            setFalseAnsOnPage(allAnswers[ansCount-1])
            setRightAnsOnPage(rightAns[ansCount-1])
            

            
        }
    }

    const calculateScore = () => {

        let rightAnsCount = 0;
        for(let i = 0; i<questions.length; i++){
            if(userAnsArray[i] == rightAns[i]){
                rightAnsCount += 1;
            }
        }
        console.log(rightAnsCount/rightAns.length)
    }

    // const alternateCheck = () => {
    //     setChecked(checked == true? !checked: checked);
    // }


    useEffect(() => {
        getQuestionsFromDb()
        
        
    },[])
    
    useEffect(() => {
        goToNextQuestion()
    },[ansCount])

   if(allAnswers){
    return(
        <div className="row quiz-page">
            <div className="col baby-blue">
                <div className="baby-blue-inner">
                    <h2 className="questionsNumber">Question {ansCount}/{rightAns && rightAns.length}</h2>
                    <p className="questionsNumber">Select One Answer</p>
                    <h1 className="h2Color">{questionOnPage ? questionOnPage: <button onClick={() => {goToNextQuestion(), incrementCount()}} className="btn btn-primary">Start Quiz</button>}{}</h1>
                    
                </div>
            </div>
            <div className="col mt-5 ">
                <div className="quiz-right-container">

                    <form>
                        {falseAnsOnPage && falseAnsOnPage.map((item, key) => {
                            return(
                                <div key={key} className="container form-control mt-3 ">
                                
                                        <input type="radio" name={ansCount} value={item}
                                         onChange={(e) => setUserAns(e.target.value)}
                                         
                                         
                                         />
                                        <label htmlFor={item}>{item}</label>      
                                </div>
                            )
                        })}
                    </form> 
                    
                    {ansCount > 0 && ansCount <rightAns.length ? <div className="btn btn-primary mt-3" onClick={() => {incrementCount(), setUserAnsArray(last => [...last, userAns])}}>Next</div> : rightAns && rightAns.length == ansCount ? <div className="btn btn-warning mt-3" onClick={() => calculateScore()}>Submit Test</div>: <></>}

                    {console.log(userAnsArray)}
                </div>

            </div>
            
        </div>
    )
   }else{
    return(
        <p>Loading</p>
    )
   }
}