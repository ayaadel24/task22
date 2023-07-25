
const  qData= [ 
{  question:"How many Surah are there in the Holy Qur'an ",
a: "200",
b:" 155 ",
c:" 114 ",
d: "141",
correct: "c",
 } ,

{  question:"Who sponsored our master Muhammad after the death of his mother ",
a: " grandfather",
b:"grandmother ",
c:"uncle  ",
d: "sister",
correct: "a", },

{  question:" What is the first mosque built in Egypt?",
a: "Amr Ibn Al-Aas Mosque.",
b:" Imam Hussein Mosque. ",
c:" Sayeda Zainab Mosque ",
d: "Azhar ",
correct: "a", },

{  question:"What is the longest surah in the Qur'an?",
a: "Āl-‘Imrān",
b:" Hūd",
c:"Yūsuf ",
d: "Al-Baqarah",
correct: "d", },


{  question:"  Who is the great companion nicknamed Al-Faruq? ",
a: "Ali bin Abi Talib",
b:" Amr bin Al-Aas",
c:"Omar bin al-khattab ",
d: "Abdul Rahman bin Auf ",
correct: "c", },];

 const quiz = document.getElementById('quiz') 
 const answerQ = document.querySelectorAll('.answer') 
 const questionQ = document.getElementById('question') 
 const a_text = document.getElementById('a_text') 
 const b_text = document.getElementById('b_text') 
 const c_text = document.getElementById('c_text') 
 const d_text = document.getElementById('d_text') 
 const submitB = document.getElementById('submit')

 let currentQuiz= 0 
let score= 0
 loadQuiz()
 function loadQuiz() 
 {
 deselectAnswers() 
 
 const currentQuizD = qData[currentQuiz] 
 questionQ.innerText = currentQuizD.question 
 a_text.innerText = currentQuizD.a
 b_text.innerText = currentQuizD.b
 c_text.innerText = currentQuizD.c
 d_text.innerText = currentQuizD.d }

 function  deselectAnswers() 
 { answerQ.forEach(answerE => answerE.checked = false ) }

function getSelected(){
    let answer
    answerQ.forEach(answerE => 
        { if(answerE.checked ) 
        {answer = answerE.id}})
        return answer
     
}
submitB.addEventListener ('click' , () => { 
 const answer = getSelected()
 if (answer){ 
 if (answer == qData[currentQuiz].correct )
 {
 score++
} 
 currentQuiz++

 if (currentQuiz < qData.length) { 
 loadQuiz() } 
 else { 
 quiz.innerHTML = ` 
 <h2> your answered ${score}/${qData.length} Questions corretly </h2> 
 <button onclick = "location.reload()"> Reload </button>
`
 }
 }})
