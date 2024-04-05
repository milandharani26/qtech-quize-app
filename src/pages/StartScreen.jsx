import home from "../assets/home.png";
import { loadDataFunc } from "../quizSlice";
import Button from "../utils/Button";
import { useDispatch } from "react-redux";

function StartScreen() {
    const dispatch = useDispatch();

    const today = new Date();

    const options = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    };

    // Format the date using ISO 8601 format with options
    var formattedDate = today.toLocaleDateString("en-GB", options);

    return (
        <>
            <div className="header">
                <div>
                    <h1>Quiz</h1>
                    <p>Read the following instructions</p>
                </div>

                <div className="flex-gap">
                    <span>Date: {formattedDate}</span>
                    <span>Time Limit: 30:00</span>
                    <span>Points: 100</span>
                </div>
            </div>

            <div className="home-img">
                <img src={home} alt="home image" />
                <div className="flex-col">
                    <p>
                        <span className="bold-fonts">Date:</span>
                        {formattedDate}
                    </p>
                    <p>
                        <span>Time Limit:</span> 30:00
                    </p>
                    <p>
                        <span>Points:</span> 100
                    </p>
                </div>
            </div>

            <div>
                <h3>Instructions</h3>

                <div>
                    <p>
                        This quiz consists of 5 multiple-choice questions. To be successful
                        with the quizzes, it’s important to conversant with the topics. Keep
                        the following in mind:
                    </p>
                    <br />
                    <p>
                        Timing - You need to complete each of your attempts in one sitting,
                        as you are allotted 30 minutes to each attempt.
                        <br />
                        Answers - You may review your answer-choices and compare them to the
                        correct answers after your final attempt.
                    </p>
                    <br />
                    <p>
                        To start, click the Start button. When finished, click the Submit
                        button.
                    </p>
                </div>

                <Button onclick={() => dispatch(loadDataFunc())} type={"submit"}>
                    Start
                </Button>
            </div>
        </>
    );
}

export default StartScreen;
