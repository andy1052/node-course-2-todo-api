const {User} = require('./../models/user');



//middleware function to make app.get('.users/me') function private
var authenticate = (req, res, next) => {
	var token = req.header('x-auth');

	User.findByToken(token).then((user) => {
		if (!user) {
		return Promise.reject();
		}
			req.user = user;
			req.token = token;
			next();
		}).catch((e) => {
		res.status(401).send();
	});
};

module.exports = {authenticate};