import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: "notStarted",
    questions: [],
    index: 0,
    points: 0,
    secondsRemaining: null,
};


const quizeSlice = createSlice({
    name: "quize",
    initialState,
    reducers: {
        selectAnswer(state, action) {
            state.questions[state.index].selectedAnswer = action.payload;
        },

        nextQuestion(state, action) {
            state.index += 1;
        },

        previousQuestion(state, action) {
            state.index = state.index - 1;
        },

        calculateScore(state, action) {
            state.points = state.questions.reduce((acc, question) => {
                if (question.answer === question.selectedAnswer) {
                    return acc + 10;
                }
                else {
                    return acc
                }
            }, 0)
        },

        reviewQuize(state, action) {
            state.status = "reviewQuize";
            state.index = 0;
        },

        finish(state, action) {
            state.status = "finish"
        },

        tick(state, action) {
            state.secondsRemaining = state.secondsRemaining - 1;
        },

        restart(state, action) {
            state.status = "notStarted"
            state.index = 0
            state.questions = []
            state.points = 0
            state.secondsRemaining = null
        },

    },

    extraReducers: (builder) => {
        builder.addCase(loadDataFunc.fulfilled, (state, action) => {
            state.questions = action.payload;
            state.status = "start"
            state.secondsRemaining = 600
        });
    },
});

export const loadDataFunc = createAsyncThunk(
    "quize/loadDataFunc",
    async () => {
        try {
            const res = await fetch("https://the-trivia-api.com/v2/questions/");
            const data = await res.json();

            const modifyedData = data.map((resObj) => {

                const randomIndex = Math.floor(Math.random() * 3);
                const options = [...resObj.incorrectAnswers];
                options.splice(randomIndex, 0, resObj?.correctAnswer);

                const questionObj = {
                    id: resObj.id,
                    question: resObj.question.text,
                    answer: resObj.correctAnswer,
                    selectedAnswer: null,
                    options
                };
                return questionObj;
            });
            return modifyedData;

        } catch (error) {
            console.error("Failed to fetch data:", error);
        }
    }
);


export const {
    loadData,
    nextQuestion,
    previousQuestion,
    finish,
    tick,
    restart,
    selectAnswer,
    calculateScore,
    reviewQuize
} = quizeSlice.actions;

export default quizeSlice.reducer;
