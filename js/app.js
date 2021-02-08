'use strict';
let userName=prompt('what\'s your name ? ');
console.log(userName);
alert('welcome '+ userName+' , '+' now let\'s play and have FUN!');

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

 let yourAge=prompt('is your age greater than 18 ?');

 yourAge=yourAge.toUpperCase();
 if (yourAge=='YES' || yourAge=='Y'){
     alert('I wanna to tell you a secret !!!');
 } else if (yourAge=='NO'||yourAge=='N'){
     alert('you are so young, but you are still welcomed here!');
 }
 //console.log(yourAge);

let secret=prompt('do you want to tell you a top secret here?');

secret=secret.toLowerCase();

if (secret=='yes'||secret=='y'){
    alert('the secret is about a great school which is ASAC');
}else if (secret=='no'||secret=='n'){
    alert('oh no... WHY!!!! :( ');
}
//console.log(secret);
let ASAC=prompt('do you know ASAC school?');
ASAC=ASAC.toUpperCase();
if (ASAC=='YES'||ASAC=='Y'){
    alert('good so you are great');
} else if (ASAC=='NO'||ASAC=='N'){
    alert('you need to know more !!');
}
//console.log(ASAC);
alert('i hope see  you again '+ userName+', '+' but for now you need to leave goodbuy!');

