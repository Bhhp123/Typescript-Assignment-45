//Exersice 17
var Guest_list = ['bilal', 'wajid', 'khalid'];
console.log('\nGood News! we find big table so we are inviting 3 More guest\n');
Guest_list.unshift('Aleem');
Guest_list.splice(2, 0, 'Rehaan');
Guest_list.push('Aayan');
for (var i = 0; i < Guest_list.length; i++) {
    console.log("\nMr. ".concat(Guest_list[i], " You Are invite to Dinner.\nThank YOu\n"));
}
console.log('Sorry we can not arrange big table, only two people will be invited');
while (Guest_list.length > 2) {
    var remove_Guest = Guest_list.pop();
    console.log("\nSorry Mr. ".concat(remove_Guest, ", you are not invited for Dinner\n"));
}
for (var i = 0; i < Guest_list.length; i++) {
    console.log("\nMr. ".concat(Guest_list[i], " You Are still invited.\nThank YOu\n"));
}
Guest_list.splice(0, 2);
console.log(Guest_list);
