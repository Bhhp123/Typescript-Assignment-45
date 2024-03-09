


let person_name:string='Bilawal';
//Upper Case
console.log(person_name.toUpperCase());
//Lower Case
console.log(person_name.toLowerCase());
//Title Case
let UpperCase:string= person_name.charAt(0).toUpperCase();
let LowerCase:string=person_name.slice(1).toLowerCase();
let TitleCase:string=UpperCase+LowerCase;
console.log(TitleCase);