window.addEventListener("DOMContentLoaded",(function(){let e=[{question:"Inside which HTML element do we put the JavaScript?",answerA:"&ltjs&gt",answerB:"&ltjavascript&gt",answerC:"&ltscripting&gt",answerD:"&ltscript&gt",correctAnswer:"&ltscript&gt"},{question:"What is the correct JavaScript syntax to change the content of the HTML element below?",answerA:'document.getElement("p").innerHTML = "Hello World!";',answerB:'#demo.innerHTML = "Hello World!";',answerC:'document.getElementByName("p").innerHTML = "Hello World!";',answerD:'document.getElementById("demo").innerHTML = "Hello World!";',correctAnswer:'document.getElementById("demo").innerHTML = "Hello World!";'},{question:"Where is the correct place to insert a JavaScript?",answerA:"The &ltfooter&gt",answerB:"The &lthead&gt section",answerC:"The &ltbody&gt sections",answerD:"Both the &lthead&gt and the &ltbody&gt section are correct",correctAnswer:'Both sections the &lthead&gt and the &ltbody" section are correct'},{question:"How do you create a function in JavaScript?",answerA:"function = myFunction();",answerB:"function myFunction();",answerC:"function:myFunction",answerD:"create myFunction()",correctAnswer:"function myFunction();"},{question:"How to write an IF statement in JavaScript?",answerA:"if i == 5 then",answerB:"if (i == 5)",answerC:"if i = 5 then",answerD:"if i = 5",correctAnswer:"if (i == 5)"},{question:"How can you add a comment in a JavaScript?",answerA:"&lt!--This is a comment--&gt",answerB:"//This is a comment",answerC:"'This is a comment",answerD:"This is a comment",correctAnswer:"//This is a comment"},{question:"What is correct way to write a JavaScript array?",answerA:'var colors = ["red", "green", "blue"];',answerB:'var colors = [1:"red"< 2:"green", 3:"blue"];',answerC:'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue");',answerD:'var colors = "red", "green", "blue";',correctAnswer:'var colors = ["red", "green", "blue"];'},{question:'What is the correct JavaScript syntax for opening a new window called "w2"?',answerA:'w2 = window.new("http://www.w3schools.com");',answerB:'w2 = window.open("http://www.w3schools.com");',answerC:"w2 = new Window.open();",answerD:"w2.open();",correctAnswer:'w2 = window.open("http://www.w3schools.com");'},{question:"How do you declare a JavaScript variable?",answerA:"var carName;",answerB:"v carName;",answerC:"variable carName;",answerD:"createVariable carName;",correctAnswer:"var carName;"},{question:"What ISN'T a JavaScript data type?",answerA:"boolean",answerB:"object",answerC:"not found",answerD:"undefined",correctAnswer:"not found"}].map((e=>({value:e,sort:Math.random()}))).sort(((e,n)=>e.sort-n.sort)).map((({value:e})=>e));console.log(e);let n=document.querySelector("h2"),t=document.querySelector("#answerA"),r=document.querySelector("#answerB"),o=document.querySelector("#answerC"),a=document.querySelector("#answerD");n.innerText=e[0].question,t.innerHTML=`${e[0].answerA} <input type='checkbox'>`,r.innerHTML=`${e[0].answerB} <input type='checkbox'>`,o.innerHTML=`${e[0].answerC} <input type='checkbox'>`,a.innerHTML=`${e[0].answerD} <input type='checkbox'>`}));