// Name 
var name = "[Aureo Leaño Capellan Jr.]";
var birthDate = "[April 11, 2005]";
var birthPlace = "[San Fernando City, La Union, Philippines 2500]";
var address = "[Tamurong 2nd, Candon City, Ilocos sur, Philippines]";
var course = "[ Bachelor Of Science in Computer Science]";
var year = "2";
var dream = "[Game Developer]";

//Classmate1
var name = "[Harold Dulay Cosme]";
var birthDate = "[Aplir 27, 2000]";
var birthPlace = "[Lancuas, San Emilio, Ilocos Sur]";
var adress = "[Lancuas, San Emilio, Ilocos Sur]";
var course = "[Bachelor of Science in Computer Science]";
var year = "2";
var dreamjob = "[Businessman]";

//Classmate2
var name = "[Karryle Bansan Lagrimas]";
var birthDate = "[July 20, 2005]";
var birthPlace = "[San Fernando City, La Union, Philippines 2500]";
var adress = "[Bugnay, Candon City, Ilocos Sur, Philippines 2710]";
var course = "[Bachelor Of Science in Computer Science]";
var year = "2";
var dreamjob = "[Data Analysis]";

let studentName = "Aureo Leano Capellan Jr.";
let Classmate1Name = "Harold Dulay Cosme";
let Classmate2Name = "Karryle Bansan Lagrimas";

var nameRearrange = name.split("");
let c1NameRearrange = Classmate1Name.split("");
let c2NameRearrange = Classmate2Name.split("");


let studentNameAddC1AddC2 = studentName  + " " + Classmate1Name + " " + Classmate2Name;
let nameAddname1Addname2 = name + " " + Classmate1Name +" " + Classmate2Name;

console.log(name.toUpperCase() + " was born " + birthDate + " at " + birthPlace.toUpperCase() + ", and currently living at " + address.toUpperCase()+".");
console.log(name.toLowerCase() + " is taking up " + course.toLowerCase() + " and dreams to be " + dreamjob + "after graduation.");
console.log (name.toUpperCase() + " was born " + birthDate + " at " + birthPlace.toUpperCase() + ", and currently living at " + address.toUpperCase()+".");
console.log(name.toLowerCase() + " is taking up " + course.toLowerCase() + " and dreams to be " + dreamjob + " after graduation.");

console.log(name.toUpperCase() + " was born " + birthDate + " at " + birthPlace.toUpperCase() + ", and currently living at " + address.toUpperCase()+".");
console.log(name.toLowerCase() + " is taking up " + course.toLowerCase() + " and dreams to be " + dreamjob + " after graduation.");



