// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Entry 	= require("../model/entry.js"); // Pulls out the Character Model

// Routes
// =============================================================
module.exports = function(app){

	// Search for Specific Character (or all characters) then provides JSON
	app.get('/api/:entry?', function(req, res){

		// If the user provides a specific character in the URL...
		if(req.params.entry){

			// Then display the JSON for ONLY that character.
			// (Note how we're using the ORM here to run our searches)
			Entry.findAll({
				where: {
					routeName: req.params.entry
				}
			}).then(function(result){
				res.json(result);
			})
		}

		// Otherwise...
		else{
			// Otherwise display the data for all of the characters. 
			// (Note how we're using Sequelize here to run our searches)
				Entry.findAll({})
					.then(function(result){
						res.json(result);
				})
			};

	});

	// If a user sends data to add a new character...
	app.post('/api/new', function(req, res){

		// Take the request...
		var entry = req.body;

		// Create a routeName 
		var routeName = entry.name.replace(/\s+/g, '').toLowerCase();

		// Then add the character to the database using sequelize
		Entry.create({
			name: entry.name,
			role: entry.role,
			age: entry.age,
			forcePoints: entry.forcePoints
		});
		
	})
}