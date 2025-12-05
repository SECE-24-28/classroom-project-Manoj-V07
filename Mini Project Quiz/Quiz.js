const questions = [{
    text : "Which keyword declares a constant in JavaScript ?",
    options : ["var","let","const","static"],
    correctIndex : 2
},
{   
    text : "Which method is used to log to the console ?",
    options : ["print()","log()","console()","console.log"],
    correctIndex : 3
},
{
    text : "Which of these is not a JavaScript data type ?",
    options : ["number","string","boolean","character"],
    correctIndex : 3
}];

const QuestionNumberElement = document.getElementById("question-no")
const QuestionElement = document.getElementById("questions")
const OptionElement = document.getElementById("options")
const NextElement = document.getElementById("nxtbtn")

let count = 0

function loadQuestion() {

    QuestionNumberElement.innerHTML = count + 1

    QuestionElement.innerHTML = questions[count].text

    let option_arr = questions[count].options
    for(let i = 0; i < option_arr.length; i++){
        OptionElement.children[i].innerText = option_arr[i]
    }
}

loadQuestion();

NextElement.addEventListener("click" , (event) => {
    event.preventDefault()

    count++;
    if(count >= questions.length) return;

    loadQuestion();
})



