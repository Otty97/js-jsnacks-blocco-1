$(document).ready(function() {
  //JSnack A --> Creo arrey di squadre con proprietà (nome, punti fatti, falli subiti)
  var team = [
    {
      nome: 'juventus',
      puntiFatti: 0,
      falliSubiti:0,
    },
    {
      nome: 'milan',
      puntiFatti: 0,
      falliSubiti:0,
    },
    {
      nome: 'inter',
      puntiFatti: 0,
      falliSubiti:0,
    },
    {
      nome: 'roma',
      puntiFatti: 0,
      falliSubiti:0,
    },
    {
      nome: 'lazio',
      puntiFatti: 0,
      falliSubiti:0,
    },
  ];
  console.log(team);

  //JSnack A --> Generare num.random al posto delle prop 0 (punti fatti, falli subiti)
  var campionato = team[i]

  for (var i = 0; i < team.length; i++) {
    
    team.puntiFatti function getRandomArbitrary(min, max){
     return Math.random() * (max - min) + min;
   }
  }




  console.log(team);



});
