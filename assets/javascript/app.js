    var correctAnswers = 0
    var wrongAnswers = 0 
    var gameTime = 60
    var rightAnswer = document.getElementsByClassName("rightanswer");
    
    var triviaGame = {
        trivia: [{
                question: "Which volcanic eruption produced the loudest sound ever heard by humanity?",
                choices: ["Mt. St. Helens", "Krakatoa", "Mt. Vesuvius", "Tambora" ],
                correct: "Krakatoa",
            },
            {
                question: "What was the biggest tropical cyclone in terms of size to ever form?",
                choices: ["Hurricane Irma", "Hurricane Harvey", "Typhoon Tip", "Bhola Cyclone"],
                correct: "Typhoon Tip",
             },
            {
                question: "What is the largest animal in the entire world?",
                choices: ["Saltwater Crocodile", "Giraffe", "African Elephant", "Blue Whale"],
                correct: "Blue Whale",
            },
            {
                question: "What is the fastest wind speed from a tornado ever recorded on earth?",
                choices: ["301 MPH", "347 MPH", "289 MPH", "272 MPH"],
                correct: "301 MPH",
            },
            {
                question: "What was the coldest natural temperature ever recorded on earth?",
                choices: ["-128.6 F", "-97.8 F", "-136.3 F", "-102.9 F"],
                correct: "128.6 F",
            },
            {
                question: "What was the highest rainfall (in inches) in a 24 hour period recorded on earth?",
                choices: ["73 in", "90 in", "46 in", "57 in"],
                correct: "73 in",
            },
            {
                question: "Which volcanic eruption produced the loudest sound ever heard by humanity?",
                choices: ["38.6 FT", "15.8 FT", "21.2 FT", "34.8 FT"],
                correct: "34.8 FT",
            },
            {
                question: "Which volcanic eruption produced the loudest sound ever heard by humanity?",
                choices: ["Hurricane Katrina", "Valdivia Earthquake", "Chernobyl Disaster", "Tohoku Earthquake"],
                correct: "Tohoku Earthquake",
            }
            
        ]};


        $(document).ready(function(){
            $("#start").click(function(){
                var sTime = setInterval(function(){
                    if (gameTime != 0) {
                        document.getElementById('timer').innerHTML = gameTime + "";
                        gameTime = gameTime - 1;
                    } else {
                        gameTime = 60
                        document.getElementById('timer') .innerHTML = gameTime + "";
                        alert("Times up! Try again!");
                        clearInterval(sTime);
                        document.getElementById("quiz").reset();
                    }
                }, 1000);
            });
        });

        $("#submit").on("click", "", function(){
            var countChecked = function () {
                var n = $("input:checked.rightanswer").length;
                $("#answersDiv").text("You got " + n + (n === 1 ? " is" : " answers right!"));
                document.getElementById("quiz").reset();
            };
            countChecked();
            });






// $("#timer").text(triviaGame.trivia[0].choices[3])
// $("#timer").text(triviaGame.trivia[1].choices[2])
// $("#timer").text(triviaGame.trivia[2].choices[3])
// $("#timer").text(triviaGame.trivia[3].choices[0])
// $("#timer").text(triviaGame.trivia[4].choices[0])
// $("#timer").text(triviaGame.trivia[5].choices[0])
// $("#timer").text(triviaGame.trivia[6].choices[3])
// $("#timer").text(triviaGame.trivia[7].choices[3])
