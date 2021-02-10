'use strict';
let userName = prompt('what\'s your name ? ');


alert ("welcome " + userName);

console.log();



alert('welcome ' + userName + ' , ' + ' now let\'s play and have FUN!');


function  Q1 (){
let knowIrbid=prompt('have you visit IRBID befor?');

knowIrbid=knowIrbid.toLowerCase();

if ((knowIrbid =='yes')|| (knowIrbid =='y')){
    alert('greate, it\'s in the north of Jordan');
}
else if((knowIrbid=='no')||(knowIrbid=='n'))
{
    alert('OOOH!, I advice  you to visit it');
}
//console.log(knowIrbid);
}
Q1();
function Q2(){
let knowYarmouk=prompt('have you hear about Yarmouk Uviversity befor?');

knowYarmouk=knowYarmouk.toUpperCase();

if (knowYarmouk =='YES'||knowYarmouk =='Y'){
    alert('greate, it\'s a beautiful university');
}
else if(knowYarmouk=='NO'||knowYarmouk=='N')
{
    alert('it was built in 1978 in Irbid');
}
//console.log(knowYarmouk);
}
Q2 ();

function Q3(){
 let yourAge=prompt('is your age greater than 18 ?');

 yourAge=yourAge.toUpperCase();
 if (yourAge=='YES' || yourAge=='Y'){
     alert('I wanna to tell you a secret !!!');
 } else if (yourAge=='NO'||yourAge=='N'){
     alert('you are so young, but you are still welcomed here!');
 } 
return yourAge ;
 //console.log(yourAge);
}
Q3();

function Q4 (){
let secret=prompt('do you want to tell you a top secret here?');

secret=secret.toLowerCase();

if (secret=='yes'||secret=='y'){
    alert('the secret is about a great school which is ASAC');
}else if (secret=='no'||secret=='n'){
    alert('oh no... WHY!!!! :( ');
}
//console.log(secret);
}
Q4();

function Q5 (){
let ASAC=prompt('do you know ASAC school?');
ASAC=ASAC.toUpperCase();
if (ASAC=='YES'||ASAC=='Y'){
    alert('good so you are great');
} else if (ASAC=='NO'||ASAC=='N'){
    alert('you need to know more !!');
}
//console.log(ASAC);
}
Q5();

alert('i hope see  you again '+ userName+', '+' but for now you need to leave goodbuy!');
function Q6 (){
let myAge = 25;
alert('Befor start you have four trial to guess the number let\'s start');



let trial = 0;

do {
    let guissNum = prompt('guess my age', 'input number');
    while (guissNum === '' || isNaN(guissNum) || guissNum === ' ') {
        guissNum = prompt('please input coorect value')
    }
    if (guissNum == 25) {
        alert('oh you are correct!')
        break;
    }
    else if (guissNum > 25) { alert('oh you make me very big!!') }
    else if (guissNum < 25) { alert('oh now you are wrong i\'m bigger than you think') }
    else { alert('you need to try again!!') }
    trial++;
}

while (trial < 4)

console.log(trial);
}
Q6();



let score = 0;
let myUniversity = ['yarmouk', 'just university', 'alpalqaa ', 'jordanian university'];
function Q7 (){
let guessMyUniversity='';
let trial1 = 0;
do {
    guessMyUniversity=prompt('what\'s my University name??');
    if (myUniversity.indexOf(guessMyUniversity)==-1){
    alert('you didn\'nt guess it  ');
    }else {
        alert('good job you guess correct value');
     score ++;
     }
    trial1++;
    }while (trial1<6)
    
    alert('your score is ' + score);
}
Q7();



    //for(let i=0;i<myUniversity.length;i++)
    //{
      //  console.log(myUniversity[i]);
    //}
/* do {
    let guessMyUniversity = prompt('enter the name of my university');

    
    if (guessMyUniversity.toLowerCase=='yarmouk')
    {
        alert ('you are correct');
        score++;
        break;
    }else if 
    switch (guessMyUniversity.toLowerCase) 
    {
        case myUniversity[0]:
            alert('you guess correct');
            score++;
       break;
        case myUniversity[1]:
            alert('you guess correct');
            score++;
            break;
            case myUniversity[2]:
            alert('you guess correct');
            score++;
            break;
            case myUniversity[3]:
            alert('you guess correct');
            score++;
            break;
        default:
            alert('you didn\'t guess it coorectly');
    }
    trial1++;
} while (trial1 < 6)*/

