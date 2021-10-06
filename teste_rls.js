var readlineSync = require('readline-sync');
 
// Wait for user's response.
var userName = readlineSync.question('seu nome? ');
console.log('Oi ' + userName + '!');
 
// Handle the secret text (e.g. password).
var age = readlineSync.question('idade? ');
console.log('Oh, ' + userName + ' tem ' + age + ' anos!');