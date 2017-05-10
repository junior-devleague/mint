

// function buttonone (){
//   document.getElementById("no").addEventListener();
// }

// function buttontwo(){
//   document.getElementById("yes").addEventListener();
// }
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

function slider() {
   if (/*t he yes or no button is clicked then switch slide image off screen*/)
}

 /*mock data voting page*/

 var mockData = [
 	{
 		Type: " Two Piece",
 		Design: " Floral-Print",
 		length: " Long",
    Url: " https://www.promgirl.com/shop/dresses/viewitem-PD1561458"
 	},
 	{
 		Type:" Sleeveless",
 		length:" Floor-Length",
 		Design:" Bead Embellished Bodice",
    Url:" https://www.promgirl.com/shop/dresses/viewitem-PD1520500"
 	},
 	{
 		Type: " Strapless Sweetheart",
 		length: " Floor Length",
 		Color: " Navy",
 		Design: " Side Slit",
    Url: " https://www.promgirl.com/shop/dresses/viewitem-PD1399092"
 	},
  {
    Type: " Long",
    Color: " Eggplant Purple", 
    Event: " Prom Dress",
    Design: " Beaded Bodice",
    Url: " https://www.promgirl.com/shop/dresses/viewitem-PD1632253"
  },
  {
    Type: " Open-Back Illusion Long",
    Event: " Prom Dress", 
    Design: " Beaded Bodice",
    Color: " Light Pink",
    Url: " https://www.promgirl.com/shop/dresses/viewitem-PD1582814"
  }

 ];

 /*Compare page mock data*/

 var compareData = [
 	{
 		ame: " Waipahu High School",
 		percent: " 5%"
 	},
 	{
 		name: " Mckinley High School",
 		percent: " 2%"
 	},
 	{
 		name: " Radford High School",
 		percent: " 10%"
 	},
 	{
 		name: " Kalani High School",
 		percent: " 30%"
 	},
 	{
 		name: " Roosevelt High School",
 		percent: " 10%"
 	},
 	{
 		name: " Pearl City High School",
 		percent: " 13%"
 	},
 	{
 		name: " Waialua High School",
 		percent: " 30%"
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

var chart = c3.generate({
  bindto: "#chart",
  data : {
    columns: [
    ["yes", 300, 100, 80],
    ["no", 230, 80, 80],

    ],
    types: {
      yes :"pie",
      no :"pie"
    
    }
  }
});