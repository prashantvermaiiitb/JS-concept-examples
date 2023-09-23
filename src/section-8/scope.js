var firstName = 'Shiva';
console.log('Kailashi decalared in the last --> ', lastName);
function hello() {
    let hello = 'world!';
    function hello1() {
        var lastName = 'kailashi';
        console.log(`hello defined in the outer scope`, hello, firstName, lastName);
    }
    hello1();
    /** 
     * This is giving Error : scope.js:12 Uncaught ReferenceError: lastName is not defined
     * This tells that var is function scoped 
     */
    console.log(`lastname defined in the innerscope `, lastName);
    /**
     * Todo if this lastName is decalared here again using var then ☝️ error will go away.
     * and it will be printed as undefined
     */
    var lastName = 'kailashi-2';
}
var lastName = 'kailashi-3';
hello();