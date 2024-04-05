import { useSelector } from "react-redux";
import styles from "./Main.module.css";

function Option({ option, setSelectedAnswer }) {
  const { questions, index, status } = useSelector((store) => store);

  const selectedAnswer = questions[index].selectedAnswer;
  const answer = questions[index].answer;
  const span = option === selectedAnswer && option === answer;
  const disable = status === "reviewQuize";

  return (
    <div className={styles.optionItem}>
      <input
        type="radio"
        name="option"
        value={option}
        onChange={(e) => setSelectedAnswer(e.target.value)}
        className={styles.radioInput}
        checked={option === selectedAnswer}
        disabled={disable}
      />
      <label htmlFor="">{option}</label>

      {status === "reviewQuize" && span ? (
        <span className={styles.correctAns}>Your answer was corect</span>
      ) : (
        <>
          {status === "reviewQuize" && option === selectedAnswer ? (
            <span className={styles.yourAns}>Your Answer</span>
          ) : (
            ""
          )}
          {status === "reviewQuize" && option === answer ? (
            <span className={styles.correctAns}>Correct answer</span>
          ) : (
            ""
          )}
        </>
      )}
    </div>
  );
}

export default Option;
