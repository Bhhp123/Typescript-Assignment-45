let MyFriend:string[]=['Bilal','Wajid','Aryan'];

for(let i=0;i<MyFriend.length; i++) {
    console.log(`\nMr. ${MyFriend[i]}! you are invited to my dinner on sunday\nThank you.\n`);
}
let absent_Guest='Bilal';
let new_Guest='Aleem';

MyFriend[0]=new_Guest;

for(let i=0;i<MyFriend.length; i++) {
    console.log(`\nMr. ${MyFriend[i]}! you are invited to my dinner on sunday\nThank you.\n`);
}
console.log(`Mr. ${absent_Guest} is not coming to the party`);

