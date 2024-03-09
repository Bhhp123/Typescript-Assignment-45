var person_name = 'Bilawal';
console.log(person_name.toUpperCase());
console.log(person_name.toLowerCase());
var UpperCase = person_name.charAt(0).toUpperCase();
var LowerCase = person_name.slice(1).toLowerCase();
var TitleCase = UpperCase + LowerCase;
console.log(TitleCase);
