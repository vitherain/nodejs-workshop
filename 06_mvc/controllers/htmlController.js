const bodyParser = require('body-parser');

const urlencodedParser = bodyParser.urlencoded({ extended: false });

let idCounter = 0;

const people = [
    { id: ++idCounter, firstName: 'George', lastName: 'Bush', userName: 'george' },
    { id: ++idCounter, firstName: 'Donald', lastName: 'Trump', userName: 'donald' },
    { id: ++idCounter, firstName: 'Barack', lastName: 'Obama', userName: 'barack' }
];

module.exports = function(app) {
	
	app.get('/', function(request, response) {
		response.render('index', {
			message: 'Toto je zpráva ze serveru!',
			people: people 
		});
	});

	app.post('/', urlencodedParser, function(request, response) {
		let person = request.body;
		person.id = ++idCounter;
		people.push(person);
		response.redirect('/');
	});

	app.get('/about', function(request, response) {
		response.render('about');
	});
}