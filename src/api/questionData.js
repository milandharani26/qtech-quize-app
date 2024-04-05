

export async function data() {
    const res = fetch("https://the-trivia-api.com/v2/questions");
    console.log(res);
    console.log(data);
}