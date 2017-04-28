
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
var current = 0,
    slides = document.getElementsByTagName("img");

function changeImage() {
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.opacity = 0;
  }
  current = (current != slides.length - 1) ? current + 1 : 0;
  slides[current].style.opacity = 1;
};

var storedImages = [];

 function randomizer() {
 	Math.floor(Math.random() * 10)
 }

 console.log(randomizer);

 /*mock data*/
 var mockData = [
 	{
 		Type:"Two Piece",
 		Design:"Floral-Print",
 		length:"Long"
 	},
 	{
 		Type:"Sleeveless"
 		length:"Floor-Length"
 		design:"Bead Embellished Bodice"
 	},
 	{
 		Type:"Strapless Sweetheart"
 		length:"Floor Length" 
 		Color:"Navy" 
 		Design:"Side Slit"
 	},
 ];

