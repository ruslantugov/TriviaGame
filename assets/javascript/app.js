$(document).ready(function () {

    $('#start').on('click', function () {
        game.start();
    
 });

 var game = {
     counter: 10,
     countdown: function () {
         game.counter--;

         $('#counter').html(game.counter);
         if(game.counter == 0){
             clearInterval(timer);
            //  console.log("Time is up")
             game.done();
            
         }
     },
     start: function () {
         timer = setInterval(game.countdown, 1000);
         $('#extraControls').prepend('<h2>Time Remaining: <span id="counter">10</span> Seconds</h2>')
         $('#subwrapper').remove();
         $('#extraControls').removeClass("hidden");

         //doesn't work
         function endTime() {
    if(timer ==0) {
        clearInterval(timer);

    }
     }
 }

}

//Click function and checking right questions
document.getElementById("myButton").addEventListener("click", check);

function check(e) { 
    e.preventDefault();

    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var question5 = document.quiz.question5.value;

    var correct = 0;

    if (question1 == "ThomasJefferson") {
        correct++;
    }
    if (question2 == "Texas") {
        correct++;
    }
    if (question3 == 50) {
        correct++;
    }
    if (question4 == "NewYork") {
        correct++;
    }
    if (question5 == "FranklinDRoosevelt") {
        correct++;
    }

    clearInterval(timer);
    $('#extraControls').remove();
    document.getElementById("number_correct").innerHTML = "Your Score : " + correct;

};


});
