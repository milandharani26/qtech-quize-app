import Button from "./coman components/Button"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux"
import { nextQuestion, previousQuestion } from "../quizSlice";

function Footer() {

  const dispatch = useDispatch();
  const { index, questions } = useSelector((store) => store);

  console.log(index, questions.length, "okokko");

  return (
    <footer>
      <Button type={"previous"}>Previous</Button>
      <Button type={"next"}>Next</Button>

      <Button type={"previous"} disable={index === 0 ? true : false} onclick={() => dispatch(previousQuestion())}>Previous</Button>
      <Button type={"next"} onclick={() => dispatch(nextQuestion())}> {index + 1 === questions.length ? "submit" : "Next"}</Button>
    </footer>
  )
}

export default Footer
