const questions = [
  {
    question: 'Inside which HTML element do we put the JavaScript?',
    answerA: '&ltjs&gt',
    answerB: '&ltjavascript&gt',
    answerC: '&ltscripting&gt',
    answerD: '&ltscript&gt',
    correctAnswer: 'answerD',
    selectedAnswer: '',
  },
  {
    question: 'What is the correct JavaScript syntax to change the content of the HTML element below?',
    answerA: 'document.getElement("p").innerHTML = "Hello World!";',
    answerB: '#demo.innerHTML = "Hello World!";',
    answerC: 'document.getElementByName("p").innerHTML = "Hello World!";',
    answerD: 'document.getElementById("demo").innerHTML = "Hello World!";',
    correctAnswer: 'answerD',
    selectedAnswer: '',
  },
  {
    question: 'Where is the correct place to insert a JavaScript?',
    answerA: 'The &ltfooter&gt',
    answerB: 'The &lthead&gt section',
    answerC: 'The &ltbody&gt sections',
    answerD: 'Both the &lthead&gt and the &ltbody&gt section are correct',
    correctAnswer: 'answerD',
    selectedAnswer: '',
  },
  {
    question: 'How do you create a function in JavaScript?',
    answerA: 'function = myFunction();',
    answerB: 'function myFunction();',
    answerC: 'function:myFunction',
    answerD: 'create myFunction()',
    correctAnswer: 'answerB',
    selectedAnswer: '',
  },
  {
    question: 'How to write an IF statement in JavaScript?',
    answerA: 'if i == 5 then',
    answerB: 'if (i == 5)',
    answerC: 'if i = 5 then',
    answerD: 'if i = 5',
    correctAnswer: 'answerB',
    selectedAnswer: '',
  },
  {
    question: 'How can you add a comment in a JavaScript?',
    answerA: '&lt!--This is a comment--&gt',
    answerB: '//This is a comment',
    answerC: "'This is a comment",
    answerD: 'This is a comment',
    correctAnswer: 'answerB',
    selectedAnswer: '',
  },
  {
    question: 'What is correct way to write a JavaScript array?',
    answerA: 'var colors = ["red", "green", "blue"];',
    answerB: 'var colors = [1:"red"< 2:"green", 3:"blue"];',
    answerC: 'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue");',
    answerD: 'var colors = "red", "green", "blue";',
    correctAnswer: 'answerA',
    selectedAnswer: '',
  },
  {
    question: 'What is the correct JavaScript syntax for opening a new window called "w2"?',
    answerA: 'w2 = window.new("http://www.w3schools.com");',
    answerB: 'w2 = window.open("http://www.w3schools.com");',
    answerC: 'w2 = new Window.open();',
    answerD: 'w2.open();',
    correctAnswer: 'answerB',
    selectedAnswer: '',
  },
  {
    question: 'How do you declare a JavaScript variable?',
    answerA: 'var carName;',
    answerB: 'v carName;',
    answerC: 'variable carName;',
    answerD: 'createVariable carName;',
    correctAnswer: 'answerA',
    selectedAnswer: '',
  },
  {
    question: "What ISN'T a JavaScript data type?",
    answerA: 'boolean',
    answerB: 'object',
    answerC: 'not found',
    answerD: 'undefined',
    correctAnswer: 'answerC',
    selectedAnswer: '',
  },
];

let randomizedQuestions = questions
  .map(value => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value);

console.log(randomizedQuestions);
console.log("If you want to know the answers, just click on the array higher")


let h2 = document.querySelector('h2');
let answerA = document.querySelector("#answerA");
let answerB = document.querySelector("#answerB");
let answerC = document.querySelector("#answerC");
let answerD = document.querySelector("#answerD");
  
let number = 0;
  
h2.innerText = randomizedQuestions[number].question;
answerA.innerHTML = `${randomizedQuestions[number].answerA}`;  
answerB.innerHTML = `${randomizedQuestions[number].answerB}`;
answerC.innerHTML = `${randomizedQuestions[number].answerC}`;
answerD.innerHTML = `${randomizedQuestions[number].answerD}`;
  
let lis = document.querySelectorAll('li');
  
function selectAnswer(option){
  lis[option].className = 'selected';
  for(let i = 0;i < lis.length;i++){
    if(lis[i] !== lis[option]){
      lis[i].className = '';
    }else{
      // Displays id of a selected <li> as a string
      randomizedQuestions[number].selectedAnswer = lis[i].id;
    }
  }
}
  
/* The part where you display question & answers */
  
function changeQuestion(){
  for(let i = 0;i < lis.length;i++){
    if(lis[i].classList.length > 0){
      nextQuestion();
      unselect();
      return;
    }
  }
  alert('Please choose an answer');
}

function unselect(){
  for(let i = 0;i < lis.length;i++){
    lis[i].className = '';
  }
}

function nextQuestion(){
  if(number == 8){
    document.querySelector('button').innerText = 'Submit ˃';
    number += 1;
    h2.innerText = randomizedQuestions[number].question;
    answerA.innerHTML = `${randomizedQuestions[number].answerA}`;  
    answerB.innerHTML = `${randomizedQuestions[number].answerB}`;
    answerC.innerHTML = `${randomizedQuestions[number].answerC}`;
    answerD.innerHTML = `${randomizedQuestions[number].answerD}`; 
    return;
  }else if(number < 9){
    number += 1;
    h2.innerText = randomizedQuestions[number].question;
    answerA.innerHTML = `${randomizedQuestions[number].answerA}`;  
    answerB.innerHTML = `${randomizedQuestions[number].answerB}`;
    answerC.innerHTML = `${randomizedQuestions[number].answerC}`;
    answerD.innerHTML = `${randomizedQuestions[number].answerD}`; 
    return;
  }else if(number == 9){
    if(randomizedQuestions[number].selectedAnswer !== ''){
      showResults();
    }
  }
};

function showResults(){
  let correctAnswers = 0;
  for(let i = 0;i < randomizedQuestions.length;i++){
    if(randomizedQuestions[i].selectedAnswer == randomizedQuestions[i].correctAnswer){
      correctAnswers++;
      console.log(`${i} - Correct`);
    }else{
      console.log(`${i} - Wrong`)
    }
  }
  alert(`${correctAnswers} out of 10 answers are correct`);
  alert('The page will refresh');
  location.reload();
};