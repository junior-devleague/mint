 /*mock data voting page*/


 var mockData = [
 	{
 		Type:"Two Piece",
 		Design:"Floral-Print",
 		length:"Long",
    Url: "https://www.promgirl.com/shop/dresses/viewitem-PD1561458"
 	},
 	{
 		Type:"Sleeveless",
 		length:"Floor-Length",
 		Design:"Bead Embellished Bodice",
    Url:"https://www.promgirl.com/shop/dresses/viewitem-PD1520500"
 	},
 	{
 		Type:"Strapless Sweetheart",
 		length:"Floor Length", 
 		Color:"Navy", 
 		Design:"Side Slit",
    Url:"https://www.promgirl.com/shop/dresses/viewitem-PD1399092"
 	},
  {
    Type: "Long",
    Color:"Eggplant Purple", 
    Event:"Prom Dress",
    Design:"Beaded Bodice",
    Url: "https://www.promgirl.com/shop/dresses/viewitem-PD1632253"

  },
  {
    Type:"Open-Back Illusion Long",
    Event:"Prom Dress", 
    Design:"Beaded Bodice",
    Color: "Light Pink",
    Url: "https://www.promgirl.com/shop/dresses/viewitem-PD1582814"
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

var noSame [];

var x = Math.floor((Math.random() * 5));

function randomizer() {
	console.log(x);
};

var images = ["https://img.promgirl.com/_img/PGPRODUCTS/1561458/1000/black-navy-dress-BL-11137-a.jpg", "https://img.promgirl.com/_img/PGPRODUCTS/1520500/1000/black-dress-FB-GL1322-d.jpg", "https://img.promgirl.com/_img/PGPRODUCTS/1399092/1000/navy-dress-MF-E1778-c.jpg", "https://img.promgirl.com/_img/PGPRODUCTS/1632253/1000/eggplant-dress-FB-GL2282-a.jpg", "https://img.promgirl.com/_img/PGPRODUCTS/1582814/1000/champagne-dress-DQ-9474-b.jpg"];

function changeImage() {
	 document.images["pic"].src = images[x];
};