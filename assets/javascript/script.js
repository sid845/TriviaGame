$(document).ready(function(){
	var questions=[
		{question : "Harry, Ron, and Hermione help save the Sorcerer's Stone from being stolen. How old was its cocreator, Nicholas Flamel, at the time of his death?",
		choices: ["660", "665", "565", "556"],
		correct:1
		},
		{question : "Who is snape?",
		choices: ["Death eater who had a crush on harry potter's mom.", "Someone good at chemistry", "Alan rickman", "All of the above"],
		corrent:3
	    },
		{question : "New students need to learn the secrets of the castle. How many staircases does Hogwarts have?",
		choices: ["142", "163", "137", "156"],
		correct:0
		},
		{question : "What was the last name of Professor Trelawney's former husband?",
		choices: ["Peucey", "Stroker", "Niggemeyer", "Higglebottom"],
		correct:3
		},
		{question : "Of which Hogwarts house is terry Boot a member.",
		choices: ["Slytherin", "Ravenclaw", "Hufflepuff", "Gryffindor"],
		correct:0
		},
		{question : "Which polyjuice potion ingredients must be acquired at the full moon?",
		choices: ["Newt spleen", "A bit of whoever you wish to turn into", "Fluxweed", "knotgrass"],
		correct:2
		},
		{question : "What type of creture is an Ashwinder?",
		choices: ["Cat", "Serpent", "Bird", "Fish"],
		correct:1
		}
    
    ];
    var questionCounter=0;
    var selections=[];
    var quiz =$('#quiz');
    $("#button1").on("click",function(){
    
    	beginStart();//clears all the other html inside jumbotron
    
    	displayNext();
	
	   	$('#next').on('click', function (e) {
	    e.preventDefault();
	    
	    // Suspend click listener during fade animation
	    if(quiz.is(':animated')) {        
	      return false;
	    }
	    choose();
	    
	    // If no user selection, progress is stopped
	    if (isNaN(selections[questionCounter])) {
	      alert('Please make a selection!');
	    } else {
	      questionCounter++;
	      displayNext();
	    }
	  });
	  
	  // Click handler for the 'prev' button
	  $('#prev').on('click', function (e) {
	    e.preventDefault();
	    
	    if(quiz.is(':animated')) {
	      return false;
	    }
	    choose();
	    questionCounter--;
	    displayNext();
	  });
	  
	  // Click handler for the 'Start Over' button
	  $('#start').on('click', function (e) {
	    e.preventDefault();
	    
	    if(quiz.is(':animated')) {
	      return false;
	    }
	    questionCounter = 0;
	    selections = [];
	    displayNext();
	    $('#start').hide();
	  });
	  
	  // Animates buttons on hover
	  $('.button').on('mouseenter', function () {
	    $(this).addClass('active');
	  });
	  $('.button').on('mouseleave', function () {
	    $(this).removeClass('active');
	  });
	  
	  // Creates and returns the div that contains the questions and 
	  // the answer selections
	  function createQuestionElement(index) {
	    var qElement = $('<div>', {
	      id: 'question'
	    });
	    
	    var header = $('<h2>Question ' + (index + 1) + ':</h2>');
	    qElement.append(header);
	    
	    var question = $('<p>').append(questions[index].question);
	    qElement.append(question);
	    
	    var radioButtons = createRadios(index);
	    qElement.append(radioButtons);
	    
	    return qElement;
	  }
	  
	  // Creates a list of the answer choices as radio inputs
	  function createRadios(index) {
	    var radioList = $('<ul>');
	    var item;
	    var input = '';
	    for (var i = 0; i < questions[index].choices.length; i++) {
	      item = $('<li>');
	      input = '<input type="radio" name="answer" value=' + i + ' />';
	      input += questions[index].choices[i];
	      item.append(input);
	      radioList.append(item);
	    }
	    return radioList;
	  }
	  
	  // Reads the user selection and pushes the value to an array
	  function choose() {
	    selections[questionCounter] = +$('input[name="answer"]:checked').val();
	  }
	  
	  // Displays next requested element
	  function displayNext() {
	    quiz.fadeOut(function() {
	      $('#question').remove();
	      
	      if(questionCounter < questions.length){
	        var nextQuestion = createQuestionElement(questionCounter);
	        quiz.append(nextQuestion).fadeIn();
	        if (!(isNaN(selections[questionCounter]))) {
	          $('input[value='+selections[questionCounter]+']').prop('checked', true);
	        }
	        
	        // Controls display of 'prev' button
	        if(questionCounter === 1){
	          $('#prev').show();
	        } else if(questionCounter === 0){
	          
	          $('#prev').hide();
	          $('#next').show();
	        }
	      }else {
	        var scoreElem = displayScore();
	        quiz.append(scoreElem).fadeIn();
	        $('#next').hide();
	        $('#prev').hide();
	        $('#start').show();
	      }
	    });
	  }
	  
	  // Computes score and returns a paragraph element to be displayed
	  function displayScore() {
	    var score = $('<p>',{id: 'question'});
	    
	    var numCorrect = 0;
	    for (var i = 0; i < selections.length; i++) {
	      if (selections[i] === questions[i].correct) {
	        numCorrect++;
	      }
	    }
	    
	    score.append('You got ' + numCorrect + ' questions out of ' +
	                 questions.length + ' right!!!');
	    return score;
	  }
	});

	    
    function beginStart(){
    	$("#firstPage").remove();
    }

});