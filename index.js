const STORE = [
    {
        question:`Prior to joining the X-Men, where was Cyclops raised?`,
        answers:[
            'At the zoo',
            'on the far side of the moon',
            'in an orphanage',
            'Cincinatti'
        ],
        correctAnswer:'in an orphanage',
    },
    {
        question:`After going through the Seige Perilous, British X-man Psylocke's consciousness was split in half with an assassin from this country.`,
        answers:[
            'USA',
            'Canada',
            'Israel',
            'Japan'
        ],
        correctAnswer:'Japan',
    },
    {
        question:`During her time with the Brotherhood of Mutants, Rogue faced off with this hero, stealing her powers of flight and invulnerability in the process `,
        answers:[
            'Ms Marvel AKA Carol Danvers',
            'White Queen AKA Emma Frost',
            'Husk AKA Paige Guthrie',
            'Dazzler AKA Alison Blaire'
        ],
        correctAnswer:'Ms Marvel AKA Carol Danvers',
    },
    {
        question:`Erik Magnus Lensherr is infamous across the world, is more commonly known by this name`,
        answers:[
            'Profeesor X',
            'The Blob',
            'Proteus',
            'Magneto'
        ],
        correctAnswer:'Magneto',
    },
    {
        question:`This white haired mutant powerhouse was raised as a pickpocket in Cario before eventually becoming leader of the X-men`,
        answers:[
            'Storm',
            'Bishop',
            'Iceman',
            'Jean Grey'
        ],
        correctAnswer:'Storm',
    }, 
 ];

 let score = 0;
 let questionNumber=0;

function generateQuestion(){
     //responsible for generating quiz app questions
    
    //function should iterate through the entire STORE
    if(questionNumber < STORE.length){
      //function should take objects & create HTML string that will be displayed in the DOM
      return createThing(questionNumber); 
    } else{
      //insert final instructions
      $('.questionBox').hide();
      finalScore();
    }
     console.log('`generateQuestion` ran');
}

//this function increments the score variable by 1, then updates the value in the text in the quiz
function updateScore(){
  score++;
  $('.score').text(score);
}

//this function increments the questionNumber variable by 1, then updates the question number text in the quiz.  Since the questionNumber variable indicates array index and starts at 0, we add +1 to the visible text in the quiz.
function updateQuestionNumber(){
  questionNumber++;
  $('.questionNumber').text(questionNumber + 1);
}

//this function ressets the score and questionNumber variables
function resetStats(){
  let score=0;
  let questionNumber=0;
  $('.score').text('0');
  $('.questionNumber').text('0');
}

function startQuiz(){
     //responsible for starting the quiz app
     //hide all alt boxes
     $('.altBox').hide();
     //listen for a click on start button
     $('.startQuiz').on('click', '.startButton', function(event){
     //hide startquiz element       
        $('.startQuiz').hide();
   //add 1 to question count
        $('.questionNumber').text(1);
  //show question box
        $('.questionBox').show();
  //question box loads first question       
       $('.questionBox').prepend(generateQuestion());
      console.log('`startQuiz` ran')   
    });
}



function submitAnswer(){
     //responsible for submitting answered questions from the quiz app
     //listen for when user clicks submit button
  $('.displayBox').on('submit', function(event){
    event.preventDefault();
    //hide alt boxes
    $('.altBox').hide();
     //show response box
    $('.answer').show();
    //evaluate whether question is true or false
    //the next two lines create a variable fron the answer we selected, then grab its value(its text)
    let selected = $('input:checked');
    let answer = selected.val();
    //pull the correct value from the STORE, which you'll access by index according to the questionNumber variable, then assign it to the variable 'correct'
    let correct = STORE[questionNumber].correctAnswer;
    if(answer === correct){
      correctAnswer();
    }else{
      wrongAnswer();
    }
     console.log('`submitAnswer` ran');
  });        
 }

 function createThing(questionIndex){
  //this function creates the HTML string for objects in STORE that will be used in generateQuestion
  
  //the for element, as well as the question, which is setup in a legend element in its own fieldset is created first
  let formMaker = $(`<form>
   <fieldset>
     <legend class='questionText'>${STORE[questionIndex].question}</legend>
   </fieldset>
</form>`)

//a variable for the fieldset is created, so that we can easily append the answers to it.
 let fieldSelector = $(formMaker).find('fieldset');

  

//here we'll create the html for the answers, and the append it to fieldselector(fieldset element)
STORE[questionIndex].answers.forEach(function(answerValue, answerIndex){
 $(`<label class='sizeMe' for='${answerIndex}'>
 <input class='radio' type='radio' id='${answerIndex}' value='${answerValue}' name='answer' required>
 <span>${answerValue}</span>
</label>`).appendTo(fieldSelector);
});

//here we'll create the html for the answer button, and append it to fieldselector(fieldset element)
$(`<img src='compressed photos/shadowcat.png' alt='picture of Shadowcat' class='images' width='200px'>
<button type='submit' class='submitButton button'>Submit</button>`).appendTo(fieldSelector);

//we now return the completed html form element
return formMaker;
}


/*
FORM HTML
<form>
   <fieldset>
     <legend class='questionText'>${STORE[questionIndex].question}</legend>
   </fieldset>
<label class='sizeMe' for='${answerIndex}'>
 <input class='radio' type='radio' id='${answerIndex}' value='${answerValue}' name='answer' required>
 <span>${answerValue}</span>
</label>
<button type='submit' class='submitButton button'>Submit</button>
</form>
*/

function correctAnswer(){
  //this function generates when answer is correct, and renders the html for correct answers, which include a heading, picture, and button that leads the user to the next question when clicked, it then updates the score variable as well as the score shown on the quiz
  $('.answer').html(`
    <h3 class='questionText'>Correct!</h3>
    <img src='compressed photos/storm.jpg' alt='picture of Storm' class='images'>
    <p class='sizeMe'>Storm, mistress of the elements, says "Good job!  Let's try another one."</p>
    <button type='button' class='nextButton button'>Next</button>`
  );
  updateScore();
}

function wrongAnswer(){
  $('.answer').html(`
    <h3 class='questionText'>Wrong!</h3>
    <img src='compressed photos/magneto.jpg' alt='picture of Magneto' class='images'>
    <h2 class='sizeMe questionText'>Correct Answer:  <span class='sizeMe questionText'>${STORE[questionNumber].correctAnswer}</span>
    <p class='sizeMe'> Try again, or Magneto's comin for ya'</p>
    <button type='button' class='nextButton button'>Next</button>`
  );
}


function nextQuestion(){
     //responsible for moving to next question on the quiz app
     //listen for when user clisks on 'next question;
  $('.displayBox').on('click', '.nextButton', function(event){
      //hide alt boxes
    $('.altBox').hide();
    //show question box
    $('.questionBox').show();
     //update question number
     updateQuestionNumber();
     //update questionBox with new question
     $('.questionBox form').replaceWith(generateQuestion);
     console.log('`nextQuestion` ran');
  });
}

function finalScore(){
//this function determines the final score, and updates the html 
$('.final').show();

//create arrays of different messages players receive depending on their score
let great =[
  'Awesome job! Welcome to the X-Men!',
  'compressed photos/cyclops.jpg',
  'picture of Cyclops shirtless'
];

let good = [
  'Not bad! Keep up the good work',
  'compressed photos/shadowcat.png',
  'picture of Shadowcat'
];

let bad = [
  'Mmm.. not so good.  Try again',
  'compressed photos/rogue v ms marvel.jpg',
  'picture of Rogue fighting Ms Marvel'
];

//create a function that displays the correct array based off their score.  Insert pictures on each array, then modify this code.

if(score >= 5){
  array=great;
} else if(score < 3 && score > 4){
  array = good;
} else{
  array=bad;
}

// display the final array in 'final' html element

return $('.final').html(
`<h3 class='questionText'>${array[0]}</h3>
<img src='${array[1]}' alt='${array[2]}' class='images'>
<h2 class='questionText'>Your final score it ${score}/10</h2>
<button type='submit' class='restartButton button'>Restart quiz</button>`
);
}

function restartQuiz(){
     //responsible for restarting the quiz app once all questions are answered
     //listen for when user clicks on restart button
$('.displayBox').on('click', '.restartButton', function(event){
    event.preventDefault();  
  //reset question number and score
    resetStats();
     //hide alt boxes
     $('.altBox').hide();
     //show startQuiz box
     $('.startQuiz').show();
     console.log('`restartQuiz` ran');
     

});  
}

 //the callback function responsible for running all functions 
function makeQuiz(){
     startQuiz();
     generateQuestion();
     submitAnswer();
     nextQuestion();
     restartQuiz();
}

$(makeQuiz);