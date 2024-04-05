import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: "notStarted",
    questions: [],
    index: 0,
    // answer: null,
    points: 0,
    secondsRemaining: null,
};

/*
{id: 1, answer: NULL}
do api call and make object like this and 
{
    question:
    answer:
    options:[]
    selectedAnswer:null;
    index:0
}
*/

const quizeSlice = createSlice({
    name: "quize",
    initialState,
    reducers: {

        start(state, action) { },

        selectAnswer(state, action) {
            const index = state.questions;
            // console.log(state.questions[state.index].selectedAnswer, "qyestion obj");
            state.questions[state.index].selectedAnswer = action.payload;
        },

        nextQuestion(state, action) {
            state.index = state.index + 1;
        },

        previousQuestion(state, action) {
            // console.log(state.index, "curerent question")
            state.index = state.index - 1;
        },

        finish(state, action) { },

        tick(state, action) {
            state.secondsRemaining = state.secondsRemaining - 1;
            state.secondsRemaining === 0 ? "finished" : state.status;
        },

        restart(state, action) { },

    },

    extraReducers: (builder) => {
        console.log("extra");

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
            console.log(modifyedData, "data");
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
    selectAnswer
} = quizeSlice.actions;

export default quizeSlice.reducer;
