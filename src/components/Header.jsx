import Timer from "./Timer";
import { useSelector } from "react-redux";

function Header() {
    const status = useSelector((store) => store.status);

    return (
        <header className="header">
            <div>
                <h1>Quiz</h1>
                <p>Answer the question below</p>
            </div>

            <div className="flex-gap">
                {status === "start" && (
                    <>
                        <span>Time Limit:</span>
                        <Timer />
                    </>
                )}
            </div>
        </header>
    );
}

export default Header;
