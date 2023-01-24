const quizData  = [
    {
        question:"1. Who has the overall responsibility for ensuring that all isolation are in place prior to work proceeding",
        a:"Permit Authority",
        b:"Permit Applicant",
        c:"Authorised Electrical Personel",
        d:"Permit Controller",
       correct:"d",
    },
    {
        question:"2. Who is the person likely to carry out isolation and de-isolation of high voltage plant and equipment",
        a:"Permit Authority",
        b:"Permit Applicant",
        c:"Authorised Electrical Personel",
        d:"Permit Controller",
       correct:"c",
    },
    { 
        question:"3. which of the following are the general responsibilities that all personnel have within the permit to work system",
        a:"not Listening out for site alarms and watching beacons",
        b:"Follow agreed work conditions",
        c:"only wear Full PPE if the weather condition are poor",
        d:"leave the work unattended",
        correct:"b",
    },{
        question:"4. who is allowed to enter areas with potential radiocative sourced and what must he have at all time",
        a:"Permit Authority",
        b:"Classified Person(Radiography dosimeter)",
        c:"Gas Detector",
        d:"Permit Controller",
       correct:"b",
    },
    {
        question:"5. if you are a permit user and have just received your TBT, from worksite Supervisor,what would you do if you didnot understand all the information",
        a:"Ask Worksite Supervisor to explain the information again",
        b:"Start the work without asking",
        c:"Call the Authorised Electrical Person",
        d:"Ask for retraining course",
        correct:"a",
    },
    {
        question:"6. who has the authority to stop any activty that they consider unsafe ",
        a:"The Permit Authority only",
        b:"The Worksite Supervisor",
        c:"Everyone",
        d:"The  Permit Applicant only",
        correct:"C"
    },
    {
        question:"7. The Permit Applicant has overall responsibility for the correct operation and use of the permit to work system",
        a:"True",
        b:"false",
        c:"maybe",
        d:"Sometimes",
        correct:"a",
    },
    {
        question:"8. Who is responsible for Appointing Worksite Supervisors",
        a: "Permit Controller",
        b: "Worksite Supervisor",
        c: "Authorised Electrical Personnel",
        d: "Permit Applicant",
        correct:"d",
    },


];

const quiz= document.getElementById("quiz")
const answerEls = document.querySelectorAll(".answer")
const questionEl= document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz ()
function loadQuiz(){
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d

}
function deselectAnswers(){
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected (){
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer= answerEl.id}
        })
        return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer){
        if(answer ===  quizData[currentQuiz].correct) {
            score++
        }
        currentQuiz++
        if(currentQuiz < quizData.length) {
            loadQuiz()
        }else{
            quiz.innerHTML =`
            <h2>You answered ${Math.round(score/quizData.length)* 100 } %questions correctly 
            Cheers🥂</h2>
            <button onclick="location.reload()">Reload</button>
            <button onclick="location.href ='https://quiz-mainpage.vercel.app/';">Back</button>
            `
        }
        
    }
})












