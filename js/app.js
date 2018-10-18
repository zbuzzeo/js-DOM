/*Use the Document Object Model (DOM) to complete the following exercises below:*/

function spacer(exerciseNum){
      console.log('\nExercise:', exerciseNum);
}

/*1. Taylor Swift

Find the div with the id of "name1" and replace the n/a with the following:

Tay-Tay*/

var getDivName1 = document.getElementById('name1');

getDivName1.innerHTML = 'Tay-Tay';

spacer(1);
console.log(getDivName1.innerHTML);

/*2. DJ Khaled

Find the div with the id of "position2" and replace the n/a with the following: 

Project Manager*/

var getDivPosition2 = document.getElementById('position2');

getDivPosition2.innerHTML = 'Project Manager';

spacer(2);
console.log(getDivPosition2.innerHTML);

/*3. Piko Taro

Find the div with the id of "alias3" and replace the n/a with the following:

Concatenation*/

var getDivAlias3 = document.getElementById('alias3');

getDivAlias3.innerHTML = 'Concatenation';

spacer(3);
console.log(getDivAlias3.innerHTML);

/*4. Prince

Find the div with the class name of "profile" and replace the n/a with a verse from your favorite Prince song.*/

var getDivProfile = document.getElementsByClassName('profile');

getDivProfile[0].innerHTML = 'I never wanted to be your weekend lover, I only wanted to be some kind of friend';

spacer(4);
console.log(getDivProfile[0].innerHTML);

/*5. Bruce Lee

Find the div with the class name of "profile" and replace the n/a with a quote from the legend himself.*/

getDivProfile[1].innerHTML = 'Knowing is not enough, we must apply. Willing is not enough, we must do.';

spacer(5);
console.log(getDivProfile[1].innerHTML);

/*6. Samuel L Jackson

Find the div with the class name of "alias" and replace the n/a with your favorite character that Sammy portrayed.*/

var getDivAlias = document.getElementsByClassName('alias');

getDivAlias[2].innerHTML = 'Kong: Skull Island';

spacer(6);
console.log(getDivAlias[0].innerHTML);

/*7. Peter Griffin

Create a div element and give it an id of "name7". Inside this div element, give it the contents of "Peter Griffin".

Append this div element to the nameParent div*/


 
/*8. Tim Duncan

Create a div element give it an id of "alias8". Inside this div element, give it the contents of "Old Man Riverwalk".

Append this div element to the aliasParent div.*/



//Final Boss
/*9. Create your own profile.*/

