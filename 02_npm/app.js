const stringContainsString = require('string-contains-string');
 
console.log('Obsahuje retezec "hello" retezec "world?"', stringContainsString('hello', 'world'));
 
console.log('Obsahuje retezec "hello" retezec "ell?"', stringContainsString('hello', 'ell'));
