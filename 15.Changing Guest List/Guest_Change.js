var MyFriend = ['Bilal', 'Wajid', 'Aryan'];
for (var i = 0; i < MyFriend.length; i++) {
    console.log("\nMr. ".concat(MyFriend[i], "! you are invited to my dinner on sunday\nThank you.\n"));
}
var absent_Guest = 'Bilal';
var new_Guest = 'Aleem';
MyFriend[0] = new_Guest;
for (var i = 0; i < MyFriend.length; i++) {
    console.log("\nMr. ".concat(MyFriend[i], "! you are invited to my dinner on sunday\nThank you.\n"));
}
console.log("Mr. ".concat(absent_Guest, " is not coming to the party"));
