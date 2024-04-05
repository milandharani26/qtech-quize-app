import Button from "../components/coman components/Button";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { calculateScore, nextQuestion, previousQuestion, restart } from "../quizSlice";
import PercentModel from "../pages/PercentModel";
import { useState } from "react";

function Footer() {
  const [openModel, setOpenModel] = useState(false);

  const dispatch = useDispatch();
  const { index, questions, status} = useSelector((store) => store);

  function handleSubmit() {
    dispatch(calculateScore());
    setOpenModel(true);
  }

  const oncl = status === "reviewQuize" && index === 9 ? () => dispatch(restart()) : index === 9 ? handleSubmit : () => dispatch(nextQuestion())

  return (
    <footer>
      {openModel && <PercentModel />}
      <Button
        type={"previous"}
        disable={index === 0}
        onclick={() => dispatch(previousQuestion())}
      >
        Previous
      </Button>
      <Button
        type={"next"}
        onclick={oncl}
      >

        {status === "reviewQuize" && index + 1 === questions.length ? "restart" : index + 1 === questions.length ? "submit" : "Next"}
      </Button>
    </footer>
  );
}

export default Footer;
