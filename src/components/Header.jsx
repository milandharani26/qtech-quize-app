import Timer from "./Timer";


function Header() {
    return (
        <header className="header">
            <div>
                <h1>Quiz</h1>
                <p>Answer the question below</p>
            </div>

            <div className="flex-gap">
                <span>Time Limit:</span>
                {/* <Timer /> */}
            </div>
        </header>
    );
}

export default Header;
