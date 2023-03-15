 // Start Section
let start = document.querySelector("#start");

//guide section
let guide = document.querySelector("#guide");
let exit = document.querySelector("#exit");
let continueBtn = document.querySelector("#continue");

//quiz section
 let quiz = document.querySelector("#quiz");
 let time = document.querySelector("#time");

 //question Section
 let questionNo = document.querySelector("#questionNo");
 let questionText = document.querySelector("#questionText");

 //multiple Choices of Questions
 let option1 = document.querySelector("#option1");
 let option2 =document.querySelector("#option2");
 let option3 = document.querySelector("#option3");
 let option4 = document.querySelector("#option4");

 //cprrect and next Button
 let total_correct = document.querySelector("#total_correct");
 let next_question = document.querySelector("#next_question");

 //result section 
 let points = document.querySelector("#points");
 let quit = document.querySelector("#quit");
 let startAgain = document.querySelector("#startAgain");
 
 // Get All 'H4' From Quiz Section(MCQS)
 let choice_que = document.querySelectorAll(".choice_que");

 let index =0;
 let timer = 0;
 let interval = 0;
 
 //total points
 let correct =  0;

 //store Answer value
 let UserAns = undefined;

 let MCQS =[{
    question: "What Does HTML Stand For ?" ,
choice1: "Hyperlinks and Text Markup Language " ,
choice2:  "Hyper Text Markup Language" ,
choice3: "Hyper Text Making Language " ,
choice4: "Hyper Text Mark Language  ",
answer: 1 
},
{
 question: "What Does CSS Stand For ?" ,
choice1: "Colorful StyleSheet " ,
choice2:  "Creative Style Sheet" ,
choice3:  "Cascading Style Sheet" ,
choice4:  "Computer Style Sheet ",
answer: 2  
},
{
 question:" Which HTML Tag Is Used To Define An Internal Style Sheet ? ",
choice1: "<script></script>"  ,
choice2: "<style></style>" ,
choice3:  "<html></html>" ,
choice4:  "<svg></svg>" ,
answer: 1  
},
{
 question: "Which Is The Correct CSS Syntax ?" ,
choice1:  "body{color:black}" ,
choice2:  "{body{color:black}" ,
choice3: "body={color:black} " ,
choice4:  "body:color{black}" ,
answer: 0  
},
{
   question: "How Do You Insert A Comment In A CSS File ?",
choice1: "/*This is Comment*/ " ,
choice2:  "//This Is Comment ",
choice3:  "<!--- This Is Comment --->" ,
choice4:  "//This Is Comment// ",
answer:  1 
},
{
   question: "How Do You Insert A Comment In A HTML File ?",
choice1: "/*This is Comment*/ " ,
choice2:  "//This Is Comment" ,
choice3:  "<!--- This Is Comment ---> ",
choice4:  "//This Is Comment// ",
answer:  3 
},
{
   question: "Which Property Is Used To Change The Background Color ?",
choice1:  "backgroundColor" ,
choice2: "BgColor  ",
choice3: "Color-Background"  ,
choice4: "background  ",
answer:  3 
},
{
   question: "How To Write An 'IF' Statement In javascript ?",
choice1:  "if i==5 ",
choice2:  "if(i==5)" ,
choice3: "if(i==5)then"  ,
choice4: "if i==5 then"  ,
answer:  2 
},
{
  question: "Inside which HTML Element Do We Put The javascript ?",
choice1: "<js></js>",
choice2:  "<javascript></javascript>" ,
choice3:  "<script></script> ",
choice4: "<scripting></scripting>"  ,
answer:  2 
},
{
  question: "How Does A 'WHILE' Loop Start ?",
choice1:  "While(i <= 0) ",
choice2: "While(i <= 0 i++)"  ,
choice3: "While i <= 0 " ,
choice4: "While (i++ i <= 0)"  ,
answer: 0  
}]

 // What happen when 'start' Button will Click
 start.addEventListener("click" , ()=>{
     start.style.display = "none";
     guide.style.display = "block";
 });

 // What happen when 'exit' Button will Click
 exit.addEventListener("click" , ()=>{
    start.style.display = "block";
    guide.style.display = "none";
});

// Creating Timer For Quiz Timer Section
let countDown = ()=>{
    if(timer === 20)
    {
        clearInterval(interval);
        next_question.click();
    }
    else
    {
        timer++;
        time.innerText = timer;
    }
}

//setInterval(countDown,1000);
let loadData = () =>{
    questionNo.innerText = index + 1 + ". ";
    questionText.innerText = MCQS[index].question;
    option1.innerText = MCQS[index].choice1;
    option2.innerText = MCQS[index].choice2;
    option3.innerText = MCQS[index].choice3;
    option4.innerText = MCQS[index].choice4;

// timer start
    timer = 0;
}

loadData();

 // What happen when 'continue' Button will Click
 continueBtn.addEventListener("click" , ()=>{
    quiz.style.display = "block";
    guide.style.display = "none";

    interval = setIterval(countDown, 1000);
    loadData();
    // remove All Active Classes When Continue Button Will Click
    choice_que.forEach(removeActive =>{
        removeActive.classList.remove("active");

        total_correct.innerHTML = `${correct = 0} out of ${MCQS.length} Questions`;
    })
});

choice_que.forEach((choices,choiceNo) =>{
    choices.addEventListener("click", ()=>{
        choices.classList.add("active");
        //check answer
        if(choiceNo === MCQS[index].answer)
        {
            correct++;
        }
        else
        {
            correct += 0;
        }
        //stop Counter
        clearInterval(interval);
        
        //disable All options when user Select An Option
       for(i = 0; i<=3; i++)
       {
           choice_que[i].classList.add("disabled");
       }
    })
});
//  What happen when 'Next' Button will Click
next_question.addEventListener("click", ()=>{
    // if index is less then MCQS.length
    if(index !== MCQS.length - 1) {
        index++;
        choice_que.forEach(removeActive => {
            removeActive.classList.remove("active");
        })
        // question
        loadData();

        //result
        total_correct.style.display = "block";
        total_correct.innerHTML = `${correct = 0} out of ${MCQS.length} Questions`;
        clearInterval(interval);
        interval = setInterval(countDown , 1000);
        
    }
    else
    {
        index = 0;
        //when quiz question complete display result section
        clearInterval(interval);
        quiz.style.display = "none";
        points.innerHTML = `You Got ${correct} Out Of ${MCQS.length}`;
        XPathResult.style.display = "block"; 

    }
    for(i = 0; i<=3; i++)
     {
      choice_que[i].classList.remove("disabled");
      }
})

 // What happen when 'quit' Button will Click
 quit.addEventListener("click" , ()=>{
    start.style.display = "block";
    result.style.display = "none";
});
 // start again when 'exit' Button will Clicked
 exit.addEventListener("click" , ()=>{
    guide.style.display = "block";
    result.style.display = "none";
});