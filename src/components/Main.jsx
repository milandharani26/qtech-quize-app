import styles from "./Main.module.css";
import { useSelector } from "react-redux";
import Option from "./Option";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux"
import { selectAnswer } from "../quizSlice";

function Main() {
    const dispatch = useDispatch();
    const { questions, index, } = useSelector((store) => store);

    const [selectedAnswer, setSelectedAnswer] = useState(null)
    useEffect(function () {
        if (selectedAnswer !== null) {
            dispatch(selectAnswer(selectedAnswer));
        }

    }, [selectedAnswer, dispatch])

    console.log(questions[index], index);


    return (
        <main>
            <h1 className={styles.h1}>question {index + 1}/{questions?.length}</h1>
            <div className={styles.question}>{questions?.[index].question}</div>

            <h3>Choose answer</h3>

            <div className={styles.options}>
                {questions[index].options.map(option => {
                    return <Option option={option} key={option} setSelectedAnswer={setSelectedAnswer} /> 
                })}
            </div>


        </main>
    );
}

export default Main;
