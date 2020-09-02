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
        correctAnswer:'Jean Grey',
    }, 
 ];

 function generateQuestion(){
     //responsible for generating quiz app questions
     console.log('`generateQuestion` ran');
 }

 function startQuiz(){
     //responsible for starting the quiz app
     //hide all alt boxes
     //listen for a click on start button
     //hide startbutton element
     //add 1 to question count
     //show question box
     //question box loads first question
     console.log('`startQuiz` ran');
 }

 function submitAnswer(){
     //responsible for submitting answered questions from the quiz app
     //listen for when user clicks submit button
     //hide alt boxes
     //show response box
     //evaluate whether question is true or false
     console.log('`submitAnswer` ran');
 }

 function nextQuestion(){
     //responsible for moving to next question on the quiz app
     //listen for when user clisks on 'next question;
     //hide alt boxes
     //show question box
     //update question number
     //update with new question
     console.log('`nextQuestion` ran');
 }

 function restartQuiz(){
     //responsible for restarting the quiz app once all questions are answered
     //listen for when user clicks on restart button
     //reset question number and score
     //hide alt boxes
     //show startQuiz box
     console.log('`restartQuiz`');
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


