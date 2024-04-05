import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { tick } from "../quizSlice";

export default function Timer() {

    const dispatch = useDispatch();
    const { secondsRemaining } = useSelector((store) => store);

    const mins = Math.floor(secondsRemaining / 60);
    const seconds = secondsRemaining % 60;


    useEffect(
        function () {
            const id = setInterval(() => {
                if (secondsRemaining > 0) {
                    dispatch(tick());

                }
            }, 1000);

            return () => clearInterval(id);
        },
        [dispatch, secondsRemaining]
    );

    return (
        <>
            <div className="timer">
                {mins < 10 && "0"}
                {mins}:{seconds < 10 && "0"}
                {seconds}
            </div>
        </>
    );
}
