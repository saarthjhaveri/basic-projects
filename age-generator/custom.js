
function myFunction(){
var d= document.getElementById('birthday').value;

var Year= new Date();
var currentYear= Year.getFullYear();
var output= (currentYear - d)*365;

if(d>currentYear)
{
	alert('Enter correct Year');
	document.getElementById('days').innerHTML= "";  

}
else
{

document.getElementById('days').innerHTML= "You are " + output + " days old!";  }


}
