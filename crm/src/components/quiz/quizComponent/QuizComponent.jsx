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
        setAnsCount(count => count+1)
    }
    function goToNextQuestion(){
       
        for(let i = 0; i<questions.length; i++){
            
            setQuestionOnPage(questions[ansCount-1])
            setFalseAnsOnPage(allAnswers[ansCount-1])
            setRightAnsOnPage(rightAns[ansCount-1])
            

            
        }
    }

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
                    <h2 className="questionsNumber">Question {ansCount}/Many</h2>
                    <p className="questionsNumber">Select One Answer</p>
                    <h1 className="h2Color">{questionOnPage ? questionOnPage: <button onClick={() => {goToNextQuestion(), incrementCount()}} className="btn btn-primary">Start Quiz</button>}{}</h1>
                    
                </div>
            </div>
            <div className="col mt-5 ">
                <div className="quiz-right-container">

                    <form>
                        {falseAnsOnPage.map((item, key) => {
                            return(
                                <div className="container form-control mt-3 ">
                                
                                        <input type="radio" name="answers"/>
                                        <label htmlFor={item}>{item}</label>
                                    
                                    
                                </div>
                            )
                        })}
                    </form> 
                    {ansCount > 0 ? <div className="btn btn-primary mt-3" onClick={() => incrementCount()}>Next</div> : <></>}
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