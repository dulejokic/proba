/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores,roundScore,activePlayer;

scores=[0,0];// ukupni poeni igraca
roundScore=0;// score trenutnog bacanja igraca
activePlayer=0;// aktivni igrač,vrednosti 0 i 1


document.getElementById('score-0').textContent=0;
document.getElementById('score-1').textContent=0;
document.getElementById('current-0').textContent=0;
document.getElementById('current-1').textContent=0;

var x=document.querySelector('.dice').style.display='none';

document.querySelector('.btn-roll').addEventListener('click',function() 
{
   var  dice=Math.floor(Math.random()*6)+1;// slucajan broj bacanja kocke


   // prikaz bacanja kocke
   var diceDom=document.querySelector('.dice');
   diceDom.style.display='block';
   diceDom.src='dice-'+dice+'.png';
   
   if(dice!=1 ) {// ako nije 1 saberi
       roundScore += dice;
       document.querySelector('#current-'+activePlayer).textContent=roundScore;
   } else { //ako je 1 menjaj igraca

       nextPlayer();

   }});

   document.querySelector('.btn-hold').addEventListener('click',function() {
       scores[activePlayer] += roundScore;

       document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer];

       if(scores[activePlayer] >= 20) {

        document.querySelector('#name-'+activePlayer).textContent='Winner!';
        document.querySelector('.dice').style.display='none';
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
        document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');


       } else {
           
        nextPlayer();
    }



   })

   function nextPlayer() {

    document.querySelector('#current-'+activePlayer).textContent=0;
       activePlayer=1-activePlayer;
       roundScore=0;

       document.querySelector('.player-0-panel').classList.toggle('active');// ako je ima briše,ako nema dodaje
       document.querySelector('.player-1-panel').classList.toggle('active');

       document.querySelector('.dice').style.display='none';
       
   }
   
