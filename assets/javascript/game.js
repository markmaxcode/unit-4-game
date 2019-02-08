


$(document).ready(function(){
    var targetScore = 0;

    var crystalScores = {};
    var wins = 0;
    var loss = 0;
    var scoreNumber = 0;
    var initializeGame = function(){ 
        alert("initilize Game");
        targetScore = Math.floor(Math.random() * 101) + 19;
        scoreNumber = 0;
        crystalScores = {
            'crystal1': Math.floor(Math.random() * 11) + 1,
            'crystal2': Math.floor(Math.random() * 11) + 1,
            'crystal3': Math.floor(Math.random() * 11) + 1,
            'crystal4': Math.floor(Math.random() * 11) + 1
        };
        $("#targetScore").html(targetScore);
        $("#scoreNumber").html(scoreNumber);
    };

    initializeGame();
    $( "#crystal1" ).click(function() {
        //alert(crystalScores['crystal1']);
        scoreNumber= scoreNumber + crystalScores["crystal1"];
        $("#scoreNumber").html(scoreNumber);
        if (targetScore === scoreNumber) {

            alert("You Win!"); 
            wins = wins + 1;
            $("#wins").html(wins);
            initializeGame();
        } else if (scoreNumber > targetScore) {

            alert("you Loss");
            loss = loss + 1;
            $("#loss").html(loss);
            initializeGame();
        }
      });
      
    $( "#crystal2" ).click(function() {
        //alert(crystalScores['crystal2']);
        scoreNumber= scoreNumber + crystalScores["crystal2"];
        $("#scoreNumber").html(scoreNumber);
        if (targetScore === scoreNumber) {

            alert("You Win!"); 
            wins = wins + 1;
            $("#wins").html(wins);
            initializeGame();
        } else if (scoreNumber > targetScore) {

            alert("you Lose");
            loss = loss + 1;
            $("#loss").html(loss);
            initializeGame();
        }
      });
  
    $( "#crystal3" ).click(function() {
        //alert(crystalScores['crystal3']);
        scoreNumber= scoreNumber + crystalScores["crystal3"];
        $("#scoreNumber").html(scoreNumber);
        if (targetScore === scoreNumber) {

            alert("You Win!"); 
            wins = wins + 1;
            $("#wins").html(wins);
            initializeGame();
        } else if (scoreNumber > targetScore) {

            alert("you Lose");
            loss = loss + 1;
            $("#loss").html(loss);
            initializeGame();
        }
      });
  
    $( "#crystal4" ).click(function() {
        //alert(crystalScores['crystal4']);
        scoreNumber= scoreNumber + crystalScores["crystal4"];
        $("#scoreNumber").html(scoreNumber);
        if (targetScore === scoreNumber) {

            alert("You Win!"); 
            wins = wins + 1;
            $("#wins").html(wins);
            initializeGame();
        
        } else if (scoreNumber > targetScore) {

            alert("you Lose");
            loss = loss + 1;
            $("#loss").html(loss);
            initializeGame();
        }
      });
  
  });


