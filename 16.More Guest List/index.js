var Guest_list = ['bilal', 'wajid', 'Khalid'];
var Absent_Guest = 'Wajid';
var New_Guest = 'Aryan';
Guest_list[1] = New_Guest;
for (var i = 0; i < Guest_list.length; i++) {
    console.log("Mr. ".concat(Guest_list[i], " You Are invite to Dinner.\nThank YOu"));
}
console.log("Mr. ".concat(Absent_Guest, " You are come to Dinner.\nThank You"));
console.log('\nGood News! we find big table so we are inviting 3 More guest\n');
Guest_list.unshift('Aleem');
Guest_list.splice(2, 0, 'Rehaan');
Guest_list.push('Aayan');
for (var i = 0; i < Guest_list.length; i++) {
    console.log("Mr. ".concat(Guest_list[i], " You Are invite to Dinner.\nThank YOu"));
}
