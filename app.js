

function buttonone (){
  document.getElementById("no").addEventListener();
}

function buttontwo(){
  document.getElementById("yes").addEventListener();
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

//Randomizer

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

<<<<<<< HEAD
<<<<<<< HEAD
 /*mock data voting page*/
=======
Function m            

 /*mock data*/

=======
>>>>>>> master
 /*mock data voting page*/

>>>>>>> master
 var mockData = [
 	{
 		Type:"Two Piece",
 		Design:"Floral-Print",
 		length:"Long"
    Url: "https://www.promgirl.com/shop/dresses/viewitem-PD1561458"
 	},
 	{
 		Type:"Sleeveless"
 		length:"Floor-Length"
 		Design:"Bead Embellished Bodice"
<<<<<<< HEAD
=======
    Url:"https://www.promgirl.com/shop/dresses/viewitem-PD1520500"
>>>>>>> master
 	},
 	{
 		Type:"Strapless Sweetheart"
 		length:"Floor Length" 
 		Color:"Navy" 
 		Design:"Side Slit"
    Url:"https://www.promgirl.com/shop/dresses/viewitem-PD1399092"
 	},
  {
    Type: "Long"
    Color:"Eggplant Purple" 
    Event:"Prom Dress"
    Design:"Beaded Bodice"
<<<<<<< HEAD
=======
    Url: "https://www.promgirl.com/shop/dresses/viewitem-PD1632253"
>>>>>>> master
  },
  {
    Type:"Open-Back Illusion Long"
    Event:"Prom Dress" 
    Design:"Beaded Bodice"
    Color: "Light Pink"
<<<<<<< HEAD
=======
    Url: "https://www.promgirl.com/shop/dresses/viewitem-PD1582814"
>>>>>>> master
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
};