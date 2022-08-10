const quizData = [
    {
        question: "A scam is when someone tries to trick you to get",
        a: "Money",
        b: "Access to your computer",
        c: "Your personal information",
        d: "All of the above",
        correct: "d",
    },
    {
        question: "A link is sketchy when?",
        a: "It comes from a boss of sorts",
        b: "The link is credible",
        c: "It comes with weird text like HeLl0",
        d: "It comes from fishers",
        correct: "b",
    },
    {
        question: "A red flag for a phone scam is",
        a: "The caller asks for your account number or passwords",
        b: "The caller wants payment with gift cards or a wire transfer",
        c: "Intense pressure to make payment immediately or face some negative consequences",
        d: "All of the above",
        correct: "d",
    },
    {
        question: "You get an email that appears to be from your bank saying that you need to verify your account. You should:",
        a: "Click on the link and enter any information they ask for",
        b: "Delete the email",
        c: "Enter information THEN delete the email",
        d: "Send the link to other people",
        correct: "b",
    },
    {
        question: "Which of these is a red flag for a work-from-home scam?",
        a: "The company has good reviews on well-known sites",
        b: "The company asks questions about your qualifications for the job",
        c: "The company has a website that gives complete information about their history and what they do",
        d: "You need to pay money up front for a starter kit, or special equipment",
        correct: "d",
    },

];

const quiz= document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');


let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    })
    return answer;
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
        submitBtn.style.backgroundColor = "green"
           score++;
       }

       currentQuiz++;

       if(currentQuiz < quizData.length) {
           loadQuiz();
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>

           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})

