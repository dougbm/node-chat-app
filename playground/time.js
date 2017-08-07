var moment = require('moment');

// var date = new Date();
// var months = ['Jan', 'Fev'];
// console.log(date.getMonth());

var someTimestamp = moment().valueOf();
console.log(someTimestamp);

var createdAt = 1234;
var date = moment(createdAt);
// unix epic
// Jan 1st 1970 00:00:00 am
console.log(date.format('MMM Do YYYY HH:mm:SS a'));

// 10:35 am
console.log(date.format('h:mm a'));
