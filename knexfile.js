// Update with your config settings.
var options = {
	development: {
		client: 'pg',
		// connection: 'postgres://localhost/todos_test',
		connection: {
			database: 'knextutorial',
			user: 'postgres',
			password: 'Qwerty@123',
			host: '127.0.0.1',
			port: 5432,
		},
		migrations: {
			directory: __dirname + '/db/migrations',
		},
		seeds: {
			directory: __dirname + '/db/seeds',
		},
	},
	production: {
		client: 'pg',
		connection: process.env.DATABASE_URL,
		migrations: {
			directory: __dirname + '/db/migrations',
		},
		seeds: {
			directory: __dirname + '/db/seeds/production',
		},
	},
};

var environment = process.env.NODE_ENV || 'development';
var config = options[environment];
module.exports = require('knex')(config);
