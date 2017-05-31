$(document).ready(function(){
	var qNa=[
		{question : "Harry, Ron, and Hermione help save the Sorcerer's Stone from being stolen. How old was its cocreator, Nicholas Flamel, at the time of his death?",
		ans: ["660", "665", "565", "556"],
		correct:1
		},
		{question : "Who is snape?",
		ans: ["Death eater who had a crush on harry potter's mom.", "Someone good at chemistry", "Alan rickman", "All of the above"],
		corrent:3
	    },
		{question : "New students need to learn the secrets of the castle. How many staircases does Hogwarts have?",
		ans: ["142", "163", "137", "156"],
		correct:0
		},
		{question : "What was the last name of Professor Trelawney's former husband?",
		ans: ["Peucey", "Stroker", "Niggemeyer", "Higglebottom"],
		correct:3
		},
		{question : "Of which Hogwarts house is terry Boot a member.",
		ans: ["Slytherin", "Ravenclaw", "Hufflepuff", "Gryffindor"],
		correct:0
		},
		{question : "Which polyjuice potion ingredients must be acquired at the full moon?",
		ans: ["Newt spleen", "A bit of whoever you wish to turn into", "Fluxweed", "knotgrass"],
		correct:2
		},
		{question : "What type of creture is an Ashwinder?",
		ans: ["Cat", "Serpent", "Bird", "Fish"],
		correct:1
		}
    
    ];
    var questionCounter=0;
    var selections=[];
    var quiz =$('#quiz');
    $("#button1").on("click",function(){
    	var question=$("<h1>");
    });
});