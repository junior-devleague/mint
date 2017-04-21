

function buttonone (){
  document.getElementById("no").style.backgroundColor="green";
}

function buttontwo(){
  document.getElementById("yes").style.backgroundColor="green";
}
var storedNumbers = [];

var images = [/*dresses*/];
function yes(){
  document.getElementById("yes")
  /*
  here i put the randomizer when i getum from braden so the onlick function chooses from the array
  both yes and no function will have the same output
  */
} 

function no (){
  document.getElementById.("no")
  /*
  here i put the randomizer when i getum from braden so the onlick function chooses from the array
  both yes and no functions will have same result
  */
}


var storedImages = [];
var random = Math.floor(Math.random() * 10)
 function randomizer() {
 	random
 }

storedImages.push(random)
 
 console.log(randomizer);

function noSame() {
	if (/*random number = to storedImages*/) {/*
	Run Function Again*/}
}

 /*mock data voting page*/
 var mockData = [
 	{
 		Type:"Two Piece",
 		Design:"Floral-Print",
 		length:"Long"
 	},
 	{
 		Type:"Sleeveless"
 		length:"Floor-Length"
 		Design:"Bead Embellished Bodice"
 	},
 	{
 		Type:"Strapless Sweetheart"
 		length:"Floor Length" 
 		Color:"Navy" 
 		Design:"Side Slit"
 	},
  {
    Type: "Long"
    Color:"Eggplant Purple" 
    Event:"Prom Dress"
    Design:"Beaded Bodice"
  },
  {
    Type:"Open-Back Illusion Long"
    Event:"Prom Dress" 
    Design:"Beaded Bodice"
    Color: "Light Pink"
  }

 ];

 /*Compare page mock data*/

 var compareData = [
 	{
 		name:"Waipahu High School",
 		percent: "5%"
 	},
 	{
 		name: "Mckinley",
 		percent: "2%"
 	},
 	{
 		name: "Radford",
 		percent: "10%"
 	},
 	{
 		name: "Kalani",
 		percent: "30%"
 	},
 	{
 		name: "Roosevelt",
 		percent: "10%"
 	},
 	{
 		name: "Pearl City",
 		percent: "13%"
 	},
 	{
 		name: "Waialua",
 		percent: "30%"
 	}
 ];

 
var current = 0,
    slides = document.getElementsByTagName("img");

function changeImage() {
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.opacity = 0;
  }
  current = (current != slides.length - 1) ? current + 1 : 0;
  slides[current].style.opacity = 1;